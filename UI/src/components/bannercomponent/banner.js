import React from "react";
import  { useState,useEffect } from "react";
import '../bannercomponent/banner.css';

function Banner()
{
    const [ BannerContent , setBannerContent ] = useState();

  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
      setBannerContent(<></>);
    }
    else
    {
      setBannerContent(
      <>
          {/* Carousel Start */}
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/img/slide01.jpg" style={{height:'700px'}} class="d-block w-100" alt="..."/>
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(6, 3, 21, .5)"}}>
                    <div class="container" style={{marginBottom:"40px "}}>
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h5 class="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                <h1 class="display-3 text-white animated slideInDown mb-4">Safe & Reliable <span class="text-primary">Logistics Solution</span> </h1>
                                 <p class="fs-5 fw-medium text-white mb-4 pb-2"> Take the complexity out of customs Freight Solutions <br/>with customs brokerage services</p>
                                  <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">About Us</a>
                                <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <div class="carousel-item">
      <img src="assets/img/slide02.jpg"  style={{height:'700px'}} class="d-block w-100" alt="..."/>
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(6, 3, 21, .5)"}}>
                    <div class="container" style={{marginBottom:"40px "}}>
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h5 class="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                <h1 class="display-3 text-white animated slideInDown mb-4">Quickest & safe <span class="text-primary">Delievery</span> </h1>
                                 <p class="fs-5 fw-medium text-white mb-4 pb-2"> Take the complexity out of customs Freight Solutions <br/>with customs brokerage services</p>
                                  <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">About Us</a>
                                <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
    <div class="carousel-item">
      <img src="assets/img/slide03.jpg"  style={{height:'700px'}} class="d-block w-100" alt="..."/>
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(6, 3, 21, .5)"}}>
                    <div class="container" style={{marginBottom:"40px "}}>
                        <div class="row justify-content-start">
                            <div class="col-10 col-lg-8">
                                <h5 class="text-white text-uppercase mb-3 animated slideInDown">Transport & Logistics Solution</h5>
                                <h1 class="display-3 text-white animated slideInDown mb-4">Allways <span class="text-primary">Trustable</span> </h1>
                                 <p class="fs-5 fw-medium text-white mb-4 pb-2"> Take the complexity out of customs Freight Solutions <br/>with customs brokerage services</p>
                                  <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">About Us</a>
                                <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    {/* Carousel End */}
      </>
      )
 }
  })

    return(
        <>
    {BannerContent}
    </>

    )
}
export default Banner;