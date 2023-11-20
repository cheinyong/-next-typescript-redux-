import Movie from "@/lib/redux/slices/movieSlice/Movie";
import Review from "@/lib/redux/slices/reviewSlice/Review";
import ReviewList from "@/app/components/Movie/ReviewList";

export default function MovieDetail(props:{
    movie:Movie,

    }){
    let {movie}=props;
    let {review}=props;
    return(<div >
        <div className="border border-3 p-3 m-4 border-primary">
            <h3>{movie.title}</h3>
            <div>{movie.director?.name}</div>
            <div>{movie.year}</div>
        </div>



    </div>)
}