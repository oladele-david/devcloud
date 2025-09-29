import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { link } from "fs";

const resources = {
  en: {
    common: {
      hero: {
        badge: "Born in the Canary Islands, Serving the World",
        title_line1: "The cloud should be a driver of",
        title_growth: "growth",
        title_line2: ", not a ",
        title_burden: "financial burden",
        subtitle: "We are your strategic partner in digital evolution. Fusing the precision of code with the scalability of the cloud to create innovative solutions that transform ideas into tangible projects.",
        cta_primary: "Start Your Cloud Journey",
        cta_secondary: "View Our Solutions"
      },
      partners: {
        title: "Trusted by Industry Leaders",
        subtitle: "We partner with the world's leading technology companies"
      },
      services: {
        eyebrow: "Our Services",
        heading: "Comprehensive Cloud Solutions",
        finops_title: "Cloud Cost Optimization",
        finops_sub: "FinOps Excellence",
        finops_desc: "Reduce and control cloud spending with our comprehensive FinOps service",
        devops_title: "DevOps & Infrastructure",
        devops_sub: "Automated Operations",
        devops_desc: "Manage your cloud infrastructure with reliable automation and CI/CD",
        arch_title: "Cloud Architecture",
        arch_sub: "Migration & Design",
        arch_desc: "Design and execute robust cloud architectures and seamless migrations",
        mng_title: "Managed Services",
        mng_sub: "24/7 Support",
        mng_desc: "Comprehensive operations and continuous support with agreed SLAs",
        eng_title: "Software Engineering",
        eng_sub: "Product Development",
        eng_desc: "Design, build, and scale reliable software products with modern engineering practices",
        training_title: "Training",
        training_sub: "Team Development",
        training_desc: "We upskill your teams in cloud, DevOps, and modern software development through hands-on programs tailored to your tech stack and business goals. Applied learning, measurable results.",
        sticky: {
          badge: "Our Services",
          title: "Cloud, DevOps, and FinOps that drive outcomes",
          subtitle: "From cost control to resilient infrastructure, explore how we partner to deliver results.",
          placeholder: "Image coming soon"
        },
        features: {
          title: "What you get",
          items: [
            { title: "Unified Cloud Strategy", desc: "A single plan connecting cost, reliability, and delivery across teams." },
            { title: "Secure by Design", desc: "Security baked into pipelines, infra, and operations from day one." },
            { title: "Observability", desc: "Metrics, logs, and traces that enable rapid diagnostics and tuning." },
            { title: "Automation Everywhere", desc: "IaC, CI/CD, policy-as-code, and self-service to move faster." }
          ]
        },
        benefits: {
          title: "Business outcomes",
          items: [
            { title: "Lower Spend", desc: "Typical 30–50% reduction via FinOps and right-sizing." },
            { title: "Faster Delivery", desc: "Release more often with safer deployments and automation." },
            { title: "Higher Uptime", desc: "Resilient architectures with SLAs that match your needs." },
            { title: "Team Focus", desc: "Your team ships product while we run the platform." }
          ]
        },
        technologies: {
          title: "Technologies & Tools"
        },
        portfolio: {
          hero: {
            title: "Our Portfolio",
            subtitle: "Explore our successful cloud transformations and innovative solutions.",
            description: "From cost optimization to scalable architectures, discover how we've helped businesses transform their cloud infrastructure and achieve measurable results."
          },
          finops: {
            title: "Cloud Cost Optimization",
            description: "Reduce cloud spending by 30-50% with our FinOps expertise"
          },
          devops: {
            title: "DevOps & Infrastructure", 
            description: "Automated CI/CD pipelines and infrastructure management"
          },
          architecture: {
            title: "Cloud Architecture",
            description: "Scalable, secure cloud architectures and migrations"
          },
          managed: {
            title: "Managed Services",
            description: "24/7 monitoring and support with guaranteed SLAs"
          },
          engineering: {
            title: "Software Engineering",
            description: "Modern applications built with cutting-edge technologies"
          },
          stats: {
            title: "Our Impact",
            subtitle: "Numbers that speak to our success and client satisfaction",
            costReduction: "30-50%",
            costReductionLabel: "Average Cost Reduction",
            projects: "50+",
            projectsLabel: "Projects Delivered",
            uptime: "99.9%",
            uptimeLabel: "SLA Uptime",
            clients: "25+",
            clientsLabel: "Happy Clients"
          },
          cta: {
            title: "Ready to Start Your Cloud Journey?",
            description: "Let's discuss how we can help transform your cloud infrastructure and deliver measurable results.",
            contact: "Get Started",
            services: "View Services"
          }
        },
        process: {
          title: "How we work",
          steps: [
            { title: "Assess", desc: "We start with a comprehensive assessment of your current cloud infrastructure, spending patterns, and business objectives. This includes technical audits, cost analysis, and stakeholder interviews." },
            { title: "Design", desc: "Based on our findings, we develop a customized strategy and detailed implementation plan. We set clear objectives, define success metrics, and establish timelines with your team." },
            { title: "Implement", desc: "We execute the plan in phases, implementing optimizations, automations, and improvements while maintaining full transparency and regular communication with your team." },
            { title: "Operate", desc: "Continuous monitoring and optimization ensure sustained results. We provide regular reports, proactive recommendations, and ongoing support to maximize your cloud investment." }
          ],
          stats: {
            a: "Average cost reduction",
            b: "Projects delivered",
            c: "SLA uptime",
            d: "Cloud providers"
          }
        },
        cta_section: {
          title: "Ready to accelerate your cloud outcomes?",
          desc: "Let’s align on goals and map a path that balances speed, reliability, and cost.",
          primary: "Talk to an expert",
          secondary: "See case studies"
        },
        detail: {
          finops: {
            features: [
              "Comprehensive consumption audits",
              "Automated waste detection",
              "Budgeting and reservations strategy",
              "Real-time cost monitoring",
              "Success-fee pricing model",
              "Transparent reporting"
            ],
            benefits: [
              "AWS",
              "Azure", 
              "GCP",
              "Terraform",
              "CloudFormation",
              "Cost Explorer",
              "CloudWatch",
              "Azure Cost Management"
            ],
            process: [
              "Assess cloud spend",
              "Identify opportunities",
              "Implement savings measures",
              "Monitor & iterate"
            ]
          },
          devops: {
            features: [
              "CI/CD pipelines",
              "Infrastructure as Code",
              "Policy-as-code & guardrails",
              "Platform engineering",
              "GitOps & automation",
              "Observability"
            ],
            benefits: [
              "Jenkins",
              "GitLab CI",
              "GitHub Actions",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "Prometheus",
              "Grafana"
            ],
            process: [
              "Assess delivery & ops",
              "Design pipelines & IaC",
              "Automate & enable",
              "Operate & optimize"
            ]
          },
          arch: {
            features: [
              "Well-Architected designs",
              "Scalability & resilience",
              "Security baselines",
              "Data & networking",
              "Disaster recovery",
              "Migration plans"
            ],
            benefits: [
              "AWS Well-Architected",
              "Azure Architecture Center",
              "Google Cloud Architecture",
              "Terraform",
              "CloudFormation",
              "ARM Templates",
              "Docker",
              "Kubernetes",
              "Istio"
            ],
            process: [
              "Assess current state",
              "Target architecture",
              "Migration execution",
              "Validation & hardening"
            ]
          },
          mng: {
            features: [
              "24/7 monitoring & on-call",
              "Incident response",
              "Runbooks & SRE",
              "Backups & patching",
              "Capacity planning",
              "Continuous improvement"
            ],
            benefits: [
              "PagerDuty",
              "Datadog",
              "New Relic",
              "Splunk",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "AWS CloudWatch",
              "Azure Monitor"
            ],
            process: [
              "Onboarding & SLAs",
              "Operational baselines",
              "Run & report",
              "Optimize proactively"
            ]
          },
          eng: {
            features: [
              "Product discovery",
              "Modern architectures",
              "Quality engineering",
              "Security & privacy",
              "Performance & scalability",
              "DevEx improvements"
            ],
            benefits: [
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
              "Kubernetes",
              "AWS Lambda",
              "Azure Functions"
            ],
            process: [
              "Discover & align",
              "Design & plan",
              "Build & test",
              "Launch & evolve"
            ]
          },
          training: {
            features: [
              "Hands-on workshops",
              "Custom curriculum design",
              "Real-world projects",
              "Certification preparation",
              "Team upskilling programs",
              "Ongoing mentorship"
            ],
            benefits: [
              "AWS",
              "Azure",
              "GCP",
              "Docker",
              "Kubernetes",
              "Terraform",
              "CI/CD",
              "DevOps",
              "FinOps",
              "Cloud Security"
            ],
            process: [
              "Assess team skills",
              "Design custom program",
              "Deliver training",
              "Measure & improve"
            ]
          }
        }
      },
      services_bottom: "We provide end-to-end cloud solutions that optimize costs, enhance performance, and ensure reliability. Our success-based model means you only pay for the value we deliver, with transparent reporting and measurable results across all our services.",
      about: {
        story: {
          philosophy: {
            heading: "Our Philosophy",
            subheading: "Technology as a tool for growth",
            human_title: "Human-Centered Approach",
            human_desc: "We work side by side with our clients, embedding ourselves in their teams, listening to their needs and designing tailor-made solutions.",
            transparent_title: "Transparent Partnership",
            transparent_desc: "No risks or hidden costs: only clear, measurable and shared results. Our commitment is twofold: to our clients and to our team.",
            innovation_title: "Innovation & Impact",
            innovation_desc: "In every project we aim for more than optimizing servers or invoices: we strive to build trust, drive innovation and create a lasting positive impact.",
            footer: "Our commitment is twofold: to our clients, helping them free up resources to innovate, and to our team, fostering local talent and building a technology hub from the Canary Islands to the world."
          },
          title: "Our Story",
          subtitle: "How DevCloud Partners came to be",
          sections: [
            {
              eyebrow: "Founded in 2025",
              title: "How DevCloud Partners came to be",
              description: "DevCloud Partners was born in 2025 with a simple but powerful conviction: the cloud should be a driver of growth, not a financial burden.",
              imageSrc: "/team/team1.jpg",
              reverse: false
            },
            {
              eyebrow: "Identifying the Problem",
              title: "Cloud investments without expected efficiency",
              description: "After years working in DevOps, FinOps and technology consulting, we saw firsthand how many companies invested heavily in the cloud without achieving the efficiency they expected. Rising bills, oversized infrastructures and a lack of transparency had become the norm.",
              imageSrc: "/team/team2.jpg",
              reverse: true
            },
            {
              eyebrow: "Building the Solution",
              title: "Transparent, results-driven, and human",
              description: "That's why we decided to build something different: a transparent, results-driven and deeply human service, born in the Canary Islands with a global vision. We want to show that from the islands we can deliver world-class cloud solutions, creating real value for businesses and opportunities for people.",
              imageSrc: "/team/team3.jpg",
              reverse: false
            }
          ]
        }
      },
      values: {
        heading: "Our Values",
        subheading: "The principles that guide everything we do",
        transparency: { title: "Radical Transparency", desc: "Clear processes, verifiable metrics, and open communication." },
        excellence: { title: "Technical Excellence", desc: "Best practices in Cloud, DevOps, and FinOps." },
        innovation: { title: "Continuous Innovation", desc: "Always seeking better performance, lower cost, and more value." },
        global: { title: "Local Impact, Global Reach", desc: "Investing in Canary Islands talent and exporting services worldwide." },
        collaboration: { title: "Genuine Collaboration", desc: "We integrate as partners, sharing both successes and risks." },
        sustainability: { title: "Sustainability & Efficiency", desc: "Optimize resources to reduce waste and impact." }
      },
      mv: {
        lead: {
          title: "How We Deliver",
          body: "Outcomes first: assess, design, implement, operate. We align on goals, build the right platform, and keep improving — balancing speed, reliability and cost.",
          cta: "See Our Methodology"
        },
        vision: {
          title: "Vision",
          body: "Lead in cloud efficiency by delivering innovative, sustainable and cost‑effective solutions that set a new standard for transparency and reliability."
        },
        mission: {
          title: "Mission",
          body: "Leverage our expertise, resources and technology to design, operate and optimize cloud platforms that exceed expectations on cost, performance and uptime — enabling customers to focus on innovation."
        }
      },
      team: {
        eyebrow: "Team",
        title: "Our team",
        description: "Meet the people driving our mission and values.",
        members: [
          { name: "David González", role: "CEO", image: "/team/David1.jpeg", linkedin: "https://www.linkedin.com/in/sond3r" },
          { name: "Juan García", role: "Advisor", image: "/team/Juan2.jpeg", linkedin: "https://www.linkedin.com/in/juangarciamorgado/" },
          { name: "Emmanuel Oluyemi", role: "CTO", image: "/team/Emmanuel3.jpeg", linkedin: "https://www.linkedin.com/in/emmanuel-oluyemi-43588a217/" },
        ],
        hiring: "Our team is growing! We're building a diverse group of cloud experts, DevOps engineers, and FinOps specialists who share our passion for transparency and technical excellence."
      },
      mvp: {
        title: "Our 4-Phase Methodology",
        subtitle: "Systematic approach to cloud optimization",
        phase1: {
          title: "Phase 1: Assessment & Discovery",
          duration: "1–2 weeks",
          summary: "We begin with a comprehensive evaluation of your current cloud infrastructure, spending patterns, and business objectives. This phase establishes the baseline and identifies optimization opportunities.",
          a1: "Infrastructure audit and documentation",
          a2: "Cost analysis and spending patterns review",
          a3: "Performance and security assessment",
          a4: "Stakeholder interviews and requirements gathering",
          a5: "Risk assessment and compliance review",
          a6: "Opportunity identification and prioritization",
          d1: "Current state assessment report",
          d2: "Cost breakdown and analysis",
          d3: "Optimization opportunities matrix",
          d4: "Risk assessment document",
          d5: "Recommendations summary",
          f1: "Security Review",
          f2: "Stakeholder Alignment",
          f3: "Cost Analysis"
        },
        phase2: {
          title: "Phase 2: Strategy & Planning",
          duration: "1–2 weeks",
          summary: "Based on our assessment findings, we develop a customized strategy and detailed implementation roadmap with clear objectives, success metrics, and a phased execution plan.",
          a1: "Strategic roadmap development",
          a2: "Implementation plan creation",
          a3: "Success metrics definition",
          a4: "Timeline and milestone planning",
          a5: "Resource allocation planning",
          a6: "Change management strategy",
          d1: "Strategic roadmap document",
          d2: "Detailed implementation plan",
          d3: "Success metrics framework",
          d4: "Project timeline and milestones",
          d5: "Resource requirements",
          f1: "Goal Setting",
          f2: "Timeline Planning",
          f3: "Team Alignment"
        },
        phase3: {
          title: "Phase 3: Implementation & Execution",
          duration: "4–12 weeks",
          summary: "We execute the plan in carefully planned phases, implementing changes while maintaining system stability and business continuity, with transparent communication throughout.",
          a1: "Phased implementation execution",
          a2: "Infrastructure optimization",
          a3: "Automation implementation",
          a4: "Monitoring and alerting setup",
          a5: "Testing and validation",
          a6: "Documentation and knowledge transfer",
          d1: "Optimized infrastructure",
          d2: "Automated processes and workflows",
          d3: "Monitoring and alerting systems",
          d4: "Implementation documentation",
          d5: "Knowledge transfer sessions",
          f1: "Automation",
          f2: "Risk Mitigation",
          f3: "Performance"
        },
        phase4: {
          title: "Phase 4: Monitoring & Optimization",
          duration: "Ongoing",
          summary: "Continuous monitoring and optimization ensure sustained results. We provide regular reporting, proactive recommendations, and support to maximize your cloud investment.",
          a1: "Continuous performance monitoring",
          a2: "Regular optimization reviews",
          a3: "Proactive issue identification",
          a4: "Performance reporting and analysis",
          a5: "Ongoing recommendations",
          a6: "Support and maintenance",
          d1: "Performance monitoring dashboards",
          d2: "Regular optimization reports",
          d3: "Proactive recommendations",
          d4: "Ongoing support and maintenance",
          d5: "Continuous improvement plans",
          f1: "Performance Tracking",
          f2: "Continuous Optimization",
          f3: "Ongoing Support"
        },
        flow: {
          title: "Our Process Flow",
          subtitle: "From assessment to ongoing optimization",
          step1: { t: "Initial Consultation", s: "Free assessment call" },
          step2: { t: "Detailed Assessment", s: "Comprehensive infrastructure review" },
          step3: { t: "Strategy Development", s: "Custom optimization plan" },
          step4: { t: "Implementation", s: "Phased execution with monitoring" },
          step5: { t: "Optimization", s: "Continuous improvement" }
        }
      },
      mvp_labels: {
        activities: "Key Activities",
        deliverables: "Deliverables",
        focus: "Key Focus Areas"
      },
      contact: {
        hero: {
          title: "Let's build something amazing together",
          subtitle: "Ready to transform your cloud infrastructure?",
          description: "Get in touch with our team of cloud experts and start your optimization journey today."
        },
        form: {
          title: "Get in Touch",
          subtitle: "Tell us about your project and we'll get back to you within 24 hours",
          firstName: "First Name",
          firstNamePlaceholder: "Enter your first name",
          lastName: "Last Name", 
          lastNamePlaceholder: "Enter your last name",
          email: "Email Address",
          emailPlaceholder: "your.email@company.com",
          company: "Company",
          companyPlaceholder: "Your company name",
          phone: "Phone Number",
          phonePlaceholder: "Enter your phone number",
          location: "Location",
          locationPlaceholder: "Enter your location",
          budget: "Budget",
          budgetPlaceholder: "Select your budget range",
          timeline: "Timeline",
          timelinePlaceholder: "Select your timeline",
          service: "Service Interest",
          servicePlaceholder: "Select a service",
          subject: "Subject",
          subjectPlaceholder: "What can we help you with?",
          message: "Message",
          messagePlaceholder: "Tell us about your project, goals, and any specific requirements...",
          submit: "Send Message"
        },
        info: {
          email: {
            title: "Email Us",
            value: "hola@devcloudpartners.com"
          },
          phone: {
            title: "Call Us", 
            value: "+34 123 456 789"
          },
          location: {
            title: "Visit Us",
            value: "Las Palmas, Canary Islands"
          }
        }
      },
      why: {
        heading: "The DevCloud Partners Difference",
        ready: "Ready to experience the difference? Let's discuss how we can help optimize your cloud infrastructure and transform your business with transparent, results-driven cloud solutions.",
        start: "Start Your Cloud Journey"
      },
      why_items: {
        success: { title: "Success-Based Model", desc: "You pay from the value we generate—no risks, no hidden costs." },
        tech: { title: "Technical Excellence", desc: "Cloud, DevOps, and FinOps done right with leading partners." },
        transparency: { title: "Radical Transparency", desc: "Clear processes, verifiable metrics, and open communication." },
        support: { title: "24/7 Support", desc: "Always-on operations and support with clear SLAs." },
        collaboration: { title: "Genuine Collaboration", desc: "We embed with your team—shared risks, shared success." },
        global: { title: "Local Impact, Global Reach", desc: "Canary Islands talent, global delivery—building a true tech hub." }
      },
      stats: {
        heading: "Proven Results",
        subtitle: "Clear outcomes from efficiency to reliability.",
        a: "Average cost reduction",
        b: "Uptime with SLA",
        c: "Successful migrations",
        d: "Expert support"
      },
      testimonials: {
        title: "What our clients say",
        desc: "Companies that trust DevCloud Partners to optimize their cloud infrastructure",
        items: [
          { text: "The cloud migration was flawless. Zero downtime and a team that truly understands business needs." },
          { text: "Their success-based model gives us complete confidence. We only pay when we see real value in our systems." },
          { text: "24/7 support and continuous optimization have transformed our operations. Highly recommended." },
          { text: "Their AWS and Azure expertise helped us design a robust, scalable architecture. Excellent collaboration." },
          { text: "From the Canary Islands to the world. A local team with global vision that truly delivers results." },
          { text: "DevCloud Partners reduced our infrastructure costs significantly with transparent FinOps practices." }
        ]
      },
      faq: {
        title: "FAQs",
        subtitle: "Your questions answered.",
        support: "customer support team",
        qas: [
          { q: "How long does a typical cloud migration take?", a: "Most migrations take 2-6 weeks depending on complexity. We provide detailed timelines during our initial assessment and keep you updated throughout the process." },
          { q: "What cloud providers do you work with?", a: "We're certified partners with AWS, Microsoft Azure, Google Cloud, and DigitalOcean. We choose the best platform for your needs." },
          { q: "How do you ensure zero downtime during migration?", a: "We use blue-green deployments, rolling updates, and comprehensive testing to ensure seamless transitions." },
          { q: "What is your success-based pricing model?", a: "We only charge a percentage of the cost savings we generate. If we don't save you money, you don't pay us." },
          { q: "Do you provide 24/7 support after migration?", a: "Yes, we offer 24/7 monitoring, incident response, and ongoing optimization." },
          { q: "Can you help with existing cloud cost optimization?", a: "We audit your current cloud spend, identify waste, and implement optimizations that typically reduce costs by 30-50%." }
        ]
      },
      cta_section: {
        title: "Ready to Transform Your Cloud Infrastructure?",
        desc: "Join the companies that trust DevCloud Partners for transparent, results-driven cloud solutions. Let's discuss how we can optimize your infrastructure and reduce costs.",
        primary: "Start Your Cloud Journey",
        secondary: "Schedule a Consultation"
      },
      nav: {
        services: "Services",
        about: "About Us",
        ourStory: "Our Story",
        methodology: "Methodology",
        portfolio: "Portfolio",
        resources: "Resources",
        blog: "Blog",
        careers: "Careers",
        contact: "Contact"
      },
      blog: {
        hero: {
          title: "Latest News",
          description: "Stay updated with the latest trends, tips, and insights in cloud optimization through our informative and inspiring blog articles."
        },
        search_placeholder: "Search articles...",
        categories: {
          all: "All",
          cloud_optimization: "Cloud Optimization",
          devops: "DevOps",
          security: "Security",
          finops: "FinOps",
          architecture: "Architecture"
        },
        load_more: "Load More Articles",
        newsletter: {
          title: "Stay Updated",
          description: "Subscribe to our newsletter and never miss the latest insights on cloud optimization, DevOps best practices, and FinOps strategies.",
          email_placeholder: "Enter your email",
          subscribe: "Subscribe",
          subscribing: "Subscribing...",
          success: "Subscribed!",
          error: "Invalid email"
        }
      },
      cta: {
        contact: "Contact"
      },
      careers: {
        culture: {
          heading: "Our Work Culture",
          subheading: "At DevCloud Partners, we believe that technology doesn't exist without the people who make it possible. Our work culture is the heartbeat of everything we do."
        },
        remote: {
          title: "Remote-First Environment",
          desc: "Work from anywhere with flexible schedules. True work-life balance without physical borders."
        },
        learning: {
          title: "Continuous Learning",
          desc: "Invest in training, certifications, and professional growth. Master the latest in Cloud, DevOps, and FinOps."
        },
        inclusive: {
          title: "Inclusive & Collaborative",
          desc: "Diverse ideas and experiences. Every voice matters in building solutions together."
        },
        local: {
          title: "Local Talent, Global Reach",
          desc: "Proud of our Canary Islands roots while connecting with international clients worldwide."
        },
        transparency: {
          title: "Transparency & Recognition",
          desc: "Open communication, honest feedback, and celebration of achievements. See the real impact of your work."
        },
        innovation: {
          title: "Innovation & Impact",
          desc: "Freedom to propose ideas, experiment, and leave your mark on transformative cloud solutions."
        },
        hero: {
          title: "Join Our Team",
          subtitle: "Build the future of cloud technology with us",
          description: "We're looking for passionate individuals who want to make a real impact in the cloud industry. Join a team that values innovation, transparency, and genuine collaboration."
        },
        positions: {
          title: "Open Positions",
          subtitle: "Join our growing team and help shape the future of cloud technology. We're looking for passionate individuals who share our commitment to excellence and innovation.",
          apply: "Apply Now",
          requirements: "Requirements",
          benefits: "What We Offer",
            cta: {
            title: "Don't See Your Perfect Role?",
            description: "We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.",
            send_resume: "Send Your Resume",
              contact: "Get in Touch"
            },
          social: "Follow us for updates on new opportunities and company news.",
          cloud_engineering: {
            title: "Cloud Engineering & DevOps",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Join our engineering team to design, build, and optimize cloud infrastructure solutions. Work with cutting-edge technologies and help clients achieve their cloud transformation goals.",
            requirements: [
              "3+ years experience with AWS, Azure, or GCP",
              "Strong knowledge of Kubernetes, Docker, and containerization",
              "Experience with Infrastructure as Code (Terraform, CloudFormation)",
              "CI/CD pipeline design and implementation",
              "Strong problem-solving and communication skills"
            ],
            benefits: [
              "Competitive salary and equity",
              "Flexible remote work",
              "Professional development budget",
              "Latest tech equipment"
            ]
          },
          marketing_sales: {
            title: "Marketing & Sales",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description: "Drive growth and brand awareness for DevCloud Partners. Develop marketing strategies, manage campaigns, and build relationships with potential clients in the cloud technology space.",
            requirements: [
              "2+ years B2B marketing experience",
              "Experience with digital marketing tools and platforms",
              "Strong writing and communication skills",
              "Understanding of cloud technology market",
              "Analytical mindset and data-driven approach"
            ],
            benefits: [
              "Performance-based bonuses",
              "Remote-first culture",
              "Marketing tools and software access",
              "Conference and event attendance"
            ]
          },
          finops: {
            title: "FinOps & Cost Optimization",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            description: "Help clients optimize their cloud spending and implement FinOps best practices. Analyze cloud costs, identify savings opportunities, and develop cost management strategies.",
            requirements: [
              "2+ years experience in cloud cost management",
              "Knowledge of AWS Cost Explorer, Azure Cost Management",
              "Experience with cost allocation and tagging strategies",
              "Strong analytical and Excel skills",
              "Understanding of cloud pricing models"
            ],
            benefits: [
              "Success-based compensation",
              "Work from anywhere",
              "FinOps certification support",
              "Direct impact on client savings"
            ]
          },
          fullstack: {
            title: "Fullstack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build modern web applications and internal tools. Work with React, Node.js, and cloud services to create scalable solutions that support our clients and internal operations.",
            requirements: [
              "3+ years full-stack development experience",
              "Proficiency in React, TypeScript, and Node.js",
              "Experience with databases (PostgreSQL, MongoDB)",
              "Knowledge of cloud services (AWS, Azure)",
              "Strong problem-solving and collaboration skills"
            ],
            benefits: [
              "Competitive salary and benefits",
              "Flexible work schedule",
              "Learning and development opportunities",
              "Modern tech stack and tools"
            ]
          }
        }
      },
      lang: {
        en: "EN",
        es: "ES"
      },
      footer: {
        tagline: "From the Canary Islands to the world",
        location: "Canary Islands, Spain",
        email: "hola@devcloudpartners.com",
        services: {
          title: "Services",
          optimization: "Cloud Cost Optimization",
          devops: "DevOps & Infrastructure",
          architecture: "Cloud Architecture",
          managed: "Managed Services",
          engineering: "Software Engineering",
          training: "Training"
        },
        company: {
          title: "Company",
          about: "About Us",
          methodology: "How We Work",
          portfolio: "Portfolio",
          careers: "Careers"
        },
        legal: {
          title: "Legal",
          privacy: "Privacy Policy",
          cookies: "Cookie Policy",
          legal_notice: "Legal Notice"
        },
        copyright: "© 2025 DevCloud Partners. All rights reserved.",
        poweredBy: "Powered By: QUEVEDO TECH GROUP S.L."
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Update: 1 October 2025",
        effectiveDate: "Effective Date: 1 October 2025",
        version: "Version 2.0",
        subtitle: "Your privacy and data protection are important to us. This policy explains how we collect, use, and protect your personal information.",
        
        // Section 1: Data Controller
        dataController: {
          title: "Data Controller",
          description: "In compliance with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), and Organic Law 3/2018 on the Protection of Personal Data and guarantee of digital rights (LOPDGDD), users are informed that the website https://devcloudpartners.com/ (hereinafter, the \"Website\") is owned by Quevedo Tech Group, S.L. (\"QTG\"), with the following identification details:",
          companyName: "Quevedo Tech Group, S.L.",
          taxId: "B-22969661",
          address: "Calle Guimar, 12 – 2nd Floor, 35110 Santa Lucía de Tirajana (Las Palmas), Spain",
          email: "rgpd@devcloudpartners.com",
          phone: "+34 603 479 347"
        },
        
        // Section 2: Scope
        scope: {
          title: "Scope of the Policy",
          text1: "This Privacy Policy governs the processing of personal data provided by users or that may be collected through the Website and the different channels associated with it, including contact forms, requests for information, newsletter subscriptions, content downloads, event participation, or any other interaction with QTG.",
          text2: "Access to and use of the Website implies knowledge and acceptance of this Policy, as well as of the provisions set out in the <a href='/legal-notice' class='text-brand-accent hover:underline'>Legal Notice</a> and the <a href='/cookie-policy' class='text-brand-accent hover:underline'>Cookie Policy</a>.",
          text3: "Any additional information beyond this website regarding the collection and processing of personal data is provided in each case clearly and accessibly, and is regulated in the relevant forms, contracts, data processing agreements, or specific terms that may apply."
        },
        
        // Section 3: Principles
        principles: {
          title: "Principles Applicable to Personal Data Processing",
          description: "QTG will process personal data in accordance with the principles set out in Article 5 GDPR and applicable national regulations:",
          lawfulness: "Each processing operation relies on a valid legal basis, and you are informed about its purposes, recipients, and rights before data collection.",
          purposeLimitation: "Data are collected for specified, explicit, and legitimate purposes and are not further processed in a manner incompatible with those purposes. If the purpose changes, data subjects will be informed and, where appropriate, new consent will be obtained.",
          dataMinimization: "Data processed will be adequate, relevant, and limited to what is strictly necessary for each purpose.",
          accuracy: "Reasonable measures will be taken to ensure data are accurate and up to date; mechanisms are provided for rectification or updating.",
          storageLimitation: "Data will be kept only for the strictly necessary periods and, once the purposes or legal obligations are fulfilled, will be blocked, anonymized, and/or deleted.",
          integrity: "QTG applies appropriate technical and organizational measures to ensure data security and prevent alteration, loss, or unauthorized processing or access.",
          processorNote: "These principles likewise govern relationships with data processors, who are subject to equivalent obligations through the relevant data processing agreement."
        },

        // Section 4: Purposes and Legal Bases
        purposes: {
          title: "Purposes of Processing and Legal Bases",
          description: "QTG processes personal data for the purposes indicated below, together with their legal bases (Article 6 GDPR). First, the data we may collect; then, what we use them for and the corresponding legal basis.",
          dataWeCollect: "Data we collect",
          dataItems: [
            "Identification and contact: name, email, telephone.",
            "Professional: company, position, area/sector (where applicable).",
            "Interactions and project data: location/country, available budget, project timeline, service of interest, message content, and communication preferences.",
            "Website use: cookies, IP address, and technical logs linked to the Website's operation. You can find more information in our Cookie Policy.",
            "Job applications (HR): CV, cover letter, and professional links."
          ],
          dataNote: "Personal data are provided directly by the data subject; technical data (IP and minimal logs) are generated by the server when using the website in accordance with our Cookie Policy.",
          noSpecialData: "QTG does not process special categories of data through the Website.",
          userGuarantee: "The user guarantees that the data provided are truthful, accurate, and up to date, and undertakes to communicate any modification.",
          thirdPartyData: "If the User provides personal data of third parties, they declare that they have authorization and undertake to inform those parties of this Privacy Policy before communicating their data to us.",
          
          processingPurposes: "Purposes of processing",
          purposesList: [
            {
              title: "Handling enquiries and requests",
              description: "We use identification, professional, and project data (incl. location, budget, timeline, and service of interest) to respond, assess your needs, and, where appropriate, coordinate a meeting or proposal. Legal basis: pre-contractual measures/contract (Art. 6.1(b) GDPR) and consent (Art. 6.1(a) GDPR) for contact. If a commercial relationship is established, the basis will be contract performance and legitimate interest."
            },
            {
              title: "Newsletters and commercial communications",
              description: "We use your contact details to send content and updates. Legal basis: consent (Art. 6.1(a) GDPR). If you are already a client, we may inform you about our own similar products or services under legitimate interest, with an opt-out in each message (Art. 6.1(f) GDPR and Art. 21.2 LSSI)."
            },
            {
              title: "Resource downloads",
              description: "We process your data to send the resource and conduct limited follow-up related to that download. Legal basis: consent (Art. 6.1(a))."
            },
            {
              title: "Recruitment processes",
              description: "We use your application data to assess your profile and contact you. Legal basis: pre-contractual measures (Art. 6.1(b)). To keep your CV for future openings, we will request consent (Art. 6.1(a))."
            },
            {
              title: "Basic segmentation in CRM",
              description: "We organize declared information (contact, company/position, service of interest, and signals derived from the relationship) to maintain up-to-date, non-intrusive communications. Legal basis: legitimate interest with the option to object at any time (Art. 6.1(f)). We do not use browsing data for segmentation unless there is cookie consent, in which case the Cookie Policy applies."
            },
            {
              title: "Website security and technical operation",
              description: "We process IP address and minimal logs to monitor availability, prevent abuse, and protect the platform. Legal basis: legitimate interest (Art. 6.1(f))."
            },
            {
              title: "Compliance with legal obligations and defense against claims",
              description: "We process what is necessary to comply with legal obligations (e.g., responding to judicial authorities) and defend our rights. Legal basis: legal obligation (Art. 6.1(c)) and legitimate interest (Art. 6.1(f))."
            }
          ],
          legitimateInterestNote: "Where the legal basis is legitimate interest, QTG has carried out the corresponding balancing test to ensure that the rights and freedoms of individuals do not prevail, and you may object at any time. QTG does not carry out automated decision-making or profiling."
        },

        // Section 5: Data Disclosure
        disclosure: {
          title: "Disclosure of Data to Third Parties",
          description: "QTG does not sell personal data. Data may be disclosed only where necessary to:",
          items: [
            "Service providers acting on behalf of QTG (as data processors): web hosting/CDN and site platform, maintenance and security, form management and corporate email, collaboration tools and file storage, and, where applicable, HR/screening services. QTG obtains standard contractual guarantees under the GDPR with all of them and requires appropriate security assurances.",
            "Public administrations and authorities where there is a legal obligation or where it is necessary to establish, exercise, or defend legal claims.",
            "Third parties providing cookies and similar technologies, only if the user accepts them, pursuant to the Cookie Policy (these third parties act as independent controllers for such processing)."
          ],
          additionalInfo: "Apart from the above, QTG will not disclose personal data to third parties. If to provide a specific service or activate a website feature such disclosure is necessary, users will be informed about the recipients and the purpose, requesting consent where appropriate or indicating that the disclosure is necessary for the execution of the service/feature requested."
        },

        // Section 6: International Transfers
        transfers: {
          title: "International Transfers",
          description: "As a general rule, QTG does not carry out international data transfers. However, if to provide certain services it is necessary to use tools whose infrastructure is located outside the European Economic Area (for example, email or cloud storage providers), QTG will adopt the safeguards required by the GDPR, such as entering into Standard Contractual Clauses or verifying adequacy decisions by the European Commission."
        },

        // Section 7: Data Retention
        retention: {
          title: "Data Retention",
          description: "We retain data only for the time necessary to fulfill the purpose for which they were collected. Once fulfilled, data are blocked and kept only to address legal responsibilities during the applicable limitation periods; afterwards, they are deleted or anonymized.",
          periodsTitle: "Indicative periods by purpose:",
          periods: [
            "Enquiries, support, and proposals (4.2-I): while the request is being processed and, at most, 12 months from the last interaction.",
            "Newsletters and commercial communications (4.2-II): as long as you remain subscribed or until you object. Records of consent/objection will be kept blocked for the time necessary to demonstrate compliance.",
            "Resource downloads (4.2-III): until delivery is completed and limited follow-up for up to 12 months, unless you object. If the user is transferred to the communications list, the periods in the previous point apply.",
            "Job applications – HR (4.2-IV): for the duration of the selection process; if not selected, 12 months from the close of the process or until consent is withdrawn.",
            "Basic segmentation in CRM (4.2-V): while there is an active relationship or demonstrated interest; in the absence of activity, up to 12 months from the last interaction, or earlier if you object.",
            "Security and technical operation (4.2-VI): IP address and minimal logs for up to 12 months. In case of security incidents, they will be kept blocked for the time necessary to investigate and comply with obligations.",
            "Legal compliance and defense (4.2-VII): for the applicable limitation periods. As a guideline: 4 years for tax obligations, 6 years for corporate documentation, up to 5 years for personal actions, and up to 10 years in cases under AML/CFT regulations; the longer applicable period will be used.",
            "Cookies and analytics: according to the duration indicated in the Cookie Policy; your preferences/consents are kept until you modify them and for the time necessary to evidence their management. In any case, we will keep Cookies for a period of 1 year from your last visit to the website. After that, QTG will request consent again."
          ]
        },

        // Section 8: User Rights
        userRights: {
          title: "User Rights",
          description: "As a data subject, you may exercise the following rights at any time:",
          rights: [
            "Right of access: to know which personal data are being processed and for what purpose.",
            "Right to rectification: to request the correction of inaccurate or incomplete data.",
            "Right to erasure: to request the deletion of your data when they are no longer necessary or when you withdraw consent.",
            "Right to object: to object to the processing of your data for reasons related to your particular situation.",
            "Right to restriction of processing: to request that processing be suspended in certain cases.",
            "Right to data portability: to receive your data in a structured format and transmit them to another controller, where applicable."
          ],
          exerciseRights: "You may exercise these rights by sending a written request, together with a copy of your ID document, to:",
          complaintInfo: "You may also file a complaint with the Spanish Data Protection Agency (www.aepd.es) if you believe your data protection rights have been infringed."
        },

        // Section 9: Security Measures
        security: {
          title: "Security Measures",
          description: "QTG has implemented appropriate technical and organizational measures to ensure a level of security appropriate to the risk, aimed at preserving the confidentiality, integrity, availability, and resilience of information and personal data, as well as preventing unauthorized access, loss, alteration, or destruction.",
          details: "By way of example and without limitation, QTG applies risk-appropriate technical and organizational controls in secure communications, identity and access management, information protection and encryption, continuity and backups, and activity logging and traceability.",
          review: "QTG periodically reviews and updates its policies and controls to keep them aligned with identified risks and technological and regulatory developments, and requires its providers to apply equivalent measures through the relevant data processing agreements."
        },

        // Section 10: Minors
        minors: {
          title: "Minors",
          description: "This website is not directed to minors. If QTG becomes aware that personal data have been collected from a minor without authorization, it will proceed to delete them immediately."
        },

        // Section 11: Policy Changes
        changes: {
          title: "Changes to This Privacy Policy",
          description: "QTG may amend this Privacy Policy to adapt it to legal requirements, changes in processing, service improvements, or internal criteria. When relevant changes occur, we will communicate them through the Website and, where appropriate, via direct channels, indicating the effective date.",
          effectiveDate: "The new version will apply from its publication. If the changes involve new purposes or legal bases requiring the User's consent, QTG will request it before applying such changes."
        },
        
        // Contact and Exercise Rights
        contactRights: {
          title: "Exercise Your Rights",
          description: "You may exercise your data protection rights by sending a written request, together with a copy of your ID document, to the following contact information:",
          emailContact: "Email Contact",
          postalAddress: "Postal Address",
          contactGDPR: "Contact GDPR Team",
          dataProtectionAgency: "Spanish Data Protection Agency",
          complaintInfo: "You may also file a complaint with the Spanish Data Protection Agency (www.aepd.es) if you believe your data protection rights have been infringed."
        },
        
        // Updates Section
        updates: {
          title: "Recent Updates",
          update1: "October 1, 2025 - Comprehensive privacy policy update with GDPR compliance",
          update2: "Added detailed data retention periods and legal bases",
          update3: "Updated contact information and data controller details"
        }
      },
      cookies: {
        banner: {
          title: "We use cookies",
          description: "This website uses first-party and third-party cookies to ensure it functions properly, analyze browsing activity, and—if you consent—personalize content and show advertising based on your browsing habits. You can learn more and access our ",
          link: "Cookie Policy",
          accept: "Accept All",
          reject: "Reject All",
          preferences: "Preferences"
        },
        preferences: {
          title: "Cookie Preferences",
          description: "We use cookies to enhance your experience. You can customize your preferences below.",
          necessary: {
            title: "Necessary Cookies",
            description: "Essential for the website to function properly. These cannot be disabled."
          },
          functional: {
            title: "Functional Cookies",
            description: "Enable enhanced functionality and personalization, such as remembering your preferences."
          },
          analytics: {
            title: "Analytics Cookies",
            description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously."
          },
          marketing: {
            title: "Marketing Cookies",
            description: "Used to track visitors across websites to display relevant and engaging advertisements."
          },
          required: "Required",
          info: {
            title: "Your Privacy Matters",
            description: "You can change your cookie preferences at any time by clicking the \"Preferences\" button in our cookie banner. Your choices will be saved and respected."
          },
          cancel: "Cancel",
          save: "Save Preferences"
        }
      }
      ,
      // Additional portfolio keys used by new components
      portfolio: {
        hero: {
          title: "Our Portfolio",
          subtitle: "Explore our successful cloud transformations and innovative solutions."
        },
        industries: {
          title: "Industries We Serve",
          subtitle: "We partner across sectors to deliver reliable platforms that balance speed, reliability, and cost.",
          items: {
            ecommerce: {
              title: "E-commerce & Retail",
              description: "High-conversion storefronts and scalable platforms, optimized for traffic peaks, secure payments, and fast global delivery."
            },
            saas: {
              title: "SaaS & Technology",
              description: "Modern CI/CD, multi-tenant architectures, and usage-based cost control so your teams ship faster with confidence."
            },
            financial: {
              title: "Financial Services",
              description: "Compliance-first cloud with robust security baselines, auditability, and resilient services for always-on operations."
            },
            media: {
              title: "Media & Entertainment",
              description: "Streaming-ready delivery, CDN optimization, and pipelines tuned for rich media at global scale."
            },
            manufacturing: {
              title: "Manufacturing",
              description: "Reliable platforms for supply chain visibility, analytics, and IoT workloads that scale with production needs."
            },
            healthcare: {
              title: "Healthcare & Life Sciences",
              description: "Privacy-by-design systems, secure data pipelines, and dependable uptime for patient-centric experiences."
            }
          }
        },
        selector: {
          options: [
            {
              title: "E-commerce Platform Optimization",
              description: "Reduced cloud costs by 45% while improving performance and scalability",
              category: "FinOps"
            },
            {
              title: "SaaS Startup Infrastructure Migration",
              description: "Seamless migration to AWS with zero downtime and improved reliability",
              category: "DevOps"
            },
            {
              title: "Financial Services Compliance & Security",
              description: "Built secure, compliant cloud architecture meeting regulatory requirements",
              category: "Architecture"
            }
          ]
        }
      }
      ,
      notfound: {
        title: "Route Not Found",
        lead: "Looks like this cloud drifted off our map. Let's navigate you back to safe skies.",
        cta_home: "Back to Home",
        cta_services: "Explore Services",
        hint: "Tip: Check the address or try our navigation links above."
      }
    }
  },
  es: {
    common: {
      about: {
        story: {
          philosophy: {
            heading: "Nuestra Filosofía",
            subheading: "La tecnología como herramienta de crecimiento",
            human_title: "Enfoque centrado en las personas",
            human_desc: "Trabajamos codo a codo con nuestros clientes, integrándonos en sus equipos, escuchando sus necesidades y diseñando soluciones a medida.",
            transparent_title: "Alianza transparente",
            transparent_desc: "Sin riesgos ni costes ocultos: solo resultados claros, medibles y compartidos. Nuestro compromiso es doble: con nuestros clientes y con nuestro equipo.",
            innovation_title: "Innovación e Impacto",
            innovation_desc: "En cada proyecto buscamos más que optimizar servidores o facturas: construimos confianza, impulsamos la innovación y creamos un impacto positivo duradero.",
            footer: "Nuestro compromiso es doble: con nuestros clientes, ayudándoles a liberar recursos para innovar, y con nuestro equipo, impulsando el talento local y construyendo un hub tecnológico desde Canarias para el mundo."
          },
          title: "Nuestra Historia",
          subtitle: "Cómo nació DevCloud Partners",
          sections: [
            {
              eyebrow: "Fundado en 2025",
              title: "Cómo nació DevCloud Partners",
              description: "DevCloud Partners nació en 2025 con una convicción simple pero poderosa: la nube debe impulsar el crecimiento, no ser una carga financiera.",
              imageSrc: "/team/team1.jpg",
              reverse: false
            },
            {
              eyebrow: "Identificando el Problema",
              title: "Inversiones en la nube sin la eficiencia esperada",
              description: "Tras años en DevOps, FinOps y consultoría tecnológica, vimos cómo muchas empresas invertían fuertemente en la nube sin lograr la eficiencia esperada. Facturas crecientes, infraestructuras sobredimensionadas y falta de transparencia eran la norma.",
              imageSrc: "/team/team2.jpg",
              reverse: true
            },
            {
              eyebrow: "Construyendo la Solución",
              title: "Transparente, orientado a resultados y humano",
              description: "Por eso decidimos construir algo diferente: un servicio transparente, orientado a resultados y profundamente humano, nacido en Canarias con visión global. Queremos demostrar que desde las islas podemos ofrecer soluciones cloud de clase mundial, creando valor real para las empresas y oportunidades para las personas.",
              imageSrc: "/team/team3.jpg",
              reverse: false
            }
          ]
        }
      },
      values: {
        heading: "Nuestros Valores",
        subheading: "Los principios que guían todo lo que hacemos",
        transparency: { title: "Transparencia Radical", desc: "Procesos claros, métricas verificables y comunicación abierta." },
        excellence: { title: "Excelencia Técnica", desc: "Buenas prácticas en Cloud, DevOps y FinOps." },
        innovation: { title: "Innovación Continua", desc: "Siempre buscando mejor rendimiento, menor coste y más valor." },
        global: { title: "Impacto Local, Alcance Global", desc: "Impulsamos talento canario y exportamos servicios al mundo." },
        collaboration: { title: "Colaboración Genuina", desc: "Nos integramos como socios, compartiendo éxitos y riesgos." },
        sustainability: { title: "Sostenibilidad y Eficiencia", desc: "Optimizar recursos para reducir desperdicio e impacto." }
      },
      mv: {
        lead: {
          title: "Cómo Entregamos",
          body: "Resultados primero: evaluar, diseñar, implementar y operar. Alineamos objetivos, construimos la plataforma adecuada y mejoramos continuamente — equilibrando velocidad, fiabilidad y coste.",
          cta: "Ver Nuestra Metodología"
        },
        vision: {
          title: "Visión",
          body: "Liderar en eficiencia cloud entregando soluciones innovadoras, sostenibles y rentables que establezcan un nuevo estándar de transparencia y fiabilidad."
        },
        mission: {
          title: "Misión",
          body: "Aprovechar nuestra experiencia, recursos y tecnología para diseñar, operar y optimizar plataformas cloud que superen expectativas en coste, rendimiento y disponibilidad — permitiendo a los clientes centrarse en la innovación."
        }
      },
      team: {
        eyebrow: "Equipo",
        title: "Nuestro equipo",
        description: "Conoce a las personas que impulsan nuestra misión y valores.",
        members: [
          { name: "David González", role: "CEO", image: "/team/David1.jpeg", linkedin: "https://www.linkedin.com/in/sond3r" },
          { name: "Juan García", role: "Advisor", image: "/team/Juan2.jpeg", linkedin: "https://www.linkedin.com/in/juangarciamorgado/" },
          { name: "Emmanuel Oluyemi", role: "CTO", image: "/team/Emmanuel3.jpeg", linkedin: "https://www.linkedin.com/in/emmanuel-oluyemi-43588a217/" },
        ],
        hiring: "¡Nuestro equipo está creciendo! Estamos formando un grupo diverso de expertos en la nube, ingenieros DevOps y especialistas en FinOps que comparten nuestra pasión por la transparencia y la excelencia técnica."
      },
      mvp: {
        title: "Nuestra Metodología en 4 Fases",
        subtitle: "Enfoque sistemático para la optimización cloud",
        phase1: {
          title: "Fase 1: Evaluación y Descubrimiento",
          duration: "1–2 semanas",
          summary: "Iniciamos con una evaluación integral de tu infraestructura cloud, patrones de gasto y objetivos de negocio. Esta fase establece la línea base e identifica oportunidades de optimización.",
          a1: "Auditoría e inventario de infraestructura",
          a2: "Análisis de costes y patrones de gasto",
          a3: "Evaluación de rendimiento y seguridad",
          a4: "Entrevistas y levantamiento de requisitos",
          a5: "Evaluación de riesgos y cumplimiento",
          a6: "Identificación y priorización de oportunidades",
          d1: "Informe de evaluación del estado actual",
          d2: "Desglose y análisis de costes",
          d3: "Matriz de oportunidades de optimización",
          d4: "Documento de evaluación de riesgos",
          d5: "Resumen de recomendaciones",
          f1: "Revisión de Seguridad",
          f2: "Alineación con Stakeholders",
          f3: "Análisis de Costes"
        },
        phase2: {
          title: "Fase 2: Estrategia y Planificación",
          duration: "1–2 semanas",
          summary: "A partir de los hallazgos, definimos una estrategia y hoja de ruta de implementación con objetivos claros, métricas de éxito y un plan por fases.",
          a1: "Desarrollo de la hoja de ruta",
          a2: "Creación del plan de implementación",
          a3: "Definición de métricas de éxito",
          a4: "Planificación de plazos y hitos",
          a5: "Planificación de recursos",
          a6: "Estrategia de gestión del cambio",
          d1: "Documento de hoja de ruta",
          d2: "Plan de implementación detallado",
          d3: "Marco de métricas de éxito",
          d4: "Cronograma y hitos del proyecto",
          d5: "Requerimientos de recursos",
          f1: "Definición de Objetivos",
          f2: "Planificación de Tiempos",
          f3: "Alineación del Equipo"
        },
        phase3: {
          title: "Fase 3: Implementación y Ejecución",
          duration: "4–12 semanas",
          summary: "Ejecutamos el plan por fases, manteniendo la estabilidad del sistema y la continuidad del negocio, con comunicación transparente en todo momento.",
          a1: "Ejecución por fases",
          a2: "Optimización de infraestructura",
          a3: "Implementación de automatización",
          a4: "Configuración de monitoreo y alertas",
          a5: "Pruebas y validación",
          a6: "Documentación y transferencia de conocimiento",
          d1: "Infraestructura optimizada",
          d2: "Procesos y flujos automatizados",
          d3: "Sistemas de monitoreo y alertas",
          d4: "Documentación de implementación",
          d5: "Sesiones de transferencia de conocimiento",
          f1: "Automatización",
          f2: "Mitigación de Riesgos",
          f3: "Rendimiento"
        },
        phase4: {
          title: "Fase 4: Monitoreo y Optimización",
          duration: "Continuo",
          summary: "El monitoreo y la optimización continua garantizan resultados sostenidos. Entregamos informes, recomendaciones proactivas y soporte para maximizar tu inversión en la nube.",
          a1: "Monitoreo continuo del rendimiento",
          a2: "Revisiones periódicas de optimización",
          a3: "Identificación proactiva de incidencias",
          a4: "Reportes y análisis de rendimiento",
          a5: "Recomendaciones continuas",
          a6: "Soporte y mantenimiento",
          d1: "Tableros de monitoreo",
          d2: "Reportes regulares de optimización",
          d3: "Recomendaciones proactivas",
          d4: "Soporte y mantenimiento continuo",
          d5: "Planes de mejora continua",
          f1: "Seguimiento de Rendimiento",
          f2: "Optimización Continua",
          f3: "Soporte Permanente"
        },
        flow: {
          title: "Nuestro Flujo de Proceso",
          subtitle: "De la evaluación a la optimización continua",
          step1: { t: "Consulta Inicial", s: "Llamada de evaluación gratuita" },
          step2: { t: "Evaluación Detallada", s: "Revisión integral de la infraestructura" },
          step3: { t: "Desarrollo de Estrategia", s: "Plan de optimización a medida" },
          step4: { t: "Implementación", s: "Ejecución por fases con monitoreo" },
          step5: { t: "Optimización", s: "Mejora continua" }
        }
      },
      mvp_labels: {
        activities: "Actividades Clave",
        deliverables: "Entregables",
        focus: "Áreas de Enfoque"
      },
      contact: {
        hero: {
          title: "Construyamos algo increíble juntos",
          subtitle: "¿Listo para transformar tu infraestructura cloud?",
          description: "Ponte en contacto con nuestro equipo de expertos en cloud y comienza tu viaje de optimización hoy."
        },
        form: {
          title: "Ponte en Contacto",
          subtitle: "Cuéntanos sobre tu proyecto y te responderemos en 24 horas",
          firstName: "Nombre",
          firstNamePlaceholder: "Ingresa tu nombre",
          lastName: "Apellido",
          lastNamePlaceholder: "Ingresa tu apellido", 
          email: "Correo Electrónico",
          emailPlaceholder: "tu.email@empresa.com",
          company: "Empresa",
          companyPlaceholder: "Nombre de tu empresa",
          phone: "Número de Teléfono",
          phonePlaceholder: "Ingresa tu número de teléfono",
          location: "Ubicación",
          locationPlaceholder: "Ingresa tu ubicación",
          budget: "Presupuesto",
          budgetPlaceholder: "Selecciona tu rango de presupuesto",
          timeline: "Cronograma",
          timelinePlaceholder: "Selecciona tu cronograma",
          service: "Interés en Servicio",
          servicePlaceholder: "Selecciona un servicio",
          subject: "Asunto",
          subjectPlaceholder: "¿En qué podemos ayudarte?",
          message: "Mensaje",
          messagePlaceholder: "Cuéntanos sobre tu proyecto, objetivos y cualquier requisito específico...",
          submit: "Enviar Mensaje"
        },
        info: {
          email: {
            title: "Escríbenos",
            value: "hola@devcloudpartners.com"
          },
          phone: {
            title: "Llama",
            value: "+34 123 456 789"
          },
          location: {
            title: "Visítanos",
            value: "Las Palmas, Islas Canarias"
          }
        }
      },
      hero: {
        badge: "Nacidos en Canarias, al servicio del mundo",
        title_line1: "La nube debe impulsar el",
        title_growth: "crecimiento",
        title_line2: ", no ser una ",
        title_burden: "carga financiera",
        subtitle: "Somos tu socio estratégico en evolución digital. Fusionamos la precisión del código con la escalabilidad de la nube para crear soluciones que transforman ideas en proyectos tangibles.",
        cta_primary: "Comienza tu viaje en la nube",
        cta_secondary: "Ver nuestras soluciones"
      },
      partners: {
        title: "Referentes nos confían",
        subtitle: "Colaboramos con los líderes tecnológicos del mundo"
      },
      services: {
        eyebrow: "Nuestros Servicios",
        heading: "Soluciones Cloud Integrales",
        finops_title: "Optimización de Costes Cloud",
        finops_sub: "Excelencia FinOps",
        finops_desc: "Reduce y controla el gasto en la nube con nuestro servicio FinOps",
        devops_title: "DevOps e Infraestructura",
        devops_sub: "Operaciones Automatizadas",
        devops_desc: "Gestionamos tu infraestructura cloud con automatización fiable y CI/CD",
        arch_title: "Arquitectura Cloud",
        arch_sub: "Migración y Diseño",
        arch_desc: "Diseñamos y ejecutamos arquitecturas robustas y migraciones sin fricción",
        mng_title: "Servicios Gestionados",
        mng_sub: "Soporte 24/7",
        mng_desc: "Operación continua y soporte con SLAs acordados",
        eng_title: "Ingeniería de Software",
        eng_sub: "Desarrollo de Producto",
        eng_desc: "Diseñamos y escalamos productos fiables con prácticas modernas",
        training_title: "Formación",
        training_sub: "Desarrollo de Equipos",
        training_desc: "Capacitamos a tus equipos en cloud, DevOps y desarrollo de software moderno con programas prácticos, adaptados a vuestro stack y objetivos de negocio. Aprendizaje aplicado, resultados medibles.",
        sticky: {
          badge: "Nuestros Servicios",
          title: "Cloud, DevOps y FinOps que impulsan resultados",
          subtitle: "De control de costes a infraestructura resiliente: así logramos resultados juntos.",
          placeholder: "Imagen disponible pronto"
        },
        features: {
          title: "Lo que obtienes",
          items: [
            { title: "Estrategia Cloud Unificada", desc: "Un plan que conecta coste, fiabilidad y entrega entre equipos." },
            { title: "Seguro por Diseño", desc: "Seguridad integrada en pipelines, infraestructura y operaciones." },
            { title: "Observabilidad", desc: "Métricas, logs y trazas para diagnosticar y optimizar rápido." },
            { title: "Automatización Total", desc: "IaC, CI/CD, políticas como código y autoservicio para ir más rápido." }
          ]
        },
        benefits: {
          title: "Resultados de negocio",
          items: [
            { title: "Menor Gasto", desc: "Reducción típica del 30–50% con FinOps y right-sizing." },
            { title: "Entrega Más Rápida", desc: "Lanza más a menudo con despliegues seguros y automatización." },
            { title: "Mayor Disponibilidad", desc: "Arquitecturas resilientes con SLAs a tu medida." },
            { title: "Enfoque del Equipo", desc: "Tu equipo crea producto mientras nosotros operamos la plataforma." }
          ]
        },
        technologies: {
          title: "Tecnologías y Herramientas"
        },
        portfolio: {
          hero: {
            title: "Nuestro Portafolio",
            subtitle: "Explora nuestras exitosas transformaciones cloud y soluciones innovadoras.",
            description: "Desde optimización de costes hasta arquitecturas escalables, descubre cómo hemos ayudado a las empresas a transformar su infraestructura cloud y lograr resultados medibles."
          },
          finops: {
            title: "Optimización de Costes Cloud",
            description: "Reduce el gasto en la nube entre 30-50% con nuestra experiencia FinOps"
          },
          devops: {
            title: "DevOps e Infraestructura",
            description: "Pipelines CI/CD automatizados y gestión de infraestructura"
          },
          architecture: {
            title: "Arquitectura Cloud",
            description: "Arquitecturas cloud escalables y seguras con migraciones"
          },
          managed: {
            title: "Servicios Gestionados",
            description: "Monitoreo 24/7 y soporte con SLAs garantizados"
          },
          engineering: {
            title: "Ingeniería de Software",
            description: "Aplicaciones modernas construidas con tecnologías de vanguardia"
          },
          stats: {
            title: "Nuestro Impacto",
            subtitle: "Números que hablan de nuestro éxito y satisfacción del cliente",
            costReduction: "30-50%",
            costReductionLabel: "Reducción Promedio de Costes",
            projects: "50+",
            projectsLabel: "Proyectos Entregados",
            uptime: "99.9%",
            uptimeLabel: "Tiempo de Actividad SLA",
            clients: "25+",
            clientsLabel: "Clientes Satisfechos"
          },
          cta: {
            title: "¿Listo para Comenzar tu Viaje Cloud?",
            description: "Hablemos sobre cómo podemos ayudar a transformar tu infraestructura cloud y entregar resultados medibles.",
            contact: "Comenzar",
            services: "Ver Servicios"
          }
        },
        process: {
          title: "Cómo trabajamos",
          steps: [
            { title: "Evaluar", desc: "Comenzamos con una evaluación integral de tu infraestructura cloud, patrones de gasto y objetivos de negocio. Incluye auditorías técnicas, análisis de costes y entrevistas con stakeholders." },
            { title: "Diseñar", desc: "Con base en los hallazgos, diseñamos una estrategia y plan de implementación a medida. Definimos objetivos claros, métricas de éxito y cronograma junto a tu equipo." },
            { title: "Implementar", desc: "Ejecutamos el plan por fases: optimizaciones, automatizaciones y mejoras, con transparencia total y comunicación regular con tu equipo." },
            { title: "Operar", desc: "Monitoreo y optimización continuos para resultados sostenidos. Entregamos informes, recomendaciones proactivas y soporte continuo para maximizar tu inversión en la nube." }
          ],
          stats: {
            a: "Reducción de costes promedio",
            b: "Proyectos entregados",
            c: "Disponibilidad con SLA",
            d: "Proveedores cloud"
          }
        },
        cta_section: {
          title: "¿Listo para acelerar tus resultados en la nube?",
          desc: "Alineemos objetivos y un plan que equilibre velocidad, fiabilidad y coste.",
          primary: "Habla con un experto",
          secondary: "Ver casos de éxito"
        },
        detail: {
          finops: {
            features: [
              "Auditorías de consumo",
              "Detección de desperdicio",
              "Estrategia de presupuestos y reservas",
              "Monitoreo de costes en tiempo real",
              "Modelo de precio por éxito",
              "Informes transparentes"
            ],
            benefits: [
              "AWS",
              "Azure", 
              "GCP",
              "Terraform",
              "CloudFormation",
              "Cost Explorer",
              "CloudWatch",
              "Azure Cost Management"
            ],
            process: [
              "Evaluar gasto cloud",
              "Identificar oportunidades",
              "Implementar ahorros",
              "Monitorear y mejorar"
            ]
          },
          devops: {
            features: [
              "Pipelines CI/CD",
              "Infraestructura como código",
              "Políticas como código",
              "Plataforma de desarrollo",
              "GitOps y automatización",
              "Observabilidad"
            ],
            benefits: [
              "Jenkins",
              "GitLab CI",
              "GitHub Actions",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "Prometheus",
              "Grafana"
            ],
            process: [
              "Evaluar delivery y ops",
              "Diseñar pipelines e IaC",
              "Automatizar y habilitar",
              "Operar y optimizar"
            ]
          },
          arch: {
            features: [
              "Diseños Well-Architected",
              "Escalabilidad y resiliencia",
              "Bases de seguridad",
              "Datos y redes",
              "Recuperación ante desastres",
              "Planes de migración"
            ],
            benefits: [
              "AWS Well-Architected",
              "Azure Architecture Center",
              "Google Cloud Architecture",
              "Terraform",
              "CloudFormation",
              "ARM Templates",
              "Docker",
              "Kubernetes",
              "Istio"
            ],
            process: [
              "Evaluar estado actual",
              "Arquitectura objetivo",
              "Ejecución de migración",
              "Validación y endurecimiento"
            ]
          },
          mng: {
            features: [
              "Monitoreo 24/7 y guardias",
              "Respuesta a incidentes",
              "Runbooks y SRE",
              "Backups y parches",
              "Planificación de capacidad",
              "Mejora continua"
            ],
            benefits: [
              "PagerDuty",
              "Datadog",
              "New Relic",
              "Splunk",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "AWS CloudWatch",
              "Azure Monitor"
            ],
            process: [
              "Onboarding y SLAs",
              "Bases operativas",
              "Operar y reportar",
              "Optimizar proactivamente"
            ]
          },
          eng: {
            features: [
              "Discovery de producto",
              "Arquitecturas modernas",
              "Calidad de software",
              "Seguridad y privacidad",
              "Rendimiento y escalado",
              "Mejoras de DevEx"
            ],
            benefits: [
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
              "Kubernetes",
              "AWS Lambda",
              "Azure Functions"
            ],
            process: [
              "Descubrir y alinear",
              "Diseñar y planificar",
              "Construir y probar",
              "Lanzar y evolucionar"
            ]
          },
          training: {
            features: [
              "Talleres prácticos",
              "Diseño de currículum personalizado",
              "Proyectos del mundo real",
              "Preparación para certificaciones",
              "Programas de mejora de equipos",
              "Mentoría continua"
            ],
            benefits: [
              "AWS",
              "Azure",
              "GCP",
              "Docker",
              "Kubernetes",
              "Terraform",
              "CI/CD",
              "DevOps",
              "FinOps",
              "Seguridad Cloud"
            ],
            process: [
              "Evaluar habilidades del equipo",
              "Diseñar programa personalizado",
              "Entregar formación",
              "Medir y mejorar"
            ]
          }
        }
      },
      services_bottom: "Ofrecemos soluciones cloud de extremo a extremo que optimizan costes, mejoran el rendimiento y garantizan la fiabilidad. Pagas solo por el valor que entregamos, con informes transparentes y resultados medibles en todos nuestros servicios.",
      why: {
        heading: "La Diferencia DevCloud Partners",
        ready: "¿Listo para notar la diferencia? Conversemos cómo optimizar tu infraestructura cloud con resultados transparentes.",
        start: "Comienza tu viaje en la nube"
      },
      why_items: {
        success: { title: "Modelo Basado en Éxito", desc: "Pagas del valor que generamos—sin riesgos ni costes ocultos." },
        tech: { title: "Excelencia Técnica", desc: "Cloud, DevOps y FinOps con socios líderes." },
        transparency: { title: "Transparencia Radical", desc: "Procesos claros, métricas verificables y comunicación abierta." },
        support: { title: "Soporte 24/7", desc: "Operación continua y soporte con SLAs claros." },
        collaboration: { title: "Colaboración Genuina", desc: "Nos integramos con tu equipo—riesgos y éxito compartidos." },
        global: { title: "Impacto Local, Alcance Global", desc: "Talento canario, entrega global—construyendo un verdadero hub tecnológico." }
      },
      stats: {
        heading: "Resultados Probados",
        subtitle: "Resultados claros: eficiencia y fiabilidad.",
        a: "Reducción media de costes",
        b: "Disponibilidad con SLA",
        c: "Migraciones exitosas",
        d: "Soporte experto"
      },
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        desc: "Empresas que confían en DevCloud Partners para optimizar su nube",
        items: [
          { text: "La migración fue impecable. Cero downtime y un equipo que entiende el negocio." },
          { text: "El modelo basado en éxito nos da total confianza. Solo pagamos cuando vemos valor real." },
          { text: "El soporte 24/7 y la optimización continua han transformado nuestras operaciones." },
          { text: "Su experiencia en AWS y Azure nos permitió diseñar una arquitectura robusta y escalable." },
          { text: "De Canarias al mundo. Un equipo local con visión global que entrega resultados." },
          { text: "DevCloud Partners redujo significativamente nuestros costes con prácticas FinOps transparentes." }
        ]
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Tus dudas, resueltas.",
        support: "equipo de soporte",
        qas: [
          { q: "¿Cuánto tarda una migración típica a la nube?", a: "La mayoría dura 2-6 semanas según la complejidad. Damos un plan detallado y te mantenemos informado." },
          { q: "¿Con qué proveedores cloud trabajan?", a: "Somos partners de AWS, Azure, Google Cloud y DigitalOcean. Elegimos la mejor plataforma para ti." },
          { q: "¿Cómo aseguran cero downtime durante la migración?", a: "Usamos despliegues blue-green, actualizaciones graduales y pruebas exhaustivas." },
          { q: "¿Cuál es su modelo de precios basado en éxito?", a: "Cobramos un porcentaje de los ahorros que generamos. Si no ahorramos, no pagas." },
          { q: "¿Proveen soporte 24/7 después de la migración?", a: "Sí, ofrecemos monitoreo 24/7, respuesta a incidentes y mejora continua." },
          { q: "¿Pueden optimizar mis costes cloud actuales?", a: "Auditamos tu gasto, detectamos desperdicios e implantamos optimizaciones (30-50% menos)." }
        ]
      },
      cta_section: {
        title: "¿Listo para transformar tu infraestructura cloud?",
        desc: "Únete a las empresas que confían en DevCloud Partners. Hablemos de cómo optimizar y reducir costes.",
        primary: "Comienza tu viaje en la nube",
        secondary: "Agenda una consulta"
      },
      nav: {
        services: "Servicios",
        about: "Nosotros",
        ourStory: "Nuestra Historia",
        methodology: "Metodología",
        portfolio: "Portafolio",
        resources: "Recursos",
        blog: "Blog",
        careers: "Carreras",
        contact: "Contacto"
      },
      blog: {
        hero: {
          title: "Últimas Noticias",
          description: "Mantente actualizado con las últimas tendencias, consejos e ideas sobre optimización cloud a través de nuestros artículos informativos e inspiradores."
        },
        search_placeholder: "Buscar artículos...",
        categories: {
          all: "Todos",
          cloud_optimization: "Optimización Cloud",
          devops: "DevOps",
          security: "Seguridad",
          finops: "FinOps",
          architecture: "Arquitectura"
        },
        load_more: "Cargar Más Artículos",
        newsletter: {
          title: "Mantente Actualizado",
          description: "Suscríbete a nuestro boletín y no te pierdas las últimas ideas sobre optimización cloud, mejores prácticas de DevOps y estrategias de FinOps.",
          email_placeholder: "Ingresa tu email",
          subscribe: "Suscribirse",
          subscribing: "Suscribiendo...",
          success: "¡Suscrito!",
          error: "Email inválido"
        }
      },
      cta: {
        contact: "Contacto"
      },
      careers: {
        culture: {
          heading: "Nuestra Cultura de Trabajo",
          subheading: "En DevCloud Partners, creemos que la tecnología no existe sin las personas que la hacen posible. Nuestra cultura de trabajo es el corazón de todo lo que hacemos."
        },
        remote: {
          title: "Entorno Remoto-First",
          desc: "Trabaja desde cualquier lugar con horarios flexibles. Verdadero equilibrio entre trabajo y vida personal sin fronteras físicas."
        },
        learning: {
          title: "Aprendizaje Continuo",
          desc: "Invierte en formación, certificaciones y crecimiento profesional. Domina lo último en Cloud, DevOps y FinOps."
        },
        inclusive: {
          title: "Inclusivo y Colaborativo",
          desc: "Ideas y experiencias diversas. Cada voz importa en la construcción de soluciones juntos."
        },
        local: {
          title: "Talento Local, Alcance Global",
          desc: "Orgullosos de nuestras raíces canarias mientras nos conectamos con clientes internacionales en todo el mundo."
        },
        transparency: {
          title: "Transparencia y Reconocimiento",
          desc: "Comunicación abierta, feedback honesto y celebración de logros. Ve el impacto real de tu trabajo."
        },
        innovation: {
          title: "Innovación e Impacto",
          desc: "Libertad para proponer ideas, experimentar y dejar tu huella en soluciones cloud transformadoras."
        },
        hero: {
          title: "Únete a Nuestro Equipo",
          subtitle: "Construye el futuro de la tecnología cloud con nosotros",
          description: "Buscamos personas apasionadas que quieran generar un impacto real en la industria cloud. Únete a un equipo que valora la innovación, la transparencia y la colaboración genuina."
        },
        positions: {
          title: "Posiciones Abiertas",
          subtitle: "Únete a nuestro equipo en crecimiento y ayuda a dar forma al futuro de la tecnología cloud. Buscamos personas apasionadas que compartan nuestro compromiso con la excelencia y la innovación.",
          apply: "Aplicar Ahora",
          requirements: "Requisitos",
          benefits: "Lo que Ofrecemos",
            cta: {
            title: "¿No Ves tu Rol Perfecto?",
            description: "Siempre estamos buscando personas talentosas. Envíanos tu currículum y dinos cómo te gustaría contribuir a nuestra misión.",
            send_resume: "Enviar Tu Currículum",
              contact: "Ponte en Contacto"
            },
          social: "Síguenos para actualizaciones sobre nuevas oportunidades y noticias de la empresa.",
          cloud_engineering: {
            title: "Ingeniería Cloud y DevOps",
            department: "Ingeniería",
            location: "Remoto",
            type: "Tiempo completo",
            description: "Únete a nuestro equipo de ingeniería para diseñar, construir y optimizar soluciones de infraestructura cloud. Trabaja con tecnologías de vanguardia y ayuda a los clientes a lograr sus objetivos de transformación cloud.",
            requirements: [
              "3+ años de experiencia con AWS, Azure o GCP",
              "Conocimiento sólido de Kubernetes, Docker y containerización",
              "Experiencia con Infraestructura como Código (Terraform, CloudFormation)",
              "Diseño e implementación de pipelines CI/CD",
              "Fuertes habilidades de resolución de problemas y comunicación"
            ],
            benefits: [
              "Salario competitivo y participación accionaria",
              "Trabajo remoto flexible",
              "Presupuesto para desarrollo profesional",
              "Equipamiento tecnológico de última generación"
            ]
          },
          marketing_sales: {
            title: "Marketing y Ventas",
            department: "Marketing",
            location: "Remoto",
            type: "Tiempo completo",
            description: "Impulsa el crecimiento y la conciencia de marca para DevCloud Partners. Desarrolla estrategias de marketing, gestiona campañas y construye relaciones con clientes potenciales en el espacio de tecnología cloud.",
            requirements: [
              "2+ años de experiencia en marketing B2B",
              "Experiencia con herramientas y plataformas de marketing digital",
              "Fuertes habilidades de escritura y comunicación",
              "Comprensión del mercado de tecnología cloud",
              "Mentalidad analítica y enfoque basado en datos"
            ],
            benefits: [
              "Bonos basados en rendimiento",
              "Cultura remota-first",
              "Acceso a herramientas y software de marketing",
              "Asistencia a conferencias y eventos"
            ]
          },
          finops: {
            title: "FinOps y Optimización de Costos",
            department: "Operaciones",
            location: "Remoto",
            type: "Tiempo completo",
            description: "Ayuda a los clientes a optimizar su gasto en la nube e implementar mejores prácticas de FinOps. Analiza costos cloud, identifica oportunidades de ahorro y desarrolla estrategias de gestión de costos.",
            requirements: [
              "2+ años de experiencia en gestión de costos cloud",
              "Conocimiento de AWS Cost Explorer, Azure Cost Management",
              "Experiencia con estrategias de asignación de costos y etiquetado",
              "Fuertes habilidades analíticas y de Excel",
              "Comprensión de modelos de precios cloud"
            ],
            benefits: [
              "Compensación basada en éxito",
              "Trabaja desde cualquier lugar",
              "Soporte para certificación FinOps",
              "Impacto directo en ahorros de clientes"
            ]
          },
          fullstack: {
            title: "Desarrollador Fullstack",
            department: "Ingeniería",
            location: "Remoto",
            type: "Tiempo completo",
            description: "Construye aplicaciones web modernas y herramientas internas. Trabaja con React, Node.js y servicios cloud para crear soluciones escalables que apoyen a nuestros clientes y operaciones internas.",
            requirements: [
              "3+ años de experiencia en desarrollo full-stack",
              "Competencia en React, TypeScript y Node.js",
              "Experiencia con bases de datos (PostgreSQL, MongoDB)",
              "Conocimiento de servicios cloud (AWS, Azure)",
              "Fuertes habilidades de resolución de problemas y colaboración"
            ],
            benefits: [
              "Salario competitivo y beneficios",
              "Horario de trabajo flexible",
              "Oportunidades de aprendizaje y desarrollo",
              "Stack tecnológico moderno y herramientas"
            ]
          }
        }
      },
      lang: {
        en: "EN",
        es: "ES"
      },
      footer: {
        tagline: "Desde las Islas Canarias al mundo",
        location: "Islas Canarias, España",
        email: "hola@devcloudpartners.com",
        services: {
          title: "Servicios",
          optimization: "Optimización de Costos en la Nube",
          devops: "DevOps e Infraestructura",
          architecture: "Arquitectura en la Nube",
          managed: "Servicios Gestionados",
          engineering: "Ingeniería de Software",
          training: "Formación"
        },
        company: {
          title: "Empresa",
          about: "Acerca de Nosotros",
          methodology: "Cómo Trabajamos",
          portfolio: "Portafolio",
          careers: "Carreras"
        },
        legal: {
          title: "Legal",
          privacy: "Política de Privacidad",
          cookies: "Política de Cookies",
          legal_notice: "Aviso Legal"
        },
        copyright: "© 2025 DevCloud Partners. Todos los derechos reservados.",
        poweredBy: "Desarrollado por: QUEVEDO TECH GROUP S.L."
      },
      privacy: {
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: 1 de octubre de 2025",
        effectiveDate: "Fecha efectiva: 1 de octubre de 2025",
        version: "Versión 2.0",
        subtitle: "Su privacidad y protección de datos son importantes para nosotros. Esta política explica cómo recopilamos, usamos y protegemos su información personal.",
        
        // Sección 1: Responsable del Tratamiento
        dataController: {
          title: "Responsable del Tratamiento",
          description: "En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de que el sitio web https://devcloudpartners.com/ (en adelante, el \"Sitio Web\") es titularidad de Quevedo Tech Group, S.L. (en adelante, \"QTG\"), con los siguientes datos de identificación:",
          companyName: "Quevedo Tech Group, S.L.",
          taxId: "B-22969661",
          address: "Calle Guimar, 12 – Piso 2, 35110 Santa Lucía de Tirajana (Las Palmas), España",
          email: "rgpd@devcloudpartners.com",
          phone: "+34 603 479 347"
        },
        
        // Sección 2: Alcance
        scope: {
          title: "Alcance de la Política",
          text1: "La presente Política de Privacidad regula el tratamiento de los datos personales que los usuarios faciliten o que puedan ser recabados a través del Sitio Web y de los distintos canales asociados al mismo, incluyendo formularios de contacto, solicitudes de información, suscripción a newsletters, descargas de contenidos, participación en eventos o cualquier otra interacción con QTG.",
          text2: "El acceso y utilización del Sitio Web implica el conocimiento y la aceptación de esta Política, así como de lo dispuesto en el <a href='/legal-notice' class='text-brand-accent hover:underline'>Aviso Legal</a> y en la <a href='/cookie-policy' class='text-brand-accent hover:underline'>Política de Cookies</a>.",
          text3: "Cualquier información adicional más allá del presente sitio web relativa a la recogida y tratamiento de datos personales se proporciona en cada caso de forma clara y accesible, y queda regulada en los correspondientes formularios, contratos, encargos o condiciones específicas que resulten de aplicación."
        },
        
        // Sección 3: Principios
        principles: {
          title: "Principios Aplicables al Tratamiento de Datos Personales",
          description: "QTG tratará los datos personales conforme a los principios recogidos en el art. 5 RGPD y normativa nacional aplicable:",
          lawfulness: "Cada tratamiento se ampara en una base jurídica válida y se le informa sobre sus finalidades, destinatarios y derechos antes de la recogida de datos.",
          purposeLimitation: "Los datos se recaban con fines determinados, explícitos y legítimos y no se tratan ulteriormente de modo incompatible con dichos fines. Si la finalidad varía, se informará al interesado y, cuando proceda, se recabará nuevo consentimiento.",
          dataMinimization: "Se tratarán datos adecuados, pertinentes y limitados a lo estrictamente necesario en relación con cada finalidad.",
          accuracy: "Se adoptarán medidas razonables para que los datos sean exactos y estén actualizados; se habilitan cauces para su rectificación o actualización.",
          storageLimitation: "Los datos se conservarán durante los plazos estrictamente necesarios y, cumplidas las finalidades o las obligaciones legales, se procederá a su bloqueo, anonimización y/o supresión.",
          integrity: "Desde QTG se aplican medidas técnicas y organizativas apropiadas para garantizar la seguridad de los datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
          processorNote: "Estos principios rigen igualmente la relación con los encargados del tratamiento, que quedan sujetos a obligaciones equivalentes mediante el correspondiente contrato de encargado del tratamiento."
        },

        // Sección 4: Finalidades y Bases de Legitimación
        purposes: {
          title: "Finalidades del Tratamiento y Bases de Legitimación",
          description: "QTG trata los datos personales para las finalidades indicadas a continuación, con su base jurídica (art. 6 RGPD). Abajo se facilita, primero, qué datos podemos recoger y, después, para qué los usamos y con qué base de legitimación conforme al RGPD.",
          dataWeCollect: "Datos que recogemos",
          dataItems: [
            "Identificación y contacto: nombre, email, teléfono.",
            "Profesionales: empresa, cargo, área/sector (cuando proceda).",
            "Interacciones y datos del proyecto: ubicación/país, presupuesto disponible, cronograma del proyecto, servicio de interés, contenido del mensaje y preferencias de comunicación.",
            "Uso de la web: Cookies, IP y logs técnicos vinculados al funcionamiento del Sitio Web. Puedes obtener más información a través de nuestra Política de Cookies.",
            "Candidaturas (RR. HH.): CV, carta de presentación y enlaces profesionales."
          ],
          dataNote: "Los datos personales se facilitan directamente por la persona interesada; los datos técnicos (IP y logs mínimos) los genera el servidor al usar la web de conformidad con lo dispuesto en nuestra Política de Cookies.",
          noSpecialData: "QTG no trata categorías especiales de datos a través del Sitio Web",
          userGuarantee: "El usuario garantiza que los datos aportados son veraces, exactos y están actualizados, y se compromete a comunicar cualquier modificación.",
          thirdPartyData: "Si el Usuario facilita datos personales de terceras personas, declara contar con su autorización y se comprometen a informarles de la presente Política de Privacidad antes de comunicarnos sus datos.",
          
          processingPurposes: "Finalidades del tratamiento",
          purposesList: [
            {
              title: "Atención de consultas y solicitudes",
              description: "Usamos datos identificativos, profesionales y de proyecto (incl. ubicación, presupuesto, cronograma y servicio de interés) para responder, valorar tu necesidad y, en su caso, coordinar una cita o propuesta. Base jurídica: medidas precontractuales/contrato (art. 6.1.b RGPD) y Consentimiento (art. 6.1.a RGPD) para el contacto. Si se estableciera una relación comercial, la base será la ejecución del contrato e interés legítimo."
            },
            {
              title: "Newsletters y comunicaciones comerciales",
              description: "Empleamos tus datos de contacto para enviarte contenidos y novedades. Base: consentimiento (art. 6.1.a RGPD). Si ya eres cliente, podemos informarte sobre productos o servicios propios similares en interés legítimo, con posibilidad de baja en cada envío (art. 6.1.f RGPD y art. 21.2 LSSI)."
            },
            {
              title: "Descarga de recursos",
              description: "Tratamos tus datos para enviarte el recurso y realizar un seguimiento acotado y relacionado con esa descarga. Base: consentimiento (art. 6.1.a)."
            },
            {
              title: "Procesos de selección",
              description: "Usamos los datos de tu candidatura para valorar tu perfil y contactarte. Base: medidas precontractuales (art. 6.1.b). Para conservar tu CV para futuras vacantes, solicitaremos consentimiento (art. 6.1.a)."
            },
            {
              title: "Segmentación básica en CRM",
              description: "Organizamos información declarada (contacto, empresa/cargo, servicio de interés y señales derivadas de la relación) para mantener comunicaciones actualizadas y no intrusivas. Base: interés legítimo con opción de oponerte en cualquier momento (art. 6.1.f). No usamos datos de navegación para segmentar salvo que exista consentimiento de cookies, en cuyo caso se rige por la Política de Cookies."
            },
            {
              title: "Seguridad y funcionamiento técnico del Sitio Web",
              description: "Tratamos IP y logs mínimos para monitorizar disponibilidad, prevenir abusos y proteger la plataforma. Base: interés legítimo (art. 6.1.f)."
            },
            {
              title: "Cumplimiento de obligaciones legales y defensa ante reclamaciones",
              description: "Tratamos lo necesario para cumplir obligaciones legales (p. ej., atender requerimientos de autoridades judiciales) y defender nuestros derechos. Base: obligación legal (art. 6.1.c) e interés legítimo (art. 6.1.f)."
            }
          ],
          legitimateInterestNote: "Cuando la base sea el interés legítimo, QTG ha realizado la ponderación correspondiente para asegurar que no prevalezcan los derechos y libertades de las personas, y puedes oponerte en cualquier momento. Desde QTG no se ejecutan decisiones automatizadas ni se realizan perfilados."
        },

        // Sección 5: Comunicación de Datos
        disclosure: {
          title: "Comunicación de Datos a Terceros",
          description: "QTG no vende datos personales. Los datos podrán comunicarse únicamente cuando sea necesario a:",
          items: [
            "Proveedores que prestan servicios en nombre de QTG (actuando como encargados del tratamiento): alojamiento web/CDN y plataforma del sitio, mantenimiento y seguridad, gestión de formularios y correo corporativo, herramientas de colaboración y almacenamiento de archivos y, en su caso, servicios de RR. HH./screening de candidaturas. Con todos ellos QTG obtiene las garantías contractuales estándar conforme al RGPD y exige garantías adecuadas de seguridad.",
            "Administraciones y autoridades cuando exista obligación legal o sea necesario para formular, ejercer o defender reclamaciones.",
            "Terceros de cookies y tecnologías similares, solo si el usuario las acepta, según la Política de Cookies (estos terceros actúan como responsables independientes de esos tratamientos)."
          ],
          additionalInfo: "Fuera de los supuestos anteriores, QTG no realizará ninguna comunicación de datos a terceros. En caso de que para prestar un servicio concreto o para activar alguna funcionalidad de la web resulte necesaria dicha comunicación, se informará al usuario sobre los destinatarios y la finalidad, solicitando su consentimiento cuando proceda o indicando que la comunicación es necesaria para la ejecución del servicio/funcionalidad que haya solicitado."
        },

        // Sección 6: Transferencias Internacionales
        transfers: {
          title: "Transferencias Internacionales",
          description: "Con carácter general, QTG no realiza transferencias internacionales de datos. No obstante, si para la prestación de ciertos servicios fuera necesario utilizar herramientas cuya infraestructura esté ubicada fuera del Espacio Económico Europeo (por ejemplo, proveedores de correo electrónico o almacenamiento en la nube), QTG adoptará las garantías exigidas por el RGPD, como la suscripción de cláusulas contractuales tipo o la verificación de decisiones de adecuación por parte de la Comisión Europea."
        },

        // Sección 7: Conservación de Datos
        retention: {
          title: "Conservación de los Datos",
          description: "Conservamos los datos solo el tiempo necesario para cumplir la finalidad para la que fueron recabados. Una vez cumplida, los datos quedan bloqueados y se conservan únicamente para atender responsabilidades legales durante los plazos de prescripción aplicables; después se suprimen o anonimizan.",
          periodsTitle: "Plazos orientativos por finalidad:",
          periods: [
            "Consultas, soporte y propuestas (4.2-I): mientras se gestiona la solicitud y, como máximo, 12 meses desde la última interacción.",
            "Newsletters y comunicaciones comerciales (4.2-II): mientras siga suscrito o hasta que se oponga el usuario. Los registros de consentimiento/oposición se conservarán bloqueados durante los plazos necesarios para acreditar el cumplimiento.",
            "Descarga de recursos (4.2-III): hasta completar el envío y un seguimiento relacionado por un máximo de 12 meses, salvo oposición. Si el usuario se transfiere a la lista de comunicaciones, rigen los plazos del punto anterior.",
            "Candidaturas – RR. HH. (4.2-IV): durante el proceso de selección; si no resultas seleccionado, 12 meses desde el cierre del proceso o hasta que se retire el consentimiento.",
            "Segmentación básica en CRM (4.2-V): mientras exista relación activa o interés demostrado; en ausencia de actividad, hasta 12 meses desde la última interacción, o antes si el usuario se opone.",
            "Seguridad y funcionamiento técnico (4.2-VI): IP y logs mínimos hasta 12 meses. En caso de incidentes de seguridad, se conservarán bloqueados el tiempo imprescindible para investigar y cumplir obligaciones.",
            "Cumplimiento legal y defensa (4.2-VII): durante los plazos de prescripción aplicables. Orientativamente: 4 años obligaciones fiscales (LGT), 6 años documentación mercantil (art. 30 C. de Comercio), hasta 5 años para acciones personales (art. 1964 CC) y hasta 10 años en los casos previstos por la normativa de PBCFT; se aplicará el plazo más largo que corresponda.",
            "Cookies y analítica: según la duración indicada en la Política de Cookies; tus preferencias/consentimientos se conservan mientras no los modifiques y el tiempo necesario para acreditar su gestión. En todo caso, conservaremos las Cookies por un plazo de 1 año desde la última entrada al sitio web. Transcurrido ese plazo, QTG recabará de nuevo el consentimiento del usuario."
          ]
        },

        // Sección 8: Derechos de Usuarios
        userRights: {
          title: "Derechos de los Usuarios",
          description: "Como interesado, usted puede ejercitar en cualquier momento los siguientes derechos:",
          rights: [
            "Derecho de acceso: conocer qué datos personales están siendo tratados y con qué finalidad.",
            "Derecho de rectificación: solicitar la corrección de datos inexactos o incompletos.",
            "Derecho de supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios o cuando retire su consentimiento.",
            "Derecho de oposición: oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.",
            "Derecho a la limitación del tratamiento: solicitar que se suspenda el tratamiento en determinados casos.",
            "Derecho a la portabilidad de los datos: recibir sus datos en un formato estructurado y transmitirlos a otro responsable, cuando sea aplicable."
          ],
          exerciseRights: "Puede ejercer estos derechos remitiendo una solicitud por escrito, junto con copia de su DNI o documento identificativo, a:",
          complaintInfo: "Asimismo, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que se han vulnerado sus derechos en materia de protección de datos."
        },

        // Sección 9: Medidas de Seguridad
        security: {
          title: "Medidas de Seguridad",
          description: "QTG ha implantado medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, orientadas a preservar la confidencialidad, integridad, disponibilidad y resiliencia de la información y datos personales, así como a prevenir accesos no autorizados, su pérdida, alteración o destrucción.",
          details: "A título enunciativo y sin carácter exhaustivo, QTG aplica controles técnicos y organizativos adecuados al riesgo en materia de comunicaciones seguras, gestión de identidades y accesos, protección y cifrado de la información, continuidad y copias de seguridad y registro y trazabilidad de actividades.",
          review: "QTG revisa y actualiza periódicamente sus políticas y controles para mantenerlos alineados con los riesgos identificados y con la evolución tecnológica y normativa, y exige a sus proveedores que apliquen medidas equivalentes mediante los correspondientes contratos de encargo del tratamiento."
        },

        // Sección 10: Menores
        minors: {
          title: "Menores de Edad",
          description: "Este sitio web no está dirigido a menores de edad. En caso de que QTG tenga conocimiento de que se han recopilado datos personales de un menor sin autorización, procederá a su eliminación inmediata."
        },

        // Sección 11: Cambios en la Política
        changes: {
          title: "Cambios en la Política de Privacidad",
          description: "QTG podrá modificar la presente Política de Privacidad para adaptarla a exigencias legales, cambios en los tratamientos, mejoras del servicio o criterios internos. Cuando haya cambios relevantes, lo comunicaremos a través del Sitio Web y, cuando proceda, por canales directos, indicando la fecha de entrada en vigor.",
          effectiveDate: "La nueva versión será aplicable desde su publicación. Si los cambios implican nuevas finalidades o bases jurídicas que requieran el consentimiento del Usuario, QTG lo solicitará antes de aplicar dichos cambios"
        },
        
        // Contacto y Ejercicio de Derechos
        contactRights: {
          title: "Ejercer sus Derechos",
          description: "Puede ejercitar sus derechos de protección de datos remitiendo una solicitud por escrito, junto con copia de su DNI o documento identificativo, a la siguiente información de contacto:",
          emailContact: "Contacto por Email",
          postalAddress: "Dirección Postal",
          contactGDPR: "Contactar Equipo RGPD",
          dataProtectionAgency: "Agencia Española de Protección de Datos",
          complaintInfo: "También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que se han vulnerado sus derechos en materia de protección de datos."
        },
        
        // Sección de Actualizaciones
        updates: {
          title: "Actualizaciones Recientes",
          update1: "1 de octubre de 2025 - Actualización integral de la política de privacidad con cumplimiento RGPD",
          update2: "Añadidos períodos de retención de datos y bases legales detallados",
          update3: "Actualizada información de contacto y detalles del responsable de datos"
        }
      },
      cookies: {
        banner: {
          title: "Usamos cookies",
          description: "Este sitio web utiliza cookies propias y de terceros para garantizar su funcionamiento, analizar la navegación y, si lo autorizas, personalizar contenidos y mostrar publicidad según tus hábitos de navegación. Puedes obtener más información y acceder a nuestra ",
          link: "Política de Cookies",
          accept: "Aceptar todo",
          reject: "Rechazar todo",
          preferences: "Preferencias"
        },
        preferences: {
          title: "Preferencias de cookies",
          description: "Utilizamos cookies para mejorar su experiencia. Puede personalizar sus preferencias a continuación.",
          necessary: {
            title: "Cookies necesarias",
            description: "Esenciales para que el sitio web funcione correctamente. No se pueden deshabilitar."
          },
          functional: {
            title: "Cookies funcionales",
            description: "Permiten funcionalidad mejorada y personalización, como recordar sus preferencias."
          },
          analytics: {
            title: "Cookies de análisis",
            description: "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de forma anónima."
          },
          marketing: {
            title: "Cookies de marketing",
            description: "Se utilizan para rastrear visitantes en sitios web para mostrar anuncios relevantes y atractivos."
          },
          required: "Requerido",
          info: {
            title: "Su privacidad importa",
            description: "Puede cambiar sus preferencias de cookies en cualquier momento haciendo clic en el botón \"Preferencias\" en nuestro banner de cookies. Sus elecciones se guardarán y respetarán."
          },
          cancel: "Cancelar",
          save: "Guardar preferencias"
        }
      }
      ,
      // Claves adicionales de portafolio usadas por los nuevos componentes
      portfolio: {
        hero: {
          title: "Nuestro Portafolio",
          subtitle: "Explora nuestras exitosas transformaciones cloud y soluciones innovadoras."
        },
        industries: {
          title: "Industrias que Atendemos",
          subtitle: "Colaboramos en múltiples sectores para entregar plataformas confiables que equilibran velocidad, fiabilidad y coste.",
          items: {
            ecommerce: {
              title: "E-commerce y Retail",
              description: "Tiendas de alta conversión y plataformas escalables, optimizadas para picos de tráfico, pagos seguros y entrega global rápida."
            },
            saas: {
              title: "SaaS y Tecnología",
              description: "CI/CD moderno, arquitecturas multi‑tenant y control de costes por uso para que tus equipos entreguen más rápido con confianza."
            },
            financial: {
              title: "Servicios Financieros",
              description: "Cloud con cumplimiento y seguridad robusta, auditabilidad y servicios resilientes para operaciones siempre disponibles."
            },
            media: {
              title: "Medios y Entretenimiento",
              description: "Entrega lista para streaming, optimización de CDN y pipelines ajustados para contenido rico a escala global."
            },
            manufacturing: {
              title: "Manufactura",
              description: "Plataformas fiables para visibilidad de la cadena de suministro, analítica e IoT que escalan con la producción."
            },
            healthcare: {
              title: "Salud y Ciencias de la Vida",
              description: "Sistemas con privacidad por diseño, tuberías de datos seguras y disponibilidad confiable para experiencias centradas en el paciente."
            }
          }
        },
        selector: {
          options: [
            {
              title: "Optimización de Plataforma de E‑commerce",
              description: "Reducción del 45% en costes cloud mejorando rendimiento y escalabilidad",
              category: "FinOps"
            },
            {
              title: "Migración de Infraestructura para Startup SaaS",
              description: "Migración a AWS sin downtime y con mayor fiabilidad",
              category: "DevOps"
            },
            {
              title: "Cumplimiento y Seguridad en Servicios Financieros",
              description: "Arquitectura cloud segura y conforme a normativas",
              category: "Arquitectura"
            }
          ]
        }
      }
      ,
      notfound: {
        title: "Ruta no encontrada",
        lead: "Parece que esta nube se desvió de nuestro mapa. Volvamos a cielos seguros.",
        cta_home: "Volver al inicio",
        cta_services: "Explorar servicios",
        hint: "Consejo: Revisa la dirección o usa los enlaces de navegación."
      }
    }
  }
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      caches: ["localStorage"],
    },
  });

export default i18n;


