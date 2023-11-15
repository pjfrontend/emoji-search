import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {SelectVersion} from '../components/SelectVersion';
import {EmojiButton} from '../components/EmojiButton';
import {useScrollToTop} from '../hooks/useScrollToTop';

export function VersionPage() {
  const {version} = useParams();
  useScrollToTop(version);
  const sanitisedVersion = version?.replace('-', '.') || '';
  const {reverseLookup} = useEmojiData();
  return (
    <div key={version}>
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
    </div>
  );
}
