'use client';

import DataStreamBackground from './DataStreamBackground';
import HindiNameBackground from './HindiNameBackground';
import PortraitReveal from './PortraitReveal';
import EnglishName from './EnglishName';
import RoleIdentity from './RoleIdentity';
import ScrollPrompt from './ScrollPrompt';

export default function LandingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Layer 1: Binary rain data stream (far back) */}
      <DataStreamBackground />

      {/* Layer 2: Hindi name (behind portrait) */}
      <HindiNameBackground />

      {/* Main content - centered */}
      <div className="relative max-w-5xl w-full" style={{ zIndex: 2 }}>
        <div className="flex flex-col items-center">
          {/* Layer 3: Portrait (center focus) */}
          <PortraitReveal />

          {/* Layer 4: English name (below portrait) */}
          <EnglishName />

          {/* Layer 5: Role identity */}
          <RoleIdentity />
        </div>
      </div>

      {/* Layer 6: Scroll prompt (bottom) */}
      <ScrollPrompt />
    </section>
  );
}
