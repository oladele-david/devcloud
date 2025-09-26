import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  CloudIcon, 
  NodeMoveUpIcon, 
  Building01Icon, 
  Shield01Icon, 
  CodeIcon 
} from '@hugeicons/core-free-icons';

type InteractiveSelectorProps = {
  compact?: boolean;
};

const InteractiveSelector = ({ compact = false }: InteractiveSelectorProps) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  const options = useMemo(() => [
    {
      title: t('portfolio.selector.options.0.title', 'E-commerce Platform Optimization'),
      description: t('portfolio.selector.options.0.description', 'Reduced cloud costs by 45% while improving performance and scalability'),
      image: '/bg.jpeg',
      icon: CloudIcon,
      category: t('portfolio.selector.options.0.category', 'FinOps')
    },
    {
      title: t('portfolio.selector.options.1.title', 'SaaS Startup Infrastructure Migration'),
      description: t('portfolio.selector.options.1.description', 'Seamless migration to AWS with zero downtime and improved reliability'),
      image: '/bg.jpeg',
      icon: NodeMoveUpIcon,
      category: t('portfolio.selector.options.1.category', 'DevOps')
    },
    {
      title: t('portfolio.selector.options.2.title', 'Financial Services Compliance & Security'),
      description: t('portfolio.selector.options.2.description', 'Built secure, compliant cloud architecture meeting regulatory requirements'),
      image: '/bg.jpeg',
      icon: Building01Icon,
      category: t('portfolio.selector.options.2.category', 'Architecture')
    }
  ], [t]);

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className={compact
      ? "relative flex flex-col items-center bg-white font-sans text-slate-900 pt-16 pb-12"
      : "relative flex flex-col items-center justify-center min-h-screen bg-white font-sans text-slate-900"}> 
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mb-2 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3 tracking-tight animate-fadeInTop delay-300">
          {t('portfolio.hero.title', 'Our Portfolio')}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
          {t('portfolio.hero.subtitle', 'Explore our successful cloud transformations and innovative solutions.')}
        </p>
      </div>

      <div className="h-12"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative rounded-2xl">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: index === 0 ? '8px 0 0 8px' : index === options.length - 1 ? '0 8px 8px 0' : '0',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#d2691e' : '#374151',
              cursor: 'pointer',
              backgroundColor: '#1f2937',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(210, 105, 30, 0.30)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(210,105,30,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#d2691e] flex-shrink-0 flex-grow-0 transition-all duration-200">
                <HugeiconsIcon icon={option.icon} size={24} className="text-white" />
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-slate-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
    