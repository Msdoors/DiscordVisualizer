// pages/index.js
import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import DiscordProfile from '../components/DiscordProfile';
import RobloxProfile from '../components/RobloxProfile';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [discordId, setDiscordId] = useState('');
  const [profileData, setProfileData] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setDiscordId(value);
    if (value) {
      // Chamada à API do Discord
      const data = await fetchDiscordProfile(value);
      setProfileData(data);
    }
  };

  const fetchDiscordProfile = async (id) => {
    // Implementar chamada à API do Discord
    // Exemplo: return await axios.get(`API_URL/${id}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <input
            type="text"
            value={discordId}
            onChange={handleInputChange}
            placeholder="Digite seu Nick ou ID do Discord"
          />
          {profileData && <DiscordProfile data={profileData} />}
          {/* Adicionar funcionalidade para Roblox aqui */}
        </div>
      )}
    </div>
  );
};

export default Home;
