import { useState } from 'react';

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
    <div className="window active w-64">
      <div className="title-bar">
        <div className="title-bar-text">Join with</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body has-space">
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
          >
            <PasswordLogin />
          </article>
        )}
        {activeTab === Tab.PLATFORM && (
          <article
            role="tabpanel"
            id={Tab.PLATFORM}
          >
            <GoogleLogin />
          </article>
        )}
      </div>
    </div>
  );
};
