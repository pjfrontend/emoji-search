import React from 'react';
import {useParams} from 'react-router-dom';

export function GroupPage() {
  const {subgroup} = useParams();
  return (
    <>
      <h1>subgroup {subgroup}</h1>{' '}
    </>
  );
}
