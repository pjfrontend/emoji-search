import React from 'react';
import {SelectVersion} from '../components/SelectVersion';
import {SelectGroup} from '../components/SelectGroup';
import {SelectKeyword} from '../components/SelectKeyword';
import {useScrollToTop} from '../hooks/useScrollToTop';

export function IndexPage() {
  useScrollToTop();
  return (
    <>
      <h1>
        EM😀JI Search /{' '}
        <span>
          <a
            href="https://github.com/pjfrontend"
            target="_blank"
            rel="noreferrer"
            className="h1-link"
          >
            github.com/pjfrontend
          </a>
        </span>
      </h1>
      <SelectVersion />
      <SelectGroup />
      <SelectKeyword />
    </>
  );
}
