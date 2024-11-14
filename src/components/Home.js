import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';

const Home = () => {
  // Contribution card data with titles, descriptions, and donation amounts
  const contributionData = [
    { title: 'Basic Meal Support', amount: 'INR 300', description: 'Feeds five individuals for a day.' },
    { title: 'Neighborhood Support', amount: 'INR 1000', description: 'Funds an entire day of meal distribution in a neighborhood in need.' },
    { title: 'Animal Welfare Support', amount: 'INR 2000', description: 'Provides a week\'s worth of meals for stray animals.' },
  ];

  const impactStories = [
    { title: 'Asha’s Resilience', content: 'After losing her home, Asha found comfort in the meals we provide each day. “It’s more than food, it’s hope.”' },
    { title: 'Tiger the Stray', content: 'Once starving, Tiger now receives food and care from our team, thanks to generous supporters like you.' },
  ];

  return (
    <div>
      <div className="hero-section">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false} // Hide thumbnail indicators
          showIndicators={false} // Hide dot indicators
          aria-label="Image carousel showcasing NGO activities"
        >
          <div>
            <img src="/images/pexels-ajaybhargavguduru-939702.jpg" alt="Volunteers distributing food and essentials to families." />
          </div>
          <div>
            <img src="/images/pexels-rdne-6646917.jpg" alt="Healthcare services provided by the NGO at a community health camp." />
          </div>
          <div>
            <img src="/images/pexels-rdne-6646917.jpg" alt="Children engaged in an educational session organized by the NGO." />
          </div>
          <div>
            <img src="/images/pexels-rdne-6646917.jpg" alt="Volunteers feeding stray animals as part of an animal welfare initiative." />
          </div>
          <div>
            <img src="/images/pexels-rdne-6646917.jpg" alt="Volunteers participating in an environmental clean-up drive." />
          </div>
        </Carousel>
      </div>

      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h1>Our Mission: A World Without Hunger</h1>
            <p>We strive to eliminate hunger and ensure that every individual has access to nutritious food and support.</p>
          </div>
          <div className="mission-image">
            <img src="/images/pexels-rdne-6646917.jpg" alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="contribution-cards">
        <h2>Make a Difference</h2>
        <div className="cards-container">
          {contributionData.map((contribution, index) => (
            <div className="card" key={index}>
              <h3>{contribution.amount}</h3>
              <p>{contribution.description}</p>
              {/* Removed the Donate Now button */}
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stories Section with a better design */}
      <section className="impact-stories">
        <h2>Impact Stories</h2>
        <div className="stories-container">
          {impactStories.map((story, index) => (
            <div className="story-card" key={index}>
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partnered-companies">
        <h2>Our Partners</h2>
        <div className="partners-container">
          <img src="/images/pexels-rdne-6646917.jpg" alt="Partner 1" />
          <img src="/images/pexels-rdne-6646917.jpg" alt="Partner 2" />
          <img src="/images/pexels-rdne-6646917.jpg" alt="Partner 3" />
        </div>
      </section>
    </div>
  );
};

export default Home;
