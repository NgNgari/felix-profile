import profile from "../data/profile";
import socials from "../data/socials";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__image-wrapper">
        <img
          src={profile.profileImage}
          alt={`${profile.name} profile`}
          className="profile-card__image"
          decoding="async"
        />
      </div>

      <div className="profile-card__content">
        <span className="profile-card__status">
          <span className="profile-card__status-dot"></span>
          Available for conversations
        </span>

        <h2>{profile.name}</h2>

        <a
          className="profile-card__phone"
          href={socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Message Felix on WhatsApp at plus 254 712 135 775"
        >
          +254712135775
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
