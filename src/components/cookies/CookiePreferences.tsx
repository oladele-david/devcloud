import React from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Cancel01Icon, 
  CookieIcon, 
  SquareLock02Icon,
  Analytics01Icon,
  Target01Icon,
  Settings01Icon,
  Shield01Icon
} from '@hugeicons/core-free-icons';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookiePreferencesProps {
  preferences: CookiePreferences;
  onPreferenceChange: (category: keyof CookiePreferences, value: boolean) => void;
  onSave: () => void;
  onClose: () => void;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({
  preferences,
  onPreferenceChange,
  onSave,
  onClose,
}) => {
  const { t } = useTranslation();

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: t('cookies.preferences.necessary.title', 'Necessary Cookies'),
      description: t('cookies.preferences.necessary.description', 'Essential for the website to function properly. These cannot be disabled.'),
      icon: Shield01Icon,
      required: true,
    },
    {
      key: 'functional' as keyof CookiePreferences,
      title: t('cookies.preferences.functional.title', 'Functional Cookies'),
      description: t('cookies.preferences.functional.description', 'Enable enhanced functionality and personalization, such as remembering your preferences.'),
      icon: Settings01Icon,
      required: false,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: t('cookies.preferences.analytics.title', 'Analytics Cookies'),
      description: t('cookies.preferences.analytics.description', 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.'),
      icon: Analytics01Icon,
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: t('cookies.preferences.marketing.title', 'Marketing Cookies'),
      description: t('cookies.preferences.marketing.description', 'Used to track visitors across websites to display relevant and engaging advertisements.'),
      icon: Target01Icon,
      required: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
              {t('cookies.preferences.title', 'Cookie Preferences')}
            </h2>
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={14} className="sm:size-4 text-slate-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
              {t('cookies.preferences.description', 'We use cookies to enhance your experience. You can customize your preferences below.')}
            </p>

            {/* Cookie Types */}
            <div className="space-y-3 sm:space-y-4">
              {cookieTypes.map((type) => (
                <div
                  key={type.key}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                    type.required 
                      ? 'bg-slate-50 border-slate-200' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                      type.required 
                        ? 'bg-slate-200 text-slate-500' 
                        : 'bg-brand-accent/10 text-brand-accent'
                    }`}>
                      <HugeiconsIcon icon={type.icon} size={16} className="sm:size-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs sm:text-sm font-medium text-slate-900">
                          {type.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {type.required && (
                            <span className="text-xs text-slate-500 bg-slate-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                              {t('cookies.preferences.required', 'Required')}
                            </span>
                          )}
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences[type.key]}
                              onChange={(e) => onPreferenceChange(type.key, e.target.checked)}
                              disabled={type.required}
                              className="sr-only"
                            />
                            <div className={`w-9 h-5 sm:w-11 sm:h-6 rounded-full transition-colors ${
                              preferences[type.key] 
                                ? 'bg-brand-accent' 
                                : 'bg-slate-200'
                            } ${type.required ? 'opacity-50' : ''}`}>
                              <div className={`w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow transform transition-transform ${
                                preferences[type.key] ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5'
                              } mt-0.5`} />
                            </div>
                          </label>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl">
              <div className="flex items-start gap-2 sm:gap-3">
                <HugeiconsIcon icon={SquareLock02Icon} size={14} className="sm:size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-blue-800">
                  <p className="font-medium mb-1">
                    {t('cookies.preferences.info.title', 'Your Privacy Matters')}
                  </p>
                  <p className="leading-relaxed">
                    {t('cookies.preferences.info.description', 'You can change your cookie preferences at any time by clicking the "Preferences" button in our cookie banner. Your choices will be saved and respected.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-4 sm:p-6 border-t border-slate-200">
            <button
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              {t('cookies.preferences.cancel', 'Cancel')}
            </button>
            <button
              onClick={onSave}
              className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              <HugeiconsIcon icon={CookieIcon} size={14} className="sm:size-4 mr-1.5 sm:mr-2" />
              {t('cookies.preferences.save', 'Save Preferences')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
