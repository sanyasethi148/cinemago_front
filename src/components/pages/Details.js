// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
 
// export default function Details() {
 
//     const [movie, setmovie] = useState({});
//     const { movieid } = useParams();
//     useEffect(() => {
//         axios.defaults.headers = {
//             auth: localStorage.getItem("token"),
//         };
//         // console.log(localStorage.getItem("token"));
//         async function fetchData() {
//             try {
//                 const data = (await axios.get(`http://localhost:4000/api/findbyid/${movieid}`, {})).data;
//                 setmovie(data);
//                 console.log(data);
//             }
//             catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchData();
//     }, []);
 
//     return (
//         <div>
//             <div>
//                 <img src={movie.movieimg} alt="" />
//             </div>
//             <div>
//                 Movie Name : {movie.movieName}
//             </div>
//             <div>
//               Theatre : {movie.theatre}
//             </div>
//             <div>
//               Language : {movie.language}
//             </div>
//             <div>
//              Genre : {movie.genre}
//             </div>
//         </div>
//     );
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Footer from '../footer/Footer';
// import Navbar from '../nav-bar/Navbar';
import "../styles/Details.css"
import { AiFillLike } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaClinicMedical } from 'react-icons/fa';



export default function DoctorsSinglepage() {

    const [movie, setmovie] = useState({});
    const {id} = useParams();

    useEffect(() =>        
    {
        axios.defaults.headers = {
             auth : localStorage.getItem("token")
        }

        async function fetchdata()
        {
            try {
                const data = (await axios.get(`http://localhost:4000/api/findbyid/${id}`,{})).data
                setmovie(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    },[])

    async function handleBooking()
    {
    const userId = {id : localStorage.getItem("userid")}
    console.log(userId)
      await axios.post(`http://localhost:8000/api/movieBooked/${id}`,userId).then(function (response)
      {
        if(response.data)
        {
            window.location.href = "/book"
          console.log("Doctor Booked");
        }
      }).catch(function (error)
      {
        console.log(error);
      })
  }

  return (
    <>
    <div className="navbarbackgroundcolor">
    </div>
        <div className="singleDoctorContainer">
            <div className="movieeatail">
                <div className="Doctorimg">
                    <img src={movie.movieimg} alt="" />
                </div>
                <div className="DDetail">
                    <h1>{movie.movieName}</h1>
                    <p>{movie.theatre}</p>
                    <p>{movie.language}</p>
                    <p>{movie.genre}</p>
                    <p> <BsCheckCircleFill style={{color : "green"}}/> Medical Registration Verified</p>
                    <p style={{color : "green", fontSize : "18px" }}><span><AiFillLike/></span>{movie.rating}%</p>
                    <p>{movie.About}</p>
                </div>
            </div>
            <div className="doctoerBooked">
                <div className="feebar">
                    <p><FaClinicMedical style={{color : "#0098EC"}}/></p>
                    <p>Clinic Appointment</p>
                    <p><b>₹{movie.Fees} fee</b></p>
                </div>
                <button onClick={() =>
                {
                    handleBooking();
                }}>Book Doctor</button>
            </div>
        </div>
    </>
  )
}