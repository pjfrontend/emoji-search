import React from 'react';
import {useParams} from 'react-router-dom';
import {useEmojiData} from '../hooks/useEmojiData';
import {EmojiButton} from '../components/EmojiButton';
import {useScrollToTop} from '../hooks/useScrollToTop';
import './pages.css';
import {IndexButton} from '../components/IndexButton';

export function VersionPage() {
  const {version} = useParams();
  useScrollToTop(version);
  const sanitisedVersion = version?.replace('-', '.') || '';
  const {reverseLookup} = useEmojiData();
  return (
    <div key={version}>
      <h1>{`Version: ${sanitisedVersion}`}</h1>
      <div className="emoji-container">
        {reverseLookup.versions[sanitisedVersion].map((e) => {
          return <EmojiButton key={e} emoji={e} />;
        })}
      </div>
      <IndexButton />
    </div>
  );
}
