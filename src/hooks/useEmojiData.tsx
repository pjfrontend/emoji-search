import React from 'react';
import data from '../data/emoji.json';
import {EmojiData} from '../types/data';

export function useEmojiData() {
  const typedData: EmojiData = {...data};
  console.log(typedData);
  const {emojis, groups, versions} = typedData;
  return {emojis, groups, versions};
}
