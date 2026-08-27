import profile from "../data/profile";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__image-wrapper">
        <img
          src={profile.profileImage}
          alt={`${profile.name} profile`}
          className="profile-card__image"
        />
      </div>

      <div className="profile-card__content">
        <span className="profile-card__status">
          <span className="profile-card__status-dot"></span>
          Available for conversations
        </span>

        <h2>{profile.name}</h2>

        <p>{profile.location}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
