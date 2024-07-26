import '../HomeComponent/Home.css';
function Home()
{

return(
<>
      
 {/* Home page Start */}
 <div class="container-fluid overflow-hidden py-5 px-lg-0">
        <div class="container about py-5 px-lg-0">
            <div class="row g-5 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minheight: '400px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="assets/img/home.jpg" style={{objectfit: 'cover'}} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="text-secondary text-uppercase mb-3">Home page</h6>
                    <h1 class="mb-5">Quick Transport and Logistics Solutions</h1>
                    <p class="mb-5">
A shipment hub is like a big center where things come and go. When stuff arrives, workers check it to make sure it's good quality. Then they organize it neatly based on where it needs to go. The hub has a place to store everything until people or stores need it. When orders come in, workers find the right items, pack them up, and send them out for delivery. The hub uses smart systems to keep track of everything so they don't run out of stuff or have too much of it. Choosing the right place for the hub helps make sure things get to where they need to go quickly and without costing too much.The hub is like a traffic controller for packages. It decides which ones go where and how they get there. It might send some packages by truck, others by plane, and maybe even by boat if they're going far away.</p>
                    <div class="row g-4 mb-5">
                      
                    </div>
                    <a  class="btn btn-primary py-3 px-5">Explore More</a>
                </div>
            </div>
        </div>
    </div>
    {/* home page End */}


</>
);
}
export default Home;