import Movie from "@/lib/redux/slices/movieSlice/Movie";

export default function MovieDetail(props:{movie:Movie}){
    let {movie}=props;
    return(<div className="border border-3 p-3 m-4 border-primary">
        <h3>{movie.title}</h3>
        <div>{movie.director?.name}</div>
        <div>{movie.year}</div>

        <div className='ms-auto'>
            <button type={"button"} className='btn btn-primary'>
                edit
            </button>
        </div>

    </div>)
}