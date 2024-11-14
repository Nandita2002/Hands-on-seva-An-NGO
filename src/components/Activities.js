import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './activity.css'; // Custom styles

const ResponsiveLayout = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Our Community Initiatives</h1>
      </header>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="image1.jpg" className="card-img-top" alt="Initiative 1" />
            <div className="card-body">
              <h5 className="card-title">Weekly Food Drives</h5>
              <p className="card-text">Distributing meals to those in need every Sunday.</p>
              <a href="/food-drives" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="image2.jpg" className="card-img-top" alt="Initiative 2" />
            <div className="card-body">
              <h5 className="card-title">Animal Feeding Programs</h5>
              <p className="card-text">Providing care and nutrition to stray animals.</p>
              <a href="/animal-feeding" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="image3.jpg" className="card-img-top" alt="Initiative 3" />
            <div className="card-body">
              <h5 className="card-title">Community Support Gatherings</h5>
              <p className="card-text">Raising awareness about hunger and community involvement.</p>
              <a href="/community-gatherings" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;