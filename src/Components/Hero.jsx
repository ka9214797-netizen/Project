import React from 'react'
import image from '../assets/images.jpg'


export const Hero = () => {
  return (
    <div>

        <div class="container col-xxl-8 px-4 py-5"> 
<div class="row flex-lg-row-reverse align-items-center g-5 py-5"> 
<div class="col-10 col-sm-8 col-lg-6"> 
{/* <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />  */}
     <img src={image} alt="logo" style={{height: "500px", width: "500px"}} />

</div> 
<div class="col-lg-6"> <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hydration Booster & Serum</h1> 
<p class="lead">Experience lightweight, intense hydration designed to lock in moisture, smooth fine lines, and boost your daily skincare routine with a clean, mineral-rich formula.</p>
 <div class="d-grid gap-2 d-md-flex justify-content-md-start">
 <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
<button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
 </div>
  </div> 
</div> 
</div>
    </div>
  )
}
export default Hero