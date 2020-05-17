import React from "react";
import * as homeActions from "../Actions/homeaction";
import { connect } from "react-redux";
import "./index.css";
import HomeIcon from "@material-ui/icons/Home";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {},
      moviecast: {},
    };
  }
  componentDidMount() {
    this.props.getmoviedetails(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.moviecast !== prevProps.moviecast) {
      const { data } = this.props.moviecast;
      this.setState({ moviecast: data });
    }
    if (this.props.moviedetail !== prevProps.moviedetail) {
      const data2 = this.props.moviedetail.data;
      this.setState({ movieList: data2 });
    }
  }
  redirectHome=()=>{
    this.props.history.push("/")
  }
  render() {
    let movieList = this.state.movieList;
    let moviecast = this.state.moviecast;

    let date = movieList.release_date && movieList.release_date.split("-")[0];
    let directorname =
      moviecast.crew && moviecast.crew.filter((item) => item.job == "Director");
        var hours = Math.floor(movieList.runtime / 60);          
      var minutes = movieList.runtime % 60;
    return (
      <div className="child-box_mains moviedetails">
        {movieList && moviecast && directorname ? (
          <React.Fragment>
            <div className="homeicon">
              {" "}
              <HomeIcon onClick={this.redirectHome}/>
            </div>

            <div className="child_image">
              <img
                src={`https://image.tmdb.org/t/p/original/${movieList.poster_path}`}
                alt={movieList.original_title}
              />
            </div>
            <div className="movie_right">
              <div className="box-heading ratings">
                <h4 className="child_font_title">{movieList.original_title}</h4>
                <span  className="child_font_title">({movieList.vote_average})</span>
                
              </div>
              <div  className="child_font">
                {date} | {hours}:{minutes}|{" "}
                {directorname && directorname[0].name}
              </div>
        <div className="child_font">Cast:{moviecast.cast.map((item,i)=>(
          <React.Fragment key ={i}>
            {item.name},
          </React.Fragment>
        ))}</div>

              <div className="child_font">
                <p>Description :{movieList.overview}</p>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div>...loading</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.homeReducer.movieList,
    moviecast: state.homeReducer.moviecast,
    moviedetail: state.homeReducer.moviedetail,
  };
};

export default connect(mapStateToProps, { ...homeActions })(Home);
