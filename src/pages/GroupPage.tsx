import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {EmojiButton} from '../components/EmojiButton';
import {useScrollToTop} from '../hooks/useScrollToTop';
import {NothingToDisplay} from '../components/NothingToDisplay';
import './pages.css';
import {IndexButton} from '../components/IndexButton';

export function GroupPage() {
  const {subgroup} = useParams();
  useScrollToTop(subgroup);
  const {reverseLookup} = useEmojiData();
  const safeList = reverseLookup.subgroups[subgroup || ''];
  return (
    <div key={JSON.stringify(safeList)}>
      <h1>subgroup {subgroup}</h1>
      <div className="emoji-container">
        {safeList?.map((e) => {
          return <EmojiButton key={e} emoji={e} />;
        })}
        {!safeList && <NothingToDisplay />}
      </div>
      <IndexButton />
    </div>
  );
}
