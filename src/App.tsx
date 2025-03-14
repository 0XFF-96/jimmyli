import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  FloatingNav,
} from "./components";
import FadeIn from './components/FadeIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BestPractices from './pages/BestPractices';
import CV from './pages/CV';
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
        <Router basename="/jimmyli">
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                <FadeIn transitionDuration={700}>
                    <Routes>
                        <Route path="/" element={
                            <>
                            {/* <FloatingNav /> 添加浮动导航 */}
                                <Main />
                                <Expertise />
                                <Timeline />
                                <Project />
                                <Contact />
                            </>
                        } />
                        <Route path="/bs" element={<BestPractices />} />
                        <Route path="/cv" element={<CV />} />
                    </Routes>
                </FadeIn>
                <Footer />
            </div>
        </Router>
    );
}

export default App;