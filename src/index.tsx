import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import {IndexPage} from './pages/IndexPage';
import {GroupPage} from './pages/GroupPage';
import {VersionPage} from './pages/VersionPage';
import {KeywordPage} from './pages/KeywordPage';
import {EmojiPage} from './pages/EmojiPage';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="emoji/:emoji" element={<EmojiPage />} />
      <Route path="keyword/:keyword" element={<KeywordPage />} />
      <Route path="group/:subgroup" element={<GroupPage />} />
      <Route path="version/:version" element={<VersionPage />} />
      <Route path="*" element={<IndexPage />} />
    </Routes>
  </HashRouter>
);
