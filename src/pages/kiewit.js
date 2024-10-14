import React from 'react';
import Layout from '@theme/Layout';
import Advanced from '../components/Advanced-Page.png';
import Manage from '../components/Manage-Resources.png';
import Prolfe from '../components/Profile-Page.png';
import Forecast from '../components/Forecast.png';
import HomePage from '../components/Home-Page.png';

export default function Kiewit() {
  return (
    <Layout title="Kiewit" description="Kiewit">
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
          <h1>Senior Capstone Project</h1>
          <p>
          I'm currently working on a senior capstone project for the national construction company, Kiewit.
          For this project, my small teams is developing a cloud resource manager web application that
          uses APIs to collect cloud data. We then display this data in various graphs, tables, and metrics.
          Users are able to whitelist resources, forecast future costs, and see advanced analytics. We're still early in the
          development process, but as part of our deliverables, I created a Figma mockup for the application.
          <a href="https://www.figma.com/proto/gzWtglovL0V2VkwqvYXXOV/Homepage?node-id=41-869&node-type=canvas&t=dQuD4LRfq6ACH0gi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=41%3A869&show-proto-sidebar=1"> Check out that prototype here!</a>
          </p>
          </div>
      </div>
      <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px',
        margin: '20px',
        marginBottom: '60px',
        justifyContent: 'center',
      }}
      >
        <img 
          src={HomePage} 
          alt="Home Page" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            width: '100%',
            maxWidth: '550px',
            borderRadius: '10px'
           }} 
        />
      <img 
          src={Advanced} 
          alt="Advanced" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            width: '100%',
            maxWidth: '550px',
            borderRadius: '10px'
           }} 
        />
              <img 
          src={Manage} 
          alt="Manage" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            width: '100%',
            maxWidth: '550px',
            borderRadius: '10px'
           }} 
        />
              <img 
          src={Prolfe} 
          alt="Profile" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            width: '100%',
            maxWidth: '550px',
            borderRadius: '10px'
           }} 
        />
              <img 
          src={Forecast} 
          alt="Forecast" 
          style={{
            margin: '10px',
            transition: 'transform 0.3s',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            width: '100%',
            maxWidth: '550px',
            borderRadius: '10px'
           }} 
        />
      </div>
      <style jsx>{`
                img:hover {
                  transform: scale(1.05);
                }
              `}</style>
    </Layout>
  );
}