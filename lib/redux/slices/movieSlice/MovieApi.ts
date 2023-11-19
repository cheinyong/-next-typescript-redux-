
import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

const API = API_URL+"/movies";
axios.defaults.headers.common['Content-Type'] = 'application/json';
export const fetchAllMovie=async ()=>{
    const result = await axios.get(API)
    console.log("axios.get",result);
    const movies = await result;
    return movies;
}
export const saveMovie=async (movie:Movie)=>{
    const result = await axios.post(API,movie)
    console.log("axios save movie api",result);
    const movies = await result;
    return movies;
}

export const updateMovie=async (movie:Movie)=>{
    const result = await axios.put(API+`/${movie._id}`,movie)
    console.log("axios put update data api ",result);
    const movies = await result;
    return movies;
}