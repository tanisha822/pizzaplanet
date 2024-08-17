function Home(){
    return(
        <>
   <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} className="d-block w-100" alt="..."/>
  
        
        <div className="carousel-caption d-none d-md-block">
          <h5>...WELCOME TO MY PIZZA PLANET...</h5>
          <p>ALL ITEMS ARE AVAILABLE HERE</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>....please order your favourite items....</h5>
          <p>Some items are non deliverable please cheak</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" height={600} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>....thanks for being our customer....</h5>
          <p>thanks for order the pizza</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  
  
  
  
        
        
  
        
        
        
        
        </>
    )
  }
  export default Home;