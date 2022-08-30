import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
export default function Details() {
 
    const [movie, setmovie] = useState({});
    const { movieid } = useParams();
    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        // console.log(localStorage.getItem("token"));
        async function fetchData() {
            try {
                const data = (await axios.get(`http://localhost:4000/api/findbyid/${movieid}`, {})).data;
                setmovie(data);
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
 
    return (
        <div>
            <div>
                <img src={movie.movieimg} alt="" />
            </div>
            <div>
                Movie Name : {movie.movieName}
            </div>
            <div>
              Theatre : {movie.theatre}
            </div>
            <div>
              Language : {movie.language}
            </div>
            <div>
             Genre : {movie.genre}
            </div>
        </div>
    );
}