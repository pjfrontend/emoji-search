import React from 'react';
import {useParams} from 'react-router-dom';

export function VersionPage() {
  const {version} = useParams();
  const sanitisedVersion = version?.replace('-', '.');
  return <>version {sanitisedVersion} </>;
}
