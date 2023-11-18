import MovieDetail from "@/app/components/Movie/MovieDetail";

const movie={
    "_id": "6554e519579476ccd795eca9",
    "title": "update success",
    "director": {
        "name": "cheinyone",
        "phoneNo": "87878787",
        "_id": "6554f4f173c7fb2048e79b26"
    },
    "year": 2002
};
export default function MoviePage({ params }: { params: { id: string } }){
    return(<div>
        <MovieDetail movie={movie}/>
    </div>)
}