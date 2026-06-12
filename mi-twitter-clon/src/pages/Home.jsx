import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const [tweets, setTweets] = useState(() => {
    return JSON.parse(localStorage.getItem("tweets")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text, username) => {
    const newTweet = { id: Date.now(), text, likes: 0, user: username };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(tweets.map((t) =>
      t.id === id ? { ...t, likes: t.likes + 1 } : t
    ));
  };

  return (
    <div>
      <h2>🏠 Inicio</h2>
      {user ? (
        <TweetForm onAddTweet={addTweet} user={user} />
      ) : (
        <p><Link to="/login">Inicia sesión</Link> para publicar tweets.</p>
      )}
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;