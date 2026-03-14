'use client';

import PortraitReveal from './PortraitReveal';
import BilingualName from './BilingualName';
import RoleIdentity from './RoleIdentity';
import ScrollPrompt from './ScrollPrompt';

export default function LandingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center">
          <PortraitReveal />
          <BilingualName />
          <RoleIdentity />
        </div>
      </div>
      <ScrollPrompt />
    </section>
  );
}
