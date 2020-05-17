import React from "react";
import * as homeActions from "../Actions/homeaction";
import { connect } from "react-redux";
import "./index.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getmovieslist();
  }
  componentDidUpdate(prevProps) {
    if (this.props.movieList !== prevProps.movieList) {
      const { data } = this.props.movieList;
      this.setState({ movieList: data.results });
    }
  }

  handleChange = (e) => {
    let searchvalue = e.target.value;
    const results = this.props.movieList.data.results.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchvalue.toLowerCase())
    );
    this.setState({ movieList: results }); // this.setState({searchvalue:e.target.value})
  };
  moviedetail = (item) => {
    this.props.getmoviedetails(item.id);
    this.props.history.push({
      pathname: `/${item.id}`,
    });
  };
  render() {
    let movieList = this.state.movieList;
    return (
      <div>
        {movieList ? (
          <div>
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="search"
                  onChange={this.handleChange}
                />
                <button type="submit" class="searchButton">
                  <SearchIcon />
                </button>
              </div>
              <div className="homeicon">
                {" "}
                <HomeIcon />
              </div>
            </div>
            <div className="parent-box">
              {movieList &&
                movieList.map((item, i) => (
                  <div
                    className="child-box"
                    key={i}
                    onClick={() => {
                      this.moviedetail(item);
                    }}
                  >
                    <div className="image-box">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        alt={item.original_title}
                      />
                    </div>
                    <div className="box-heading">
                      <h4>{item.original_title.split(":")[0]}</h4>
                      <span>({item.vote_average})</span>
                    </div>
                    <div className="box-description">
                      <p>{item.overview}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div>...Loading</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.homeReducer.movieList,
  };
};

export default connect(mapStateToProps, { ...homeActions })(Home);
