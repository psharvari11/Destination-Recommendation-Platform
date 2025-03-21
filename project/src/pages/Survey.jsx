import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    budget: '',
    duration: '',
    travelStyle: '',
    activities: [],
    climate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('preferences', JSON.stringify(preferences));
    navigate('/recommendations');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleActivityChange = (activity) => {
    setPreferences(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  return (
    <div className="survey-container">
      <h2>Travel Preferences Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={preferences.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select budget range</option>
            <option value="budget">Budget ($0-1000)</option>
            <option value="moderate">Moderate ($1000-3000)</option>
            <option value="luxury">Luxury ($3000+)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Trip Duration</label>
          <select
            id="duration"
            name="duration"
            value={preferences.duration}
            onChange={handleChange}
            required
          >
            <option value="">Select duration</option>
            <option value="weekend">Weekend (1-3 days)</option>
            <option value="week">Week (4-7 days)</option>
            <option value="extended">Extended (8+ days)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="travelStyle">Travel Style</label>
          <select
            id="travelStyle"
            name="travelStyle"
            value={preferences.travelStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select travel style</option>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
            <option value="cultural">Cultural</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Activities</label>
          <div className="activities-grid">
            {['Hiking', 'Beach', 'Shopping', 'Museums', 'Food', 'Nightlife'].map(activity => (
              <label key={activity} className="activity-checkbox">
                <input
                  type="checkbox"
                  checked={preferences.activities.includes(activity)}
                  onChange={() => handleActivityChange(activity)}
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="climate">Preferred Climate</label>
          <select
            id="climate"
            name="climate"
            value={preferences.climate}
            onChange={handleChange}
            required
          >
            <option value="">Select climate</option>
            <option value="tropical">Tropical</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="temperate">Temperate</option>
            <option value="cold">Cold</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default Survey;