import React from "react";
import { useState, useEffect } from "react";
function Card({ title, author, date }) {
  return (
    <article className="card">
      <p>
        <b>Author:</b> {author}
      </p>
      <h2 className="card-title">{title}</h2>
      <p className="card-date">{date}</p>
    </article>
  );
}

export default Card;
