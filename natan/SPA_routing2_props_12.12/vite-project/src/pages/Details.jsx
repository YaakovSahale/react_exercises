import React from "react";

export default function Details({ name, age, biography }) {
  return (
    <div>
      <h1>Details page</h1>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{biography}</p>
      </div>
    </div>
  );
}
