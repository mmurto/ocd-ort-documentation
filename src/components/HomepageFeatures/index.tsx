import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Analyzert',
    imgSrc: 'img/analyzer.png',
    description: (
      <>
        Determines the dependencies of projects and their metadata, abstracting
        which package managers or build systems are actually being used.
      </>
    ),
  },
  {
    title: 'Downloader',
    imgSrc: 'img/downloader.png',
    description: (
      <>
        Fetches all source code of the projects and their dependencies,
        abstracting which Version Control System (VCS) or other means are used
        to retrieve the source code.
      </>
    ),
  },
  {
    title: 'Scanner',
    imgSrc: 'img/scanner.png',
    description: (
      <>
        Uses configured source code scanners to detect license / copyright
        findings, abstracting the type of scanner.
      </>
    ),
  },
  {
    title: 'Advisor',
    imgSrc: 'img/advisor.png',
    description: (
      <>
        Retrieves security advisories for used dependencies from configured
        vulnerability data services.
      </>
    ),
  },
  {
    title: 'Evaluator',
    imgSrc: 'img/evaluator.png',
    description: (
      <>
        Evaluates custom policy rules along with custom license classifications
        against the data gathered in preceding stages and returns a list of
        policy violations, e.g. to flag license findings.
      </>
    ),
  },
  {
    title: 'Reporter',
    imgSrc: 'img/reporter.png',
    description: (
      <>
        Presents results in various formats such as visual reports, Open Source
        notices or Bill-Of-Materials (BOMs) to easily identify dependencies,
        licenses, copyrights or policy rule violations.
      </>
    ),
  },
  {
    title: 'Notifier',
    imgSrc: 'img/reporter.png',
    description: (
      <>
        Sends result notifications via different channels (like{' '}
        <a href="./examples/notifications/src/main/resources/example.notifications.kts">
          emails
        </a>{' '}
        and / or JIRA tickets).
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          role="img"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
