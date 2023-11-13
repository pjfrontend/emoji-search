import React from 'react';
import data from '../data/emoji.json';

export function useEmojiData() {
  const sanitisedData = {...data};
  console.log(sanitisedData);
}
