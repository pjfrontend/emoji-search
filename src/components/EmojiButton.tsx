import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';

export function EmojiButton({emoji}: {emoji: string}) {
  const navigate = useNavigate();
  const {emojis} = useEmojiData();
  const emojiObj = emojis[emoji || ''];
  return (
    <a
      href="."
      onClick={(e) => {
        e.preventDefault();
        navigate(`/emoji/${emoji}`);
      }}
      className="emoji-btn"
      title={emojiObj.keywords.join(' ')}
    >
      {emoji}
    </a>
  );
}
