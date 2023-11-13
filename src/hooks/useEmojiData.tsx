import React from 'react';
import data from '../data/emoji.json';
import {EmojiData} from '../types/data';

export function useEmojiData() {
  const typedData: EmojiData = {...data};
  const {emojis, groups, versions} = typedData;
  return {emojis, groups, versions};
}
