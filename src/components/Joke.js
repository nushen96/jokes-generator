import React from "react";

const Joke = ({ jokeText }) => {
  return (
    <div className="joke-container">
      <p className="joke" dangerouslySetInnerHTML={{__html: jokeText}}/>
    </div>
  );
};

export default Joke;
