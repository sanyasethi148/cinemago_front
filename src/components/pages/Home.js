import React from "react";
// import box from "../styles/box1.jpg";
import "../styles/Home.css";
 
 
 export function Home() {
  return (
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="img-fluid w-100 h-5 " src="https://images.news18.com/ibnlive/uploads/2022/06/ek-villain-16565138774x3.jpg" alt="First slide"/>
            {/* <div class="carousel-caption d-none d-md-block">
                <h5>My Caption Title (1st Image)</h5>
                <p>The whole caption will only show up if the screen is at least medium size.</p>
            </div> */}
        </div>
        <div class="carousel-item">
            <img class="img-fluid w-100 h-5" src="https://www.thestatesman.com/wp-content/uploads/2022/04/Bhool-Bhulaiyaa-2-Teaser-SNS.jpg" alt="Second slide"/>
        </div>
        <div class="carousel-item">
            <img class="img-fluid w-100 h-5" src="https://i.ytimg.com/vi/b7i7sg_kmp0/maxresdefault.jpg" alt="Third slide"/>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
  )
};


// d-block w-100