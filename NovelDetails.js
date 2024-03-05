import React from 'react';

function NovelDetails({ novel }) {
  return (
    <div>
      <h2>{novel.title}</h2>
      <img src={novel.image} alt={novel.title} style={{ maxWidth: "200px", maxHeight: "300px" }} />
      <p>Description: {novel.description}</p>
      <p>Author: {novel.author}</p>
      <p>Genre: {novel.genre}</p>
      <p>Publication Year: {novel.publicationYear}</p>
    </div>
  );
}

export default NovelDetails;
