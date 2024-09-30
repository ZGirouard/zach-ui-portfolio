import React from 'react';
import Layout from '@theme/Layout';
import Interface from '../components/D10.png';

export default function Internship() {
  return (
    <Layout title="Internship" description="Internship">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '20px',
          margin: '50px',
          marginBottom: '0px',
          justifyContent: 'center',
        }}>
          <div>
          <h1>Overview</h1>
        <p>For over 6 months, I’ve been working with the Digital Experience Group (DXG) which is part of the University Communication & Marketing department at the University of Nebraska-Lincoln. As part of my of internship, I’ve held a host of responsibilities including:</p>
        <ul>
          <li>
          Using the Drupal 10 CMS system to recreate web pages ensuring user accessibility and ease of use
          </li>
          <li>
          Creating templates using Twig, a template engine for PHP, to display imported data and adjust webpage layout          
          </li>
          <li>
          Wrote code in HTML, JavaScript, and CSS to modify webpage display and functionality          
          </li>
          <li>
          Utilized Adobe Photoshop and Adobe Illustrator to alter images and graphics to ensure they were suitable for web use          
          </li>
          <li>
          Participated in stand-up meeting to discuss goals and progress with other members of the team
          </li>
          <li>
          Trained individuals on using the Drupal 10 CMS, answering questions and addressing concerns
          </li>
        </ul>
        <p>
        Overall, the internship has been a very valuable experience to me. I’ve honed skills in a slew of areas including software development, user experience design, and graphic design. I’m confident this experience will be crucial to my success in the future.
        </p>
        <br></br>
          </div>
      </div>
      <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '20px',
        margin: '50px',
        marginTop: '0px',
        marginBottom: '60px'
      }}
      >
      <h1
      style={{
        marginBottom: '20px',
      }}
      >Drupal 10 Interface</h1>
      <img 
          src={Interface} 
          alt="Drupal 10 Interface" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            width: '100%',
            maxWidth: '1100px',
            borderRadius: '10px'
           }} 
        />
      </div>
    </Layout>
  );
}