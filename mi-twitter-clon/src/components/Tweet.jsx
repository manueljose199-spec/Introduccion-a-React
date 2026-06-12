const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <div className="tweet-footer">
        <span>@{tweet.user || "anónimo"}</span>
        <button onClick={() => onLike(tweet.id)}>❤ {tweet.likes}</button>
      </div>
    </div>
  );
};

export default Tweet;