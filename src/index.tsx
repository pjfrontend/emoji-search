import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import {IndexPage} from './pages/IndexPage';
import {GroupPage} from './pages/GroupPage';
import {VersionPage} from './pages/VersionPage';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="group/:subgroup" element={<GroupPage />} />
      <Route path="version/:version" element={<VersionPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  </HashRouter>
);
