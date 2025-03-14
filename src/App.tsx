import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BestPractices from './pages/BestPractices';
import './index.scss';


function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

      return (
        <Router>
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                <FadeIn transitionDuration={700}>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Main />
                                <Expertise />
                                <Timeline />
                                <Project />
                                <Contact />
                            </>
                        } />
                        <Route path="/bs" element={<BestPractices />} />
                    </Routes>
                </FadeIn>
                <Footer />
            </div>
        </Router>
    );
}

export default App;