import React from 'react';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {useScrollToTop} from '../hooks/useScrollToTop';

export function IndexPage() {
  useScrollToTop();
  return (
    <>
      <h1>EM😀JI Search🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>
      <SelectVersion />
      <SelectGroup />
      <SelectKeyword />
    </>
  );
}
