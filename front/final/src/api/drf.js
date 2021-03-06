const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMUNITY = 'community/'
const COMMENTS = 'comments/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/`,
    edit_profile: username => HOST + ACCOUNTS + 'profile/' + `${username}/` + 'edit/',
    follow: username => HOST + ACCOUNTS + `${username}/` + 'follow/',
  },
  movies: {
    movies: () => HOST + MOVIES,
    showMovies: query => HOST + MOVIES + `${query}/`,
    movie: moviePk => HOST + MOVIES + `${moviePk}/`,
    likeMovie: moviePk => HOST + MOVIES + `${moviePk}/` + 'like/',
    genres: () => HOST + MOVIES + 'genres/'
  },
  community: {
    community: () => HOST + COMMUNITY,
    review: reviewPk => HOST + COMMUNITY + `${reviewPk}/`,
    likeReview: reviewPk => HOST + COMMUNITY + `${reviewPk}/` + `like/`,
    comments: reviewPk => HOST + COMMUNITY + `${reviewPk}/` + COMMENTS,
    comment: (reviewPk, commentPk) =>
      HOST + COMMUNITY + `${reviewPk}/` + COMMENTS + `${commentPk}/`,
    movieReview: moviePk => HOST + COMMUNITY + `movie/${moviePk}/`,
  }
}
