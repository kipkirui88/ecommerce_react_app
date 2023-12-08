import React from 'react';
import './LandingPage.css'; // Create a separate CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="description">
          <h1>Welcome to My App</h1>
          <p>
            Welcome to our application! We strive to provide an exceptional user experience and deliver
            valuable services. Explore the features and functionalities to make the most out of your
            experience. If you have any questions or feedback, feel free to reach out to us.
            </p>
          <div className="get-started-btn">
            <button>Get Started</button>
          </div>
        </div>
        <div className="image">
          <img
            src="images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
            alt="Smiling Woman Volunteer"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
