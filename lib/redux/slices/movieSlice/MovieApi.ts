
// import axios from "../../../../app/setting/our_axios";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {API_URL} from "@/app/setting/API";
import axios from "@/app/setting/our_axios";

const API = API_URL+"/movies";

export const fetchAllMovie=async ()=>{
    const result = await axios.get(API);

    console.log("axios.get",result);
    const movies = await result;
    return movies;
}