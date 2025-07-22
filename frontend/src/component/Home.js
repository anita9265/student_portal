import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div >

         <nav className="navbar navbar-expand-md navbar-dark bg-dark px-5 ">
          {/* <div className='container'> */}
      {/* Brand / Logo */}
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src={require("../image/logo.jpg")}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top rounded-circle me-2"
        />
        Student Portal
      </a>

      {/* Toggler icon for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
          <li className="nav-item">
            <a className="nav-link active text-success fs-6" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn  btn-sm btn-success  fs-6 text-white fs-5 ms-4 ">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="btn btn-success fs-6 ms-4  btn-sm">
              Register
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
         </nav>

      <main >
      {/* slider  */}
    
<Carousel>
<Carousel.Item>
  {/* Full-screen background image with overlay */}
  <div
    className="d-flex justify-content-center align-items-center text-center text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${require("../image/slider1.webp")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      width: "100%",
    }}
  >
    <div className="container px-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="mb-3">Hello Students</h3>
          <h1 className="mb-4 fw-bold text-success" style={{fontFamily:"cursive"}}>Welcome to Education</h1>
          <p className="lead">
            This is an edu meeting HTML CSS template provided by TemplateMo website.
            This is a Bootstrap v5.1.3 layout. The video background is taken from
            Pexels website, a group of young people by Pressmaster.
          </p>
        </div>
      </div>
    </div>
  </div>
</Carousel.Item>



<Carousel.Item>
  {/* Full-screen background image with overlay */}
  <div
    className="d-flex justify-content-center align-items-center text-center text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${require("../image/slider2.webp")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      width: "100%",
    }}
  >
    <div className="container px-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="mb-3">Hello Students..</h3>
          <h1 className="mb-4 fw-bold text-success" style={{fontFamily:"cursive"}}>Welcome to Education</h1>
          <p className="lead text-light">
            This is an edu meeting HTML CSS template provided by TemplateMo website.
            This is a Bootstrap v5.1.3 layout. The video background is taken from
            Pexels website, a group of young people by Pressmaster.
          </p>
        </div>
      </div>
    </div>
  </div>
</Carousel.Item>


<Carousel.Item>
  {/* Full-screen background image with overlay */}
  <div
    className="d-flex justify-content-center align-items-center text-center text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${require("../image/slider4.jpg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      width: "100%",
    }}
  >
    <div className="container px-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="mb-3">Hello Students</h3>
          <h1 className="mb-4 fw-bold text-success" style={{fontFamily:"cursive"}}>Welcome to Education</h1>
          <p className="lead">
            This is an edu meeting HTML CSS template provided by TemplateMo website.
            This is a Bootstrap v5.1.3 layout. The video background is taken from
            Pexels website, a group of young people by Pressmaster.
          </p>
        </div>
      </div>
    </div>
  </div>
</Carousel.Item>



</Carousel>

      {/* cards */}
        <div className='container'>
           <section class=" text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-5 mb-3 text-success">Album example</h1>
            <p class="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>
              <div class="album py-5 ">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider3.webp")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4'>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>
        <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider1.webp")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4
      '>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>
        <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider2.webp")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4'>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>
        <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider3.webp")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4'>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>
        <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider4.jpg")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4'>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>
        <div className="col ">
  <div className=" shadow-lg">
    {/* Top Image */}
    <img
      src={require("../image/slider5.jpg")}
      className="card-img-top"
      alt="Thumbnail"
      style={{ height: "200px", objectFit: "cover" }}
    />

    {/* Card Content */}
    <div className="card-body my-4 mx-3">
      <h2 className='text-success fs-4'>Web Designer</h2>
    <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
      {/* Footer Button Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group mb-3">
  <button
    className="btn btn-success btn-sm text-white px-4 py-2 rounded-pill fs-6 shadow-sm"
  >
    View
  </button>
  <button
    className="btn btn-outline-light btn-sm text-success px-4 py-2 rounded-pill fs-6 shadow-sm ms-3 border border-success"
  >
    Edit
  </button>
</div>

        <small className="text-body-secondary">9 mins ago</small>
      </div>
    </div>
  </div>
      </div>

          </div>
        </div>
      </div>
    </div>
      </main>
{/* footer section */}
    <Footer></Footer>

    </div>
  );
}

export default Home;
