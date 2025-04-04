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

const CollapsibleGroup = ({ title, practices, userSelections, handleCheckboxChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#ffffff', margin: '10px 0' }}>{title}</h2>
            <button onClick={() => setIsOpen(!isOpen)} style={{ margin: '10px 0', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
                {isOpen ? 'Collapse' : 'Expand'} {title}
            </button>
            {isOpen && (
                <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    width: '100%' 
                }}>
                    {practices.map((practice) => (
                        <li key={practice.title} style={{ margin: '10px 0' }}>
                            <div style={{ 
                                    width: '100%',               // ✅ 重点1：固定卡片宽度
                                    boxSizing: 'border-box',     // ✅ 重点2：保证 padding 不会撑大卡片
                                border: '1px solid #ccc', 
                                borderRadius: '8px', 
                                padding: '15px', 
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)', 
                                backgroundColor: '#1e1e1e', 
                                color: '#ffffff',
                                transition: 'transform 0.2s', // 添加动画效果
                            }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input
                                        type="checkbox"
                                        checked={userSelections[practice.title] || false}
                                        onChange={() => handleCheckboxChange(practice.title)}
                                        style={{ accentColor: '#ffffff', verticalAlign: 'middle' }}
                                    />
                                    <strong>{practice.title}</strong>: {practice.explanation}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

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

    const groupedPractices = [];
    for (let i = 0; i < bestPracticesList.length; i += 4) {
        groupedPractices.push(bestPracticesList.slice(i, i + 4));
    }

    return (
        <div className="container" id="bs" style={{ padding: '20px', backgroundColor: '#121212', color: '#ffffff' }}>
            <h1 style={{ textAlign: 'center' }}>Best Practices</h1>
            {groupedPractices.map((group, index) => (
                <CollapsibleGroup key={index} title={`Best Practices Group ${index + 1}`} practices={group} userSelections={userSelections} handleCheckboxChange={handleCheckboxChange} />
            ))}
            <div className="summary-box" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#1e1e1e', border: '1px solid #ccc', padding: '15px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.3)', color: '#ffffff' }}>
                <h2 style={{ margin: '0 0 10px 0' }}>Summary</h2>
                <p>You have met <strong>{successCount}</strong> out of <strong>{bestPracticesList.length}</strong> best practices.</p>
                <p>Success Criteria: Meet at least <strong>{successCriteria}</strong> best practices.</p>
            </div>
        </div>
    );
};

export default BestPractices;