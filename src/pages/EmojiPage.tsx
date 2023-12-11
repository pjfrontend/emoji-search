import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {useScrollToTop} from '../hooks/useScrollToTop';
import './pages.css';
import {BackButton} from '../components/BackButton';

export function EmojiPage() {
  const {emoji} = useParams();
  useScrollToTop(emoji);
  const {emojis} = useEmojiData();
  const navigate = useNavigate();
  const emojiObj = emojis[emoji || ''];
  return (
    <div key={emoji}>
      <div className="emoji-page">
        <div className="emoji-focus-container">
          <a
            href="."
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(emojiObj.emoji);
            }}
            className="emoji-focus"
          >
            {emojiObj.emoji}
          </a>
          <div className="sans-serif">(Click on Emoji to copy it to the clipboard)</div>
        </div>
        <div className="sans-serif">
          <div>Code: {emojiObj.code}</div>
          <div>Group: {emojiObj.group}</div>
          <div>
            Subgroup:{' '}
            <a
              href="."
              onClick={(e) => {
                e.preventDefault();
                navigate(`/group/${emojiObj.subgroup}`);
              }}
              className="no-decoration"
            >
              {emojiObj.subgroup}
            </a>
          </div>
          <div>
            Since version:{' '}
            <a
              href="."
              onClick={(e) => {
                e.preventDefault();
                navigate(`/version/${emojiObj.since}`);
              }}
              className="no-decoration"
            >
              {emojiObj.since}
            </a>
          </div>
          <div>
            Keywords:{' '}
            {emojiObj.keywords.map((x) => {
              return (
                <>
                  <a
                    key={x}
                    href="."
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/keyword/${x}`);
                    }}
                    className="no-decoration"
                  >
                    {x}
                  </a>
                  <span>,</span>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
}
