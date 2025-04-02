import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const bestPracticesList = [
    { title: 'Use Semantic HTML', explanation: 'Using semantic HTML improves accessibility and SEO.' },
    { title: 'Optimize Images', explanation: 'Optimizing images reduces load time and improves user experience.' },
    { title: 'Implement Responsive Design', explanation: 'Responsive design ensures your site works on all devices.' },
    { title: 'Consistent Formatting', explanation: 'Use a code formatter like Prettier to ensure consistent code style across your project.' },
    { title: 'Declare a Doctype', explanation: 'Always start your HTML documents with a <!DOCTYPE html> declaration to ensure proper rendering.' },
    { title: 'Meaningful Title Tags', explanation: 'Use descriptive and relevant title tags for each page to improve SEO and user experience.' },
    { title: 'Descriptive Meta Tags', explanation: 'Include meta tags like description, keywords, and author to describe the content of your pages.' },
    { title: 'Minimize HTTP Requests', explanation: 'Combine CSS and JavaScript files where possible to reduce the number of HTTP requests and improve performance.' },
    { title: 'Use External Stylesheets and Scripts', explanation: 'Link to external stylesheets and scripts to improve loading times and make maintenance easier.' },
    { title: 'Use Version Control', explanation: 'Use version control systems like Git to track changes, collaborate effectively, and maintain code history.' },
    { title: 'Comment Your Code', explanation: 'Write meaningful comments to explain complex logic and important sections of code.' },
    { title: 'Error Handling', explanation: 'Implement proper error handling to manage unexpected behavior gracefully and improve user experience.' },
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

    const fetchRandomAnimal = () => {
        fetch('https://nekos.best/api/v2/neko')
            .then(response => response.json())
            .then(json => {
                const imageUrl = json.results[0].url; // Get the image URL
                alert('Congratulations! You have met the criteria. Here is the rewards !!!'); // Show the message in an alert
                showImageInModal(imageUrl); // Show the image in a modal
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const showImageInModal = (imageUrl) => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const message = document.createElement('div');
        message.style.color = 'white'; // Text color
        message.style.marginBottom = '10px'; // Space between text and image

        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';

        modal.appendChild(message); // Add message to modal
        modal.appendChild(img); // Add image to modal
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal); // Remove modal on click
        });
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