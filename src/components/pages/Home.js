import React from "react";
// import box from "../styles/box1.jpg";
import "../styles/Home.css";
 
 
 export function Home() {
  return (
    <div>
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
<section className="courses">
            <div className="facility">
            <h1>Facilties We Offer</h1>
            <p>With changing time and increasing pollution, people are more prone to diseases. <br></br>
              We make sure that every person gets good healthcare in nearby locality and there is no harm to life. <br></br>
              Med-hElp provides every patient best treatment, easy appointment booking, medicines on doorstep and advices from our health experts.</p>  
           </div>

           <div class="rows">
                    <div class="facility-col">
                        <h3>Book Appoinment</h3>
                        <p>You can easily book appoinment for doctors in your locality.</p>
                    </div>
                    <div class="facility-col">
                        <h3>Order medicines</h3>
                        <p>We provide economical medicines with delivery in just one day.</p>
                    </div>
                    <div class="facility-col">
                        <h3>Health Experts</h3>
                        <p>You can directly chat with our health experts.</p>
                    </div>
                </div>
          </section>     
          <section class="testimonials">
            <h1>What Our Users Say</h1>
            <p>Med-hElp is the best for healthcare</p>

            <div class="row">
                <div class="testimonials-col">
                    {/* <img src="yep.jpg"> */}
                    <div>
                    <p>I had severe skin infection back in 2019. After visiting almost 5 doctors my condition was still the same. 
                        Then I got to know about Med-hElp, found a doctor through it and my health improved within a week.</p>
                        <h3>Bean</h3>
                    </div>
                </div>
                <div class="testimonials-col">
                    {/* <img src="yes.jpg"> */}
                    <div>
                    <p>Now I don't buy medicines by going on medical stores or any other 
                        website because medicines available on Med-hElp are very low price.  </p>
                        <h3>Spongebob</h3>
                    </div>
                </div>
            </div>
        </section>
</div>

  )
};



// d-block w-100