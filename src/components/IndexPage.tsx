import React from 'react';
import {useEmojiData} from '../hooks/useEmojiData';

export function IndexPage() {
  useEmojiData();
  return <div>emoji 😀 🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>;
}
