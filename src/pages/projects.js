import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import Grocery from '../components/grocery-logo.png'
import Nebraska from '../components/Nebraska.png'

export default function Projects() {
  return (
    <Layout title="Projects" description="Projects">
      <div 
      style={{
        display: 'flex',
        margin: '80px',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: "center"
      }}
      >
      <div
        style={{
          display: 'flex',
          margin: '40px',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <img src={Grocery}
        style={{maxWidth: '16em', margin: '0px'}}></img>
        <div style={{ margin: '10px' }}>
        <p>
          In my software engineering class, my team and I created
          a fully functioning grocery store app which includes a
          frotend, backend, and unit tests. Check out my case study on
          it!
        </p>
        </div>
        <Link
        style={{ 
          maxWidth: 'fit-content', 
        }}
          className="button button--primary button--lg"
          to="/grocery"
        >
          Grocery Store App
        </Link>
        </div>
        <div
        style={{
          display: 'flex',
          margin: '40px',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <img src={Nebraska}
          style={{maxWidth: '16em', margin: '25px'}}></img>
          <div style={{ margin: '10px' }}>
          <p>
          For over 6 months now, I've been working with the Digital Experience Team
          at UNL to design the University's website. Read more about it here!
          </p>
          </div>
        <Link
          style={{ 
            maxWidth: 'fit-content',
          }}
          className="button button--primary button--lg"
          to="/internship"
        >
          Student Web Designer Apprentice
        </Link>
      </div>
      </div>
      <style jsx>{`
        .button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </Layout>
  );
}