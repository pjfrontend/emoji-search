import React from 'react';
import data from '../data/emoji.json';
import lookup from '../data/lookup.json';
import {EmojiData, EmojiReverseLookup} from '../types/data';

export function useEmojiData() {
  const typedData: EmojiData = {...data};
  const {emojis, groups, versions, keywords} = typedData;
  const reverseLookup: EmojiReverseLookup = {...lookup};
  return {emojis, groups, versions, reverseLookup, keywords};
}
