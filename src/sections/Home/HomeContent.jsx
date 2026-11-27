import React from 'react';
import { HomeProfile } from './HomeProfile';
import { HomeActions } from './HomeActions';

export function HomeContent() {
  return (
    <div className="landing-container">
      <div className="row align-items-center g-4">
        <HomeProfile />
        <HomeActions />
      </div>
    </div>
  );
}

export default HomeContent;
