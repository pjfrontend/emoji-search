import React from 'react';
import {useEmojiData} from '../hooks/useEmojiData';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';

export function IndexPage() {
  const {emojis, groups, versions} = useEmojiData();
  return (
    <>
      <h1>EM😀JI Search🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>
      <SelectGroup />
      <SelectKeyword />
      <SelectVersion />
    </>
  );
}
