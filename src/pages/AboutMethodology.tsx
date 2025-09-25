import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionSeparator from "@/components/methodology/SectionSeparator";
import FlowCarousel from "@/components/methodology/FlowCarousel";

const AboutMethodology: React.FC = () => {
  const { t } = useTranslation();
  const phases = [
    {
      id: 'phase-1',
      title: t('mvp.phase1.title', 'Phase 1: Assessment & Discovery'),
      duration: t('mvp.phase1.duration', '1–2 weeks'),
      summary: t('mvp.phase1.summary', 'We begin with a comprehensive evaluation of your current cloud infrastructure, spending patterns, and business objectives. This phase establishes the baseline and identifies optimization opportunities.'),
      activities: [
        t('mvp.phase1.a1', 'Infrastructure audit and documentation'),
        t('mvp.phase1.a2', 'Cost analysis and spending patterns review'),
        t('mvp.phase1.a3', 'Performance and security assessment'),
        t('mvp.phase1.a4', 'Stakeholder interviews and requirements gathering'),
        t('mvp.phase1.a5', 'Risk assessment and compliance review'),
        t('mvp.phase1.a6', 'Opportunity identification and prioritization')
      ],
      deliverables: [
        t('mvp.phase1.d1', 'Current state assessment report'),
        t('mvp.phase1.d2', 'Cost breakdown and analysis'),
        t('mvp.phase1.d3', 'Optimization opportunities matrix'),
        t('mvp.phase1.d4', 'Risk assessment document'),
        t('mvp.phase1.d5', 'Recommendations summary')
      ],
      focus: [t('mvp.phase1.f1', 'Security Review'), t('mvp.phase1.f2', 'Stakeholder Alignment'), t('mvp.phase1.f3', 'Cost Analysis')]
    },
    {
      id: 'phase-2',
      title: t('mvp.phase2.title', 'Phase 2: Strategy & Planning'),
      duration: t('mvp.phase2.duration', '1–2 weeks'),
      summary: t('mvp.phase2.summary', 'Based on our assessment findings, we develop a customized strategy and detailed implementation roadmap with clear objectives, success metrics, and a phased execution plan.'),
      activities: [
        t('mvp.phase2.a1', 'Strategic roadmap development'),
        t('mvp.phase2.a2', 'Implementation plan creation'),
        t('mvp.phase2.a3', 'Success metrics definition'),
        t('mvp.phase2.a4', 'Timeline and milestone planning'),
        t('mvp.phase2.a5', 'Resource allocation planning'),
        t('mvp.phase2.a6', 'Change management strategy')
      ],
      deliverables: [
        t('mvp.phase2.d1', 'Strategic roadmap document'),
        t('mvp.phase2.d2', 'Detailed implementation plan'),
        t('mvp.phase2.d3', 'Success metrics framework'),
        t('mvp.phase2.d4', 'Project timeline and milestones'),
        t('mvp.phase2.d5', 'Resource requirements')
      ],
      focus: [t('mvp.phase2.f1', 'Goal Setting'), t('mvp.phase2.f2', 'Timeline Planning'), t('mvp.phase2.f3', 'Team Alignment')]
    },
    {
      id: 'phase-3',
      title: t('mvp.phase3.title', 'Phase 3: Implementation & Execution'),
      duration: t('mvp.phase3.duration', '4–12 weeks'),
      summary: t('mvp.phase3.summary', 'We execute the plan in carefully planned phases, implementing changes while maintaining system stability and business continuity, with transparent communication throughout.'),
      activities: [
        t('mvp.phase3.a1', 'Phased implementation execution'),
        t('mvp.phase3.a2', 'Infrastructure optimization'),
        t('mvp.phase3.a3', 'Automation implementation'),
        t('mvp.phase3.a4', 'Monitoring and alerting setup'),
        t('mvp.phase3.a5', 'Testing and validation'),
        t('mvp.phase3.a6', 'Documentation and knowledge transfer')
      ],
      deliverables: [
        t('mvp.phase3.d1', 'Optimized infrastructure'),
        t('mvp.phase3.d2', 'Automated processes and workflows'),
        t('mvp.phase3.d3', 'Monitoring and alerting systems'),
        t('mvp.phase3.d4', 'Implementation documentation'),
        t('mvp.phase3.d5', 'Knowledge transfer sessions')
      ],
      focus: [t('mvp.phase3.f1', 'Automation'), t('mvp.phase3.f2', 'Risk Mitigation'), t('mvp.phase3.f3', 'Performance')]
    },
    {
      id: 'phase-4',
      title: t('mvp.phase4.title', 'Phase 4: Monitoring & Optimization'),
      duration: t('mvp.phase4.duration', 'Ongoing'),
      summary: t('mvp.phase4.summary', 'Continuous monitoring and optimization ensure sustained results. We provide regular reporting, proactive recommendations, and support to maximize your cloud investment.'),
      activities: [
        t('mvp.phase4.a1', 'Continuous performance monitoring'),
        t('mvp.phase4.a2', 'Regular optimization reviews'),
        t('mvp.phase4.a3', 'Proactive issue identification'),
        t('mvp.phase4.a4', 'Performance reporting and analysis'),
        t('mvp.phase4.a5', 'Ongoing recommendations'),
        t('mvp.phase4.a6', 'Support and maintenance')
      ],
      deliverables: [
        t('mvp.phase4.d1', 'Performance monitoring dashboards'),
        t('mvp.phase4.d2', 'Regular optimization reports'),
        t('mvp.phase4.d3', 'Proactive recommendations'),
        t('mvp.phase4.d4', 'Ongoing support and maintenance'),
        t('mvp.phase4.d5', 'Continuous improvement plans')
      ],
      focus: [t('mvp.phase4.f1', 'Performance Tracking'), t('mvp.phase4.f2', 'Continuous Optimization'), t('mvp.phase4.f3', 'Ongoing Support')]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1 pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 md:mb-14 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">{t('mvp.title', 'Our 4-Phase Methodology')}</h1>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{t('mvp.subtitle', 'Systematic approach to cloud optimization')}</p>
          </div>

          <TracingBeam className="mb-12" phases={phases} />

          <SectionSeparator className="my-10 sm:my-12 md:my-14" />

          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">{t('mvp.flow.title', 'Our Process Flow')}</h2>
            <p className="mt-2 text-slate-600 max-w-3xl mx-auto text-center">{t('mvp.flow.subtitle', 'From assessment to ongoing optimization')}</p>
            <div className="mt-6">
              <FlowCarousel />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMethodology;


