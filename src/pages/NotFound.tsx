import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <div className="mx-auto h-24 w-24 md:h-28 md:w-28 mb-4">
          <img
            src="/compass.png"
            alt="Compass"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-2">{t('notfound.title', 'Route Not Found')}</h1>
        <p className="text-slate-600 max-w-xl mx-auto mb-6">
          {t('notfound.lead', "Looks like this cloud drifted off our map. Let's navigate you back to safe skies.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-5 py-3 rounded-full bg-brand-accent text-white font-semibold">
            {t('notfound.cta_home', 'Back to Home')}
          </Link>
          <Link to="/services" className="px-5 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold">
            {t('notfound.cta_services', 'Explore Services')}
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-500">{t('notfound.hint', 'Tip: Check the address or try our navigation links above.')}</p>
      </div>
    </div>
  );
};

export default NotFound;
