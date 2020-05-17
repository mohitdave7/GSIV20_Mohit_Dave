import { gethomePageData,getmoviedata,getmoviecast} from "../Services";

export function getmovieslist() {
  return async (dispatch) => {
    const result = await gethomePageData();
    if (typeof result !== undefined && result && result.status === 200) {
      if (result) {
        dispatch({ type: "SET_HOMEPAGE_DATA", result });
      }
    } else {
      dispatch({ type: "SET_HOMEPAGE_DATA", result: {} });
    }
  };
}

export function getmoviedetails(id){
  return async (dispatch)=>{
    const result=await getmoviedata(id);
    const result2=await getmoviecast(id);

    if (typeof result !== undefined && result && result.status === 200) {
      if (result) {
        dispatch({ type: "SET_MOVIE_DATA", result });
      }
    } else {
      dispatch({ type: "SET_MOVIE_DATA", result: {} });
    }
    if (typeof result2 !== undefined && result2 && result2.status === 200) {
      if (result2) {
        dispatch({ type: "SET_MOVIECAST_DATA", result2 });
      }
    } else {
      dispatch({ type: "SET_MOVIE_DATA", result2: {} });
    }
    
  }
}
// https://api.themoviedb.org/3/movie/419705?api_key=30dff566d780ae58012ea38b94a25ab4&language=en-US