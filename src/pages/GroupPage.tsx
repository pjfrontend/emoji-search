import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {EmojiButton} from '../components/EmojiButton';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {useScrollToTop} from '../hooks/useScrollToTop';
import {NothingToDisplay} from '../components/NothingToDisplay';

export function GroupPage() {
  const {subgroup} = useParams();
  useScrollToTop(subgroup);
  const {reverseLookup} = useEmojiData();
  const safeList = reverseLookup.subgroups[subgroup || ''];
  return (
    <div key={subgroup}>
      <h1>subgroup {subgroup}</h1>
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
      <SelectGroup />
      <SelectVersion />
      <SelectKeyword />
    </div>
  );
}
