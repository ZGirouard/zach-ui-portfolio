import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import Grocery from '../components/grocery-logo.png';
import Nebraska from '../components/Nebraska.png';
import Kiewit from '../components/Kiewit2.png';

export default function Projects() {
  return (
    <Layout title="Projects" description="Projects">
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '60px',
          marginBottom: '90px',
          flexWrap: 'wrap', // Enables wrapping
          textAlign: 'center'
        }}
      >
        <ProjectCard 
          imgSrc={Grocery} 
          title="Grocery Store App" 
          description="In my software engineering class, my team and I created a fully functioning grocery store app which includes a frontend, backend, and unit tests. Check out my case study on it!"
          link="/grocery"
        />
        <ProjectCard 
          imgSrc={Nebraska} 
          title="Student Web Designer Apprentice" 
          description="For over 6 months now, I've been working with the Digital Experience Team at UNL to design the University's website. Read more about it here!"
          link="/internship"
        />
        <ProjectCard 
          imgSrc={Kiewit} 
          title="In Progress..." 
          description="As part of my senior design project, I'm currently working with a team of students to design, develop, and implement a cloud resource manager for Kiewit. This is a year-long process filled with sponsor meetings, releases, and a lot of development! Feel free to check back later and see how it turns out!"
          link="/projects"
        />
      </div>
      <style jsx>{`
        .project-card {
          display: flex;
          margin: 50px;
          flex-direction: column;
          align-items: center;
          max-width: 420px;
          padding: 40px;
          border-radius: 8px; 
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .button:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .project-card {
            max-width: 90%; // Take up more width on smaller screens
          }
        }
      `}</style>
    </Layout>
  );
}

function ProjectCard({ imgSrc, title, description, link }) {
  return (
    <div className="project-card">
      <img src={imgSrc} style={{ maxWidth: '350px', margin: '0px' }} alt={title} />
      <div style={{ margin: '20px' }}>
        <p>{description}</p>
      </div>
      <Link className="button button--primary button--lg" to={link}>
        {title}
      </Link>
    </div>
  );
}