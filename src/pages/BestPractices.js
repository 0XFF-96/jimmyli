import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const bestPracticesList = [
    { title: 'Use Semantic HTML', explanation: 'Using semantic HTML improves accessibility and SEO.' },
    { title: 'Optimize Images', explanation: 'Optimizing images reduces load time and improves user experience.' },
    { title: 'Implement Responsive Design', explanation: 'Responsive design ensures your site works on all devices.' },
    // Add more best practices as needed
];

const BestPractices = () => {
    const [userSelections, setUserSelections] = useState({});
    const [successCount, setSuccessCount] = useState(0);
    const successCriteria = 12; // Define success criteria

    useEffect(() => {
        const storedSelections = JSON.parse(localStorage.getItem('bestPractices')) || {};
        setUserSelections(storedSelections);
    }, []);

    const handleCheckboxChange = (title) => {
        const updatedSelections = { ...userSelections, [title]: !userSelections[title] };
        setUserSelections(updatedSelections);
        localStorage.setItem('bestPractices', JSON.stringify(updatedSelections));
    };

    useEffect(() => {
        const count = Object.values(userSelections).filter(Boolean).length;
        setSuccessCount(count);
        if (count >= successCriteria) {
            fetchRandomAnimal();
        }
    }, [userSelections]);

    const fetchRandomAnimal = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search'); // Example API
        const data = await response.json();
        alert(`Congratulations! You have met the criteria. Here is a cute animal: ${data[0].url}`);
    };

    return (
        <div className="container" id="bs" style={{ padding: '20px', backgroundColor: '#121212', color: '#ffffff' }}>
            <h1 style={{ textAlign: 'center' }}>Best Practices</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {bestPracticesList.map((practice) => (
                    <li key={practice.title} style={{ margin: '10px 0' }}>
                        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)', backgroundColor: '#1e1e1e', color: '#ffffff' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={userSelections[practice.title] || false}
                                    onChange={() => handleCheckboxChange(practice.title)}
                                    style={{ accentColor: '#ffffff' }}
                                />
                                <strong>{practice.title}</strong>: {practice.explanation}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="summary-box" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#1e1e1e', border: '1px solid #ccc', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.3)', color: '#ffffff' }}>
                <h2 style={{ margin: '0 0 10px 0' }}>Summary</h2>
                <p>You have met <strong>{successCount}</strong> out of <strong>{bestPracticesList.length}</strong> best practices.</p>
                <p>Success Criteria: Meet at least <strong>{successCriteria}</strong> best practices.</p>
            </div>
        </div>
    );
};

export default BestPractices;