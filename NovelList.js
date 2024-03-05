
import React from 'react';

function NovelList({ novels, onNovelClick }) {
  return (
    <ul>
      {novels.map((novel, index) => (
        <li key={index} onClick={() => onNovelClick(novel)}>
          {novel.title}
        </li>
      ))}
    </ul>
  );
}

export default NovelList;
