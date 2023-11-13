import React from 'react';
import {useEmojiData} from '../hooks/useEmojiData';

export function IndexPage() {
  const {emojis, groups, versions} = useEmojiData();
  return (
    <>
      <h1>emoji 😀 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>
      <h3>Versions</h3>
      <div style={{justifyContent: 'space-between'}}>
        {versions.map((x) => (
          <button key={x} type="button">
            {x}
          </button>
        ))}
      </div>
    </>
  );
}
