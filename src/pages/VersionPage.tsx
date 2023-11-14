import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {SelectVersion} from '../components/SelectVersion';
import {EmojiButton} from '../components/EmojiButton';

export function VersionPage() {
  const {version} = useParams();
  const sanitisedVersion = version?.replace('-', '.') || '';
  const {reverseLookup} = useEmojiData();
  return (
    <>
      <h1>version {sanitisedVersion} </h1>
      <div
        style={{
          display: 'flex',
          flexFlow: 'wrap',
        }}
      >
        {reverseLookup.versions[sanitisedVersion].map((e) => {
          return <EmojiButton key={e} emoji={e} />;
        })}
      </div>
      <SelectVersion />
      <SelectGroup />
      <SelectKeyword />
    </>
  );
}
