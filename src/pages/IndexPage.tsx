import React from 'react';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';

export function IndexPage() {
  return (
    <>
      <h1>EM😀JI Search🏴󠁧󠁢󠁥󠁮󠁧󠁿</h1>
      <SelectVersion />
      <SelectGroup />
      <SelectKeyword />
    </>
  );
}
