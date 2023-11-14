import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {SelectVersion} from '../components/SelectVersion';

export function EmojiPage() {
  const {emoji} = useParams();
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
        <div style={{fontSize: '8rem'}}>{emojiObj.emoji}</div>
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
