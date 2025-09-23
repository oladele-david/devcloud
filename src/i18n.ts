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
      footer: {
        services: "Services",
        company: "Company",
        legal: "Legal",
        from: "From the Canary Islands to the world"
      },
      nav: {
        services: "Services",
        about: "About Us",
        ourStory: "Our Story",
        methodology: "Methodology",
        portfolio: "Portfolio",
        resources: "Resources",
        blog: "Blog",
        careers: "Careers"
      },
      cta: {
        contact: "Contact"
      },
      lang: {
        en: "EN",
        es: "ES"
      }
    }
  },
  es: {
    common: {
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
      footer: {
        services: "Servicios",
        company: "Compañía",
        legal: "Legal",
        from: "De Canarias al mundo"
      },
      nav: {
        services: "Servicios",
        about: "Nosotros",
        ourStory: "Nuestra Historia",
        methodology: "Metodología",
        portfolio: "Portafolio",
        resources: "Recursos",
        blog: "Blog",
        careers: "Carreras"
      },
      cta: {
        contact: "Contacto"
      },
      lang: {
        en: "EN",
        es: "ES"
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


