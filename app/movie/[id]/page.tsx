
"use client";
import MovieDetail from "@/app/components/Movie/MovieDetail";
import {getAllMovieAsync, getMovieById, movieSlice, selectMovie, useSelector} from "@/lib/redux";
import Movie from "@/lib/redux/slices/movieSlice/Movie";
import {useRouter} from "next/navigation";


export default function MoviePage({ params }: { params: { id: string } }){

    const movies = useSelector(selectMovie);
    const movie = getMovieById(movies,params.id);

    const router=useRouter();
    const btnBackHandler=()=>{
        router.push('/movie')
    }
    return(<div>
        <MovieDetail movie={movie}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnBackHandler}>
            Back
        </button>
    </div>)
}