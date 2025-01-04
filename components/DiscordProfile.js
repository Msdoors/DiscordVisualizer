// components/DiscordProfile.js
import styles from '../styles/Profile.module.css';

const DiscordProfile = ({ data }) => {
  return (
    <div className={styles.profileContainer}>
      <img src={data.banner} alt="Banner" className={styles.banner} />
      <img src={data.avatar} alt="Avatar" className={styles.avatar} />
      <h2>{data.username}</h2>
      <p>{data.about}</p>
      <p>Status: {data.status}</p>
      {/* Outras informações */}
    </div>
  );
};

export default DiscordProfile;
