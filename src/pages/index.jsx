import Layout from "./Layout.jsx";

import Home from "./Home";
import Blog from "./Blog";
import HowToGetRoyaltyFreeBeats2025 from "./blog/HowToGetRoyaltyFreeBeats2025";
import Licensing from "./Licensing";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    Blog: Blog,
    Licensing: Licensing,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/how-to-get-royalty-free-beats-in-2025" element={<HowToGetRoyaltyFreeBeats2025 />} />
                <Route path="/licensing" element={<Licensing />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}