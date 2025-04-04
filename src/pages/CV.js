import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CV = () => {
    const [skills, setSkills] = useState([]);

    return (
      <div className="container mx-auto p-5 bg-gray-900 text-white">
        <h1 className="text-center text-3xl mb-5">Curriculum Vitae</h1>
        
        <ul className="list-disc pl-5 mb-5">
          {skills.map((skill, index) => (
            <li key={index} className="mb-2">{skill}</li>
          ))}
        </ul>
        
        <section className="education mb-5">
          <h2 className="text-2xl mb-2">Education</h2>
          <h3 className="text-xl">The University of Western Australia (UWA)</h3>
          <p>Master of Information Technology (Feb 2024 - Current), Perth, WA, Australia</p>
          <ul className="list-disc pl-5 mb-5">
            <li>International Student Ambassador</li>
            <li>Volunteer at Career Work Fair</li>
            <li>United Cup Volunteer</li>
          </ul>
          <h3 className="text-xl">Guangdong Ocean University</h3>
          <p>Bachelor of Science in Information and Computer Science (Sept 2015 - May 2019), Guangzhou, China</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Specialized Courses: C++ Programming, Data Structure and Algorithms, Mathematical Software, Numerical Analysis, Java Language Programming, Software Engineering</li>
            <li>Coursera Courses: Machine Learning Engineering for Production, Deep Learning Specialization, AI For Everyone</li>
            <li>IELTS: 7.0</li>
          </ul>
        </section>

        <section className="work-experience mb-5">
          <h2 className="text-2xl mb-2">Work Experience</h2>
          <h3 className="text-xl">ByteDance Ltd.</h3>
          <p>Backend Engineer, Intelligent Creation Platform (Mar 2022 - May 2023), Guangzhou, China</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Managed a team to develop public cloud, mobile apps, billing and metering systems for B2B customers.</li>
            <li>Optimized service interface calls for smooth app usage.</li>
            <li>Built a user behavior data warehouse for analysis and upgraded billing systems.</li>
          </ul>
          <h3 className="text-xl">Zao’an Technology Co., Ltd.</h3>
          <p>Backend Engineer (Aug 2019 - Feb 2022), Guangzhou, China</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Developed microservice framework leading to a peak registration of 3 million users.</li>
            <li>Redesigned Instant Messaging System to support 500k DAUs.</li>
            <li>Maintained backend services with Prometheus and Grafana.</li>
          </ul>
        </section>

        <section className="project-experience mb-5">
          <h2 className="text-2xl mb-2">Project Experience</h2>
          <h3 className="text-xl">Image Classification using CNN</h3>
          <p>Patent No.: ZL 2020 1 0640272.3 (Sept 2018 - Jul 2020), Guangzhou, China</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Implemented data cleaning and feature engineering in Python.</li>
            <li>Applied Grid Search for optimal parameter combinations in CNN.</li>
            <li>Created custom data loader and network layers in PyTorch.</li>
          </ul>
        </section>

        <section className="extracurricular-activity mb-5">
          <h2 className="text-2xl mb-2">Extracurricular Activity</h2>
          <h3 className="text-xl">The National College Student Mathematical Modeling Competition</h3>
          <p>Feature Engineer (Sept 2017 - Jan 2018), Guangzhou, China</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Responsible for feature extraction and logistic regression modeling.</li>
          </ul>
        </section>

        <section className="technical-skills mb-5">
          <h2 className="text-2xl mb-2">Technical Skills</h2>
          <ul className="list-disc pl-5 mb-5">
            <li>Languages: Golang, Python, SQL (MySQL), HTML/CSS</li>
            <li>Frameworks: Go-zero, Gorm, Gorilla, GoKit, Gin</li>
            <li>Developer Tools: Git, Docker, K8s, AWS, VS Code, Vim, Linux, Ansible, Grafana</li>
          </ul>
        </section>
      </div>
  );
};

export default CV;