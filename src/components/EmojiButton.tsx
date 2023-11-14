import React from 'react';
import {useNavigate} from 'react-router-dom';

export function EmojiButton({emoji}: {emoji: string}) {
  const navigate = useNavigate();
  return (
    <a
      href="."
      onClick={(e) => {
        e.preventDefault();
        navigate(`/emoji/${emoji}`);
      }}
      style={{textDecoration: 'none', fontSize: '4rem'}}
    >
      {emoji}
    </a>
  );
}
