import Tweet from "./Tweet";

const TweetList = ({ tweets, onLike }) => {
  return (
    <div>
      {tweets.length === 0 && <p>No hay tweets aún.</p>}
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
};

export default TweetList;