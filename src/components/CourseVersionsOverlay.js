import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CourseVersionsOverlay() {
  const {siteConfig} = useDocusaurusContext();
  const rootVersion = siteConfig.customFields?.rootVersion ?? 'unknown';
  const submoduleVersions = siteConfig.customFields?.submoduleVersions ?? [];

  return (
    <div className="ene-versions-overlay" aria-label="Versie-overzicht">
      <div className="ene-versions-title">Versions</div>
      <div className="ene-version-line">ROOT v{rootVersion}</div>
      {submoduleVersions.map((entry) => (
        <div className="ene-version-line" key={entry.courseId}>
          {entry.id} v{entry.semver} ({entry.commit})
        </div>
      ))}
    </div>
  );
}
