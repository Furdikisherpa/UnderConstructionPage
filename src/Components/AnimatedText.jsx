import './AnimatedText.css';

const AnimatedText = () => {
  const text = "COMING SOON";
  return (
    <h1 className="animated-text">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
