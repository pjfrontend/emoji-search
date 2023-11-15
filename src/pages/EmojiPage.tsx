import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {SelectVersion} from '../components/SelectVersion';
import {useScrollToTop} from '../hooks/useScrollToTop';

export function EmojiPage() {
  const {emoji} = useParams();
  useScrollToTop(emoji);
  const {emojis} = useEmojiData();
  const navigate = useNavigate();
  const emojiObj = emojis[emoji || ''];
  return (
    <div key={emoji}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <a
            href="."
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(emojiObj.emoji);
            }}
            style={{textDecoration: 'none', fontSize: '10rem'}}
          >
            {emojiObj.emoji}
          </a>
          <div style={{fontFamily: 'sans-serif'}}>
            (Click on Emoji to copy it to the clipboard)
          </div>
        </div>
        <div
          style={{
            fontFamily: 'sans-serif',
          }}
        >
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
              style={{textDecoration: 'none'}}
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
              style={{textDecoration: 'none'}}
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
                    style={{textDecoration: 'none'}}
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
      <SelectKeyword />
      <SelectGroup />
      <SelectVersion />
    </div>
  );
}
