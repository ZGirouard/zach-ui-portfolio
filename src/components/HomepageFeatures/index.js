import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  /* {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  }, */

  {
    title: 'Bio',
    description: (
      <>
        Hi! I'm Zach Girouard, a junior at the University of Nebraska - Lincoln
        majoring in Computer Science with minors in Sociology and Advertising & Public
        Relations. I hope you enjoy looking around my portfolio!
      </>
    ),
  },


  /* {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  }, */
  
  /* {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/

];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center" style={{ display: 'flex', justifyContent: 'center', margin: '60px'}}>
        <div
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto' 
          }}
        >
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
