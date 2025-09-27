import Home from "./Home";
import Licensing from "./Licensing";
import FreeHipHopBeats from "./FreeHipHopBeats";
import FreeTrapBeats from "./FreeTrapBeats";
import FreeDrakeBeats from "./FreeDrakeBeats";
import RoyaltyFreeInstrumentals from "./RoyaltyFreeInstrumentals";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Pages() {
    return (
        <Router>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/licensing" element={<Licensing />} />
                <Route path="/free-hip-hop-beats" element={<FreeHipHopBeats />} />
                <Route path="/free-trap-beats" element={<FreeTrapBeats />} />
                <Route path="/free-drake-beats" element={<FreeDrakeBeats />} />
                <Route path="/royalty-free-instrumentals" element={<RoyaltyFreeInstrumentals />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}