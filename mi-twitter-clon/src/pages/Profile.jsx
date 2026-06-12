import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const allTweets = JSON.parse(localStorage.getItem("tweets")) || [];
  const myTweets = allTweets.filter((t) => t.user === user?.username);

  return (
    <div>
      <h2>👤 {user?.username}</h2>
      <button onClick={logout}>Cerrar sesión</button>
      <h3>Mis tweets ({myTweets.length})</h3>
      {myTweets.length === 0 ? (
        <p>Aún no has publicado nada.</p>
      ) : (
        myTweets.map((t) => (
          <div key={t.id}>
            <p>{t.text}</p>
            <span>❤ {t.likes}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Profile;