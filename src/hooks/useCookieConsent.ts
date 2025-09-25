import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const COOKIE_CONSENT_KEY = 'devcloud-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'devcloud-cookie-preferences';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  // Load consent status and preferences from localStorage
  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      
      if (consent === 'true') {
        setHasConsent(true);
        if (savedPreferences) {
          setPreferences(JSON.parse(savedPreferences));
        }
      } else if (consent === 'false') {
        setHasConsent(false);
      } else {
        setHasConsent(null); // First time user
      }
    } catch (error) {
      console.error('Error loading cookie consent:', error);
      setHasConsent(null);
    }
  }, []);

  const acceptCookies = (newPreferences: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(newPreferences));
      setHasConsent(true);
      setPreferences(newPreferences);
      
      // Initialize analytics/marketing scripts based on preferences
      initializeCookieScripts(newPreferences);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  const rejectCookies = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
      }));
      setHasConsent(false);
      setPreferences({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
      });
    } catch (error) {
      console.error('Error saving cookie rejection:', error);
    }
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(newPreferences));
      setPreferences(newPreferences);
      
      // Re-initialize scripts with new preferences
      initializeCookieScripts(newPreferences);
    } catch (error) {
      console.error('Error updating cookie preferences:', error);
    }
  };

  const clearConsent = () => {
    try {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_PREFERENCES_KEY);
      setHasConsent(null);
      setPreferences({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
      });
    } catch (error) {
      console.error('Error clearing cookie consent:', error);
    }
  };

  return {
    hasConsent,
    preferences,
    acceptCookies,
    rejectCookies,
    updatePreferences,
    clearConsent,
  };
};

// Initialize third-party scripts based on cookie preferences
const initializeCookieScripts = (preferences: CookiePreferences) => {
  // Analytics scripts (Google Analytics, etc.)
  if (preferences.analytics) {
    // Initialize Google Analytics or other analytics tools
    console.log('Analytics cookies enabled');
    // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
  } else {
    // Disable analytics
    console.log('Analytics cookies disabled');
    // Example: gtag('consent', 'update', { analytics_storage: 'denied' });
  }

  // Marketing scripts (Facebook Pixel, Google Ads, etc.)
  if (preferences.marketing) {
    // Initialize marketing tools
    console.log('Marketing cookies enabled');
    // Example: fbq('consent', 'grant');
  } else {
    // Disable marketing
    console.log('Marketing cookies disabled');
    // Example: fbq('consent', 'revoke');
  }

  // Functional scripts (chat widgets, etc.)
  if (preferences.functional) {
    // Initialize functional tools
    console.log('Functional cookies enabled');
  } else {
    // Disable functional tools
    console.log('Functional cookies disabled');
  }
};
