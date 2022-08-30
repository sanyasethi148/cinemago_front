import axios from "axios";
import "../styles/Movies.css"
import { useEffect, useState } from "react";
 
export function Movies() {
 
    const [movie, setMovie] = useState([]);
 
    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        // console.log(localStorage.getItem("token"));
        async function fetchData() {
            try {
                const data = (await axios.get("http://localhost:4000/api/allmovies", {})).data;
                setMovie(data);
                // console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
 
    return (
        <div>
        <div className="fbg">
            <h1 className="ftitle text-center underline decoration-double">WELCOME TO THE COLLECTION OF MOVIES</h1>
            <p className="finfo">Following is the collection of movies we have :</p>
            <div className="fdata">
                <div className="table">
                    <div>
                        <p className="tt underline decoration-double">MOVIE NAME</p>
                        {
                            movie.map((single) => {
                                return (
                                    <div>
                                        <div>
                                            {single.movieName}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="table">
                    <div>
                        <p className="tt underline decoration-double">THEATRE</p>
                        {
                            movie.map((single) => {
                                return (
                                    <div>
                                        <div>
                                            {single.theatre}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="table">
                    <div>
                        <p className="tt underline decoration-double">LANGUAGE</p>
                        {
                            movie.map((single) => {
                                return (
                                    <div>
                                        <div>
                                            {single.language}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="table">
                    <div>
                        <p className="tt underline decoration-double">GENRE</p>
                        {
                            movie.map((single) => {
                                return (
                                    <div>
                                        <div>
                                            {single.genre}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="table">
                    <div>
                        <p className="tt underline decoration-double">BOOK NOW</p>
                        {
                            movie.map((single) => {
                                return (
                                    <div>
                                        <div>
                                            {single.genre}
                                        </div>
                                        <button onClick={() => {
                                            window.location.href = "/findbyid/" + single._id;
                                        }}>book this movie</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <p className="finfo">To proceed with the process of choosing your flight,
                please click on the BOOK A FLIGHT button.</p> */}
            {/* <div>
                <img src={lines} className="flines" />
            </div> */}
        </div>
    </div>
);
}