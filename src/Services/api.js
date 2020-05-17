

//To get data
function getData(Url) {
    return fetch(`${Url}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${loginToken}`,
      },
    })
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(responseData => {
        return responseData;
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  export async function gethomePageData(key) {
    return getData("https://api.themoviedb.org/3/movie/upcoming?api_key=30dff566d780ae58012ea38b94a25ab4&language=en-US");        
  }
  export async function getmoviedata(id){
    return getData(`https://api.themoviedb.org/3/movie/${id}?api_key=30dff566d780ae58012ea38b94a25ab4&language=en-US`);         
  }
  export async function getmoviecast(id){
    return getData(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=30dff566d780ae58012ea38b94a25ab4&language=en-US`);         
  }