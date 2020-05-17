let homeState = {
    movieList:[],
    moviedetail:[],
    moviecast:[]
};

const homeReducer = (state = homeState, action) => {
    switch (action.type) {
        
        case 'SET_HOMEPAGE_DATA': {
            return {
                ...state,
                movieList:action.result
            };
        }
        case 'SET_MOVIE_DATA': {
            return {
                ...state,
                moviedetail:action.result
            };
        }
        case 'SET_MOVIECAST_DATA': {
            return {
                ...state,
                moviecast:action.result2
            };
        }

        default:
            return state;
    }
};

export default homeReducer;
