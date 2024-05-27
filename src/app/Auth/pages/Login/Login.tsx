import { useState } from 'react';

import { Container } from '@/shared/components/Container';

import { GoogleLogin } from './components/GoogleLogin';
import { PasswordLogin } from './components/PasswordLogin';

const Tab = {
  PASSWORD: 'Password',
  PLATFORM: 'Platform',
} as const;
type Tab = (typeof Tab)[keyof typeof Tab];

export const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PASSWORD);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <Container title="Join with">
      <menu
        role="tablist"
        aria-label="Window with Tabs"
      >
        <button
          role="tab"
          aria-controls={Tab.PASSWORD}
          aria-selected={activeTab === Tab.PASSWORD}
          onClick={() => handleTabClick(Tab.PASSWORD)}
        >
          {Tab.PASSWORD}
        </button>
        <button
          role="tab"
          aria-controls={Tab.PLATFORM}
          aria-selected={activeTab === Tab.PLATFORM}
          onClick={() => handleTabClick(Tab.PLATFORM)}
        >
          {Tab.PLATFORM}
        </button>
      </menu>
      {activeTab === Tab.PASSWORD && (
        <article
          role="tabpanel"
          id={Tab.PASSWORD}
          className="min-h-32"
        >
          <PasswordLogin />
        </article>
      )}
      {activeTab === Tab.PLATFORM && (
        <article
          role="tabpanel"
          id={Tab.PLATFORM}
          className="min-h-32 flex flex-col items-center justify-center"
        >
          <GoogleLogin />
        </article>
      )}
    </Container>
  );
};
