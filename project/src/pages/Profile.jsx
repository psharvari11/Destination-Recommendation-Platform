import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="travel-history">
        <h3>Travel History</h3>
        <p>No trips recorded yet.</p>
      </div>
    </div>
  );
};

export default Profile;