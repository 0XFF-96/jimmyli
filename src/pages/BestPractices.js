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
        <div className="container">
            <h1>Best Practices</h1>
            <ul>
                {bestPracticesList.map((practice) => (
                    <li key={practice.title}>
                        <label>
                            <input
                                type="checkbox"
                                checked={userSelections[practice.title] || false}
                                onChange={() => handleCheckboxChange(practice.title)}
                            />
                            {practice.title}: {practice.explanation}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Summary</h2>
                <p>You have met {successCount} out of {bestPracticesList.length} best practices.</p>
                <p>Success Criteria: Meet at least {successCriteria} best practices.</p>
            </div>
        </div>
    );
};

export default BestPractices;