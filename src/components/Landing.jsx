import React from "react";

function Landing({ scroll }) {
  return (
    <div className="section">
      <h1>PostIt</h1>
      <p>Just make post or view somebody else's</p>
      <button onClick={scroll}>Get Started</button>
    </div>
  );
}

export default Landing;
