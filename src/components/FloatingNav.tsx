import React from 'react';
import { Box, Button } from '@mui/material';

const FloatingNav = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: 2,
                zIndex: 1000, // 确保浮动导航在其他元素之上
            }}
        >
            <Button href="#main-section" variant="text">Main</Button>
            <Button href="#expertise-section" variant="text">Expertise</Button>
            <Button href="#timeline-section" variant="text">Timeline</Button>
            <Button href="#projects-section" variant="text">Projects</Button>
            <Button href="#contact-section" variant="text">Contact</Button>
        </Box>
    );
};

export default FloatingNav;