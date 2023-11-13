import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import {IndexPage} from './components/IndexPage';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <HashRouter basename="/">
    <Routes>
      {/* <Route path="quiz/:kana" element={<Quiz />} />
            <Route path="review/:kana" element={<Review />} /> */}
      <Route path="*" element={<IndexPage />} />
    </Routes>
  </HashRouter>
);
