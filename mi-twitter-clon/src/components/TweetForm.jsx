import { useState } from "react";

const TweetForm = ({ onAddTweet, user }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text, user?.username);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="¿Qué estás pensando?"
        rows={3}
      />
      <button type="submit">Tweetear</button>
    </form>
  );
};

export default TweetForm;