import React from 'react';
import Layout from '@theme/Layout';
import Folie from '../components/Folie-a-deux5.png';
import Swimming from '../components/Swimming-V6.png';
import Refuge from '../components/Refuge V8.png';
import Quarters from '../components/Quarters-Of-Change-Tour-V2.png';
import Portraits from '../components/Portraits-Poster.png';

export default function AboutMe() {
  return (
    <Layout title="Graphic Design" description="Graphic Design">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        margin: '50px'
        }}>
        <p style={{
          fontSize: '1.5rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}>
        In my free time, I love to experiment with different design techniques and create posters and visuals with Adobe Photoshop, Adobe Illustrator, and Adobe InDesign. This hobby allows me to blend my artistic and technical skills, working on composition, color theory, and typography. Since I’m also a huge music fan, a lot of these pieces relate to albums or artists I enjoy. I’ve even received recognition from some of the artists themselves for my work. As part of this hobby, I want to continue to push myself and try new things. After all, I believe you can be successful by playing it safe, but I think you can only make something truly special by taking risks. From what I've created, these are some of my favorite pieces:
        </p>
      </div>
      <div
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px'
        }}>
        <img 
          src={Folie} 
          alt="Folie A Deux" 
          style={{
            flex: '1',
            margin: '5px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '330px',
            borderRadius: '10px'
           }} 
        />
        <img 
          src={Swimming} 
          alt="Swimming" 
          style={{
            flex: '1',
            margin: '5px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '330px',
            borderRadius: '10px'
           }} 
        />
                <img 
          src={Quarters} 
          alt="Quarters of Change" 
          style={{
            flex: '1',
            margin: '5px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '330px',
            borderRadius: '10px'
           }} 
        />
                <img 
          src={Portraits} 
          alt="Portraits" 
          style={{
            flex: '1',
            margin: '5px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '330px',
            borderRadius: '10px'
           }} 
        />
                <img 
          src={Refuge} 
          alt="Area of Refuge" 
          style={{
            flex: '1',
            margin: '5px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '330px',
            borderRadius: '10px'
           }} 
        />
      </div>
    </Layout>
  );
}

