import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Settings01Icon, 
  CookieIcon, 
  Cancel01Icon
} from '@hugeicons/core-free-icons';
import CookiePreferences from './CookiePreferences';
import { CookiePreferences as CookiePreferencesType } from '../../hooks/useCookieConsent';

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferencesType) => void;
  onReject: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const { t } = useTranslation();
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferencesType>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    onAccept(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    onAccept(onlyNecessary);
  };

  const handleSavePreferences = () => {
    onAccept(preferences);
    setShowPreferences(false);
  };

  const handlePreferenceChange = (category: keyof CookiePreferencesType, value: boolean) => {
    if (category === 'necessary') return; // Can't change necessary cookies
    setPreferences(prev => ({ ...prev, [category]: value }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center">
                  <HugeiconsIcon icon={CookieIcon} size={20} className="text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                    {t('cookies.banner.title', 'We use cookies')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t('cookies.banner.description', 'This website uses first-party and third-party cookies to ensure it functions properly, analyze browsing activity, and—if you consent—personalize content and show advertising based on your browsing habits. You can learn more and access our cookie settings at any time by visiting our')} {' '}
                    <a href="/cookie-policy" className="text-brand-accent hover:underline">
                      {t('cookies.banner.link', 'Cookie Policy')}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <HugeiconsIcon icon={Settings01Icon} size={16} className="mr-2" />
                {t('cookies.banner.preferences', 'Preferences')}
              </button>
              
              <button
                onClick={handleRejectAll}
                className="inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} className="mr-2" />
                {t('cookies.banner.reject', 'Reject All')}
              </button>
              
              <button
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors"
              >
                <HugeiconsIcon icon={CookieIcon} size={16} className="mr-2" />
                {t('cookies.banner.accept', 'Accept All')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <CookiePreferences
          preferences={preferences}
          onPreferenceChange={handlePreferenceChange}
          onSave={handleSavePreferences}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </>
  );
};

export default CookieConsent;
