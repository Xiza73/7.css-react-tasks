import { Icon } from '@iconify-icon/react';

import { getSignInGoogleUrl } from '@/app/Auth/services/auth.service';

export const GoogleLogin: React.FC = () => {
  const handleSignInWithGoogle = async () => {
    window.open(getSignInGoogleUrl(), '_self');
  };

  return (
    <button
      className="w-full flex items-center justify-center gap-1"
      type="button"
      onClick={handleSignInWithGoogle}
    >
      <span>Sign in with</span>
      <Icon icon="logos:google-icon" />
    </button>
  );
};
