import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, LinkedinIcon, MapPinIcon, ClockIcon, BriefcaseIcon } from '@hugeicons/core-free-icons';

type JobPosition = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

const JobOpenings: React.FC = () => {
  const { t } = useTranslation();

  const positions: JobPosition[] = [
    {
      id: 'cloud-engineering-devops',
      title: t('careers.positions.cloud_engineering.title', 'Cloud Engineering & DevOps'),
      department: t('careers.positions.cloud_engineering.department', 'Engineering'),
      location: t('careers.positions.cloud_engineering.location', 'Remote'),
      type: t('careers.positions.cloud_engineering.type', 'Full-time'),
      description: t('careers.positions.cloud_engineering.description', 'Join our engineering team to design, build, and optimize cloud infrastructure solutions. Work with cutting-edge technologies and help clients achieve their cloud transformation goals.'),
      requirements: [
        t('careers.positions.cloud_engineering.requirements.0', '3+ years experience with AWS, Azure, or GCP'),
        t('careers.positions.cloud_engineering.requirements.1', 'Strong knowledge of Kubernetes, Docker, and containerization'),
        t('careers.positions.cloud_engineering.requirements.2', 'Experience with Infrastructure as Code (Terraform, CloudFormation)'),
        t('careers.positions.cloud_engineering.requirements.3', 'CI/CD pipeline design and implementation'),
        t('careers.positions.cloud_engineering.requirements.4', 'Strong problem-solving and communication skills')
      ],
      benefits: [
        t('careers.positions.cloud_engineering.benefits.0', 'Competitive salary and equity'),
        t('careers.positions.cloud_engineering.benefits.1', 'Flexible remote work'),
        t('careers.positions.cloud_engineering.benefits.2', 'Professional development budget'),
        t('careers.positions.cloud_engineering.benefits.3', 'Latest tech equipment')
      ]
    },
    {
      id: 'marketing-sales',
      title: t('careers.positions.marketing_sales.title', 'Marketing & Sales'),
      department: t('careers.positions.marketing_sales.department', 'Marketing'),
      location: t('careers.positions.marketing_sales.location', 'Remote'),
      type: t('careers.positions.marketing_sales.type', 'Full-time'),
      description: t('careers.positions.marketing_sales.description', 'Drive growth and brand awareness for DevCloud Partners. Develop marketing strategies, manage campaigns, and build relationships with potential clients in the cloud technology space.'),
      requirements: [
        t('careers.positions.marketing_sales.requirements.0', '2+ years B2B marketing experience'),
        t('careers.positions.marketing_sales.requirements.1', 'Experience with digital marketing tools and platforms'),
        t('careers.positions.marketing_sales.requirements.2', 'Strong writing and communication skills'),
        t('careers.positions.marketing_sales.requirements.3', 'Understanding of cloud technology market'),
        t('careers.positions.marketing_sales.requirements.4', 'Analytical mindset and data-driven approach')
      ],
      benefits: [
        t('careers.positions.marketing_sales.benefits.0', 'Performance-based bonuses'),
        t('careers.positions.marketing_sales.benefits.1', 'Remote-first culture'),
        t('careers.positions.marketing_sales.benefits.2', 'Marketing tools and software access'),
        t('careers.positions.marketing_sales.benefits.3', 'Conference and event attendance')
      ]
    },
    {
      id: 'finops-cost-optimization',
      title: t('careers.positions.finops.title', 'FinOps & Cost Optimization'),
      department: t('careers.positions.finops.department', 'Operations'),
      location: t('careers.positions.finops.location', 'Remote'),
      type: t('careers.positions.finops.type', 'Full-time'),
      description: t('careers.positions.finops.description', 'Help clients optimize their cloud spending and implement FinOps best practices. Analyze cloud costs, identify savings opportunities, and develop cost management strategies.'),
      requirements: [
        t('careers.positions.finops.requirements.0', '2+ years experience in cloud cost management'),
        t('careers.positions.finops.requirements.1', 'Knowledge of AWS Cost Explorer, Azure Cost Management'),
        t('careers.positions.finops.requirements.2', 'Experience with cost allocation and tagging strategies'),
        t('careers.positions.finops.requirements.3', 'Strong analytical and Excel skills'),
        t('careers.positions.finops.requirements.4', 'Understanding of cloud pricing models')
      ],
      benefits: [
        t('careers.positions.finops.benefits.0', 'Success-based compensation'),
        t('careers.positions.finops.benefits.1', 'Work from anywhere'),
        t('careers.positions.finops.benefits.2', 'FinOps certification support'),
        t('careers.positions.finops.benefits.3', 'Direct impact on client savings')
      ]
    },
    {
      id: 'fullstack-developer',
      title: t('careers.positions.fullstack.title', 'Fullstack Developer'),
      department: t('careers.positions.fullstack.department', 'Engineering'),
      location: t('careers.positions.fullstack.location', 'Remote'),
      type: t('careers.positions.fullstack.type', 'Full-time'),
      description: t('careers.positions.fullstack.description', 'Build modern web applications and internal tools. Work with React, Node.js, and cloud services to create scalable solutions that support our clients and internal operations.'),
      requirements: [
        t('careers.positions.fullstack.requirements.0', '3+ years full-stack development experience'),
        t('careers.positions.fullstack.requirements.1', 'Proficiency in React, TypeScript, and Node.js'),
        t('careers.positions.fullstack.requirements.2', 'Experience with databases (PostgreSQL, MongoDB)'),
        t('careers.positions.fullstack.requirements.3', 'Knowledge of cloud services (AWS, Azure)'),
        t('careers.positions.fullstack.requirements.4', 'Strong problem-solving and collaboration skills')
      ],
      benefits: [
        t('careers.positions.fullstack.benefits.0', 'Competitive salary and benefits'),
        t('careers.positions.fullstack.benefits.1', 'Flexible work schedule'),
        t('careers.positions.fullstack.benefits.2', 'Learning and development opportunities'),
        t('careers.positions.fullstack.benefits.3', 'Modern tech stack and tools')
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t('careers.positions.title', 'Open Positions')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('careers.positions.subtitle', 'Join our growing team and help shape the future of cloud technology. We\'re looking for passionate individuals who share our commitment to excellence and innovation.')}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {positions.map((position) => (
            <div key={position.id} className="bg-white border-b border-slate-200 py-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {position.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {position.description}
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <HugeiconsIcon icon={MapPinIcon} size={14} />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <HugeiconsIcon icon={ClockIcon} size={14} />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <a
                    href={`mailto:hr@devcloudpartners.com?subject=Application for ${position.title}`}
                    className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-accent/80 transition-colors"
                  >
                    {t('careers.positions.apply', 'Apply')}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {t('careers.positions.cta.title', 'Don\'t See Your Perfect Role?')}
            </h3>
            <p className="text-slate-600 mb-6">
              {t('careers.positions.cta.description', 'We\'re always looking for talented individuals. Send us your resume and let us know how you\'d like to contribute to our mission.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hr@devcloudpartners.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} size={20} className="mr-2" />
                {t('careers.positions.cta.send_resume', 'Send Your Resume')}
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-accent text-brand-accent font-medium rounded-full hover:bg-brand-accent/5 transition-colors"
              >
                {t('careers.positions.cta.contact', 'Get in Touch')}
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-6">
            {t('careers.positions.social', 'Follow us for updates on new opportunities and company news.')}
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/devcloud-partner/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-100 hover:bg-brand-accent/10 rounded-full flex items-center justify-center transition-colors group"
            >
              <HugeiconsIcon icon={LinkedinIcon} size={20} className="text-slate-600 group-hover:text-brand-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
