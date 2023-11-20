import Director from "@/lib/redux/slices/movieSlice/Director";
import Movie from "@/lib/redux/slices/movieSlice/Movie";

export default interface Review{
    _id?:string,
    movie?:Movie,
    rating?:number,
    review?:string
}