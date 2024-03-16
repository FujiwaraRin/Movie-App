const apikey: string = '8da4f3661635b68ba89946811fbdc844';
export const baseImagePath = (size:string,path:string) =>{
    return `https://image.tmdb.org/t/p${size}${path}`
}
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`; 
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
export const searchMovies = (keyword: string) =>{
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`
};
export const movieDetail = (id: number) =>{
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
};
export const movieCastDetail = (id:number) =>{
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`
};
