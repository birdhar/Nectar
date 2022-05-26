import React from "react";

function MatchCard({ img, heading, p, name }) {
  return (
    <div style={{ textAlign: "left", padding: "5px", marginTop: "2em" }}>
      {name ? (
        <img style={{ width: "20px", height: "70px" }} src={img} />
      ) : (
        <img style={{ width: "50px", height: "auto" }} src={img} />
      )}

      <h6 className="mt-3">{heading}</h6>
      <p>{p}</p>
    </div>
  );
}

export default MatchCard;
