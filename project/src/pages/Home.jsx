const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Wayfinder</h1>
      <p>Discover your next adventure based on your preferences and travel history.</p>
      <div className="features">
        <div className="feature">
          <h2>Personalized Recommendations</h2>
          <p>Get tailored destination suggestions based on your interests and budget.</p>
        </div>
        <div className="feature">
          <h2>Interactive Survey</h2>
          <p>Tell us about your travel preferences and let us find the perfect destination for you.</p>
        </div>
        <div className="feature">
          <h2>Travel Planning</h2>
          <p>Create and manage your travel itineraries with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;