import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {EmojiButton} from '../components/EmojiButton';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {useScrollToTop} from '../hooks/useScrollToTop';
import {NothingToDisplay} from '../components/NothingToDisplay';

export function KeywordPage() {
  const {keyword} = useParams();
  useScrollToTop(keyword);
  const {reverseLookup} = useEmojiData();
  const safeList = reverseLookup.keywords[keyword || ''];

  return (
    <div key={keyword}>
      <h1>keyword {keyword}</h1>
      <div
        style={{
          display: 'flex',
          flexFlow: 'wrap',
        }}
      >
        {safeList?.map((e) => {
          return <EmojiButton key={e} emoji={e} />;
        })}
        {!safeList && <NothingToDisplay />}
      </div>
      <SelectKeyword />
      <SelectGroup />
      <SelectVersion />
    </div>
  );
}
