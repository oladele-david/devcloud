import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
              "Average 30–50% cost reduction",
              "No upfront investment",
              "Improved visibility & control",
              "Optimized resource allocation"
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
              "Faster, safer releases",
              "Reduced toil",
              "Improved reliability",
              "Developer productivity"
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
              "Right-sized architecture",
              "Improved performance",
              "Security by default",
              "Faster migrations"
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
              "Higher uptime",
              "Predictable operations",
              "Reduced incident impact",
              "Clear SLAs"
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
              "Faster time-to-market",
              "Higher quality",
              "Lower maintenance cost",
              "Scalable foundations"
            ],
            process: [
              "Discover & align",
              "Design & plan",
              "Build & test",
              "Launch & evolve"
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
          { name: "David González", role: "CEO", image: "/team/David1.png", linkedin: "https://www.linkedin.com/" },
          { name: "Juan García", role: "Advisor", image: "/team/Juan2.png", linkedin: "https://www.linkedin.com/" },
          { name: "Emmanuel Oluyemi", role: "DevOps Engineer", image: "/team/Emmanuel3.png", linkedin: "https://www.linkedin.com/" },
          { name: "Joel Villar", role: "Cloud & DevOps Architect", image: "/team/Joel4.png", linkedin: "https://www.linkedin.com/" },
          { name: "Sebastián Cabrera", role: "Head Marketing & Sales", image: "/team/Sebastian5.png", linkedin: "https://www.linkedin.com/" },
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
          subject: "Subject",
          subjectPlaceholder: "What can we help you with?",
          message: "Message",
          messagePlaceholder: "Tell us about your project, goals, and any specific requirements...",
          submit: "Send Message"
        },
        info: {
          email: {
            title: "Email Us",
            value: "holla@devcloudpartners.com"
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
        contact: "Contact",
        resources: "Resources",
        blog: "Blog",
        careers: "Careers"
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
          empty: {
            title: "No Open Positions Right Now",
            description: "We're not actively hiring at the moment, but we're always interested in connecting with talented individuals who share our passion for cloud technology and innovation.",
            cta: {
              title: "Stay Connected",
              description: "Send us your resume and let us know what role you're interested in. We'll keep your information on file and reach out when we have matching opportunities.",
              email: "Send Your Resume",
              contact: "Get in Touch"
            },
            footer: "Follow us on social media to stay updated on new opportunities and company news."
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
        email: "holla@devcloudpartners.com",
        services: {
          title: "Services",
          optimization: "Cloud Cost Optimization",
          devops: "DevOps & Infrastructure",
          architecture: "Cloud Architecture",
          managed: "Managed Services"
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
          terms: "Terms of Service"
        },
        copyright: "© 2025 DevCloud Partners. All rights reserved.",
        poweredBy: "Powered By: QUEVEDO TECH GROUP S.L."
      },
      cookies: {
        banner: {
          title: "We use cookies",
          description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
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
          { name: "David González", role: "Director Ejecutivo", image: "/team/David1.png", linkedin: "https://www.linkedin.com/" },
          { name: "Juan García", role: "Asesor", image: "/team/Juan2.png", linkedin: "https://www.linkedin.com/" },
          { name: "Emmanuel Oluyemi", role: "Ingeniero DevOps", image: "/team/Emmanuel3.png", linkedin: "https://www.linkedin.com/" },
          { name: "Joel Villar", role: "Arquitecto Cloud & DevOps", image: "/team/Joel4.png", linkedin: "https://www.linkedin.com/" },
          { name: "Sebastián Cabrera", role: "Jefe de Marketing y Ventas", image: "/team/Sebastian5.png", linkedin: "https://www.linkedin.com/" },
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
          subject: "Asunto",
          subjectPlaceholder: "¿En qué podemos ayudarte?",
          message: "Mensaje",
          messagePlaceholder: "Cuéntanos sobre tu proyecto, objetivos y cualquier requisito específico...",
          submit: "Enviar Mensaje"
        },
        info: {
          email: {
            title: "Escríbenos",
            value: "holla@devcloudpartners.com"
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
              "Reducción del 30–50%",
              "Sin inversión inicial",
              "Mayor visibilidad y control",
              "Asignación óptima de recursos"
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
              "Lanzamientos más rápidos",
              "Menos trabajo repetitivo",
              "Más fiabilidad",
              "Productividad de desarrollo"
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
              "Arquitectura dimensionada",
              "Mejor rendimiento",
              "Seguridad por defecto",
              "Migraciones más rápidas"
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
              "Mayor disponibilidad",
              "Operación predecible",
              "Menor impacto de incidentes",
              "SLAs claros"
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
              "Tiempo al mercado menor",
              "Mayor calidad",
              "Menor coste de mantenimiento",
              "Bases escalables"
            ],
            process: [
              "Descubrir y alinear",
              "Diseñar y planificar",
              "Construir y probar",
              "Lanzar y evolucionar"
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
        contact: "Contacto",
        resources: "Recursos",
        blog: "Blog",
        careers: "Carreras"
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
          empty: {
            title: "No Hay Posiciones Abiertas en Este Momento",
            description: "No estamos contratando activamente en este momento, pero siempre estamos interesados en conectar con personas talentosas que compartan nuestra pasión por la tecnología cloud y la innovación.",
            cta: {
              title: "Mantente Conectado",
              description: "Envíanos tu currículum y dinos qué rol te interesa. Mantendremos tu información en archivo y te contactaremos cuando tengamos oportunidades que coincidan.",
              email: "Enviar Tu Currículum",
              contact: "Ponte en Contacto"
            },
            footer: "Síguenos en redes sociales para mantenerte actualizado sobre nuevas oportunidades y noticias de la empresa."
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
        email: "holla@devcloudpartners.com",
        services: {
          title: "Servicios",
          optimization: "Optimización de Costos en la Nube",
          devops: "DevOps e Infraestructura",
          architecture: "Arquitectura en la Nube",
          managed: "Servicios Gestionados"
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
          terms: "Términos de Servicio"
        },
        copyright: "© 2025 DevCloud Partners. Todos los derechos reservados.",
        poweredBy: "Desarrollado por: QUEVEDO TECH GROUP S.L."
      },
      cookies: {
        banner: {
          title: "Usamos cookies",
          description: "Utilizamos cookies para mejorar su experiencia de navegación, servir contenido personalizado y analizar nuestro tráfico. Al hacer clic en \"Aceptar todo\", usted consiente nuestro uso de cookies.",
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


