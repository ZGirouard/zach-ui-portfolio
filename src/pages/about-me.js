import React from 'react';
import Layout from '@theme/Layout';
import Headshot from '../components/Headshot.jpg';

export default function AboutMe() {
  return (
    <Layout title="About Me" description="About Me">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 'fitcontent',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '20px',
        }}>
        <img 
          src={Headshot} 
          alt="My Headshot" 
          style={{ flex: '1', borderRadius: '10px', maxWidth: '22em', height: 'auto', margin: '40px', padding: '40px' }} 
        />
        <p
        style={{ flex: '2', marginBottom: '20px', margin: '20px', padding: '30px' }} 
        >
        I’m a third year student at the University of Nebraska - Lincoln majoring in Computer Science with minors in Sociology and Advertising &amp; Public Relations. I’m passionate about creating accessible, aesthetic designs that give the user a phenomenal journey. I’m looking to pursue a career in UX/UI Design, Fronted Development, or something adjacent. I’ve worked with the Digital Experience Team at UNL to design and implement web pages that receive thousands of visits. I have experience with a host of languages and technologies including, but not limited to: Adobe Photoshop, Adobe Illustrator, Figma, Java, and React. Outside of my career, I love skateboarding, collecting vinyl, graphic design, thrifting clothes, and going to concerts. Contact me with any questions you have!
        </p>
      </div>
    </Layout>
  );
}