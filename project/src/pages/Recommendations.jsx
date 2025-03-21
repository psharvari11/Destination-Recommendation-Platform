import { useEffect, useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with beaches and cultural experiences',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    budget: 'moderate',
    climate: 'tropical',
    activities: ['Beach', 'Cultural', 'Food'],
  },
  {
    id: 2,
    name: 'Swiss Alps',
    description: 'Mountain adventures and stunning landscapes',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
    budget: 'luxury',
    climate: 'cold',
    activities: ['Hiking', 'Adventure'],
  },
  {
    id: 3,
    name: 'Barcelona, Spain',
    description: 'Art, architecture, and Mediterranean charm',
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216',
    budget: 'moderate',
    climate: 'mediterranean',
    activities: ['Museums', 'Food', 'Shopping'],
  },
];

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [preferences, setPreferences] = useState(null);

  useEffect(() => {
    const userPreferences = JSON.parse(localStorage.getItem('preferences'));
    setPreferences(userPreferences);

    // Simple recommendation algorithm
    const filtered = destinations.filter(dest => {
      const budgetMatch = dest.budget === userPreferences.budget;
      const climateMatch = dest.climate === userPreferences.climate;
      const activitiesMatch = dest.activities.some(activity =>
        userPreferences.activities.includes(activity)
      );

      return budgetMatch || climateMatch || activitiesMatch;
    });

    setRecommendations(filtered);
  }, []);

  if (!preferences) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recommendations">
      <h2>Your Personalized Recommendations</h2>
      <div className="recommendations-grid">
        {recommendations.map(destination => (
          <div key={destination.id} className="destination-card">
            <img
              src={destination.image}
              alt={destination.name}
              className="destination-image"
            />
            <div className="destination-content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <div className="destination-tags">
                {destination.activities.map(activity => (
                  <span key={activity} className="tag">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;