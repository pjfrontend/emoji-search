import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(

    <HashRouter basename="/">
        <Routes>
            {/* <Route path="quiz/:kana" element={<Quiz />} />
            <Route path="review/:kana" element={<Review />} /> */}
            <Route path="*" element={<div>emoji 😀 🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>} />
        </Routes>
    </HashRouter>

);
