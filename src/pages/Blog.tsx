import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { SectionSeparator } from '@/components/methodology/SectionSeparator';

export default function Blog() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    { key: 'all', label: t('blog.categories.all') },
    { key: 'cloud_optimization', label: t('blog.categories.cloud_optimization') },
    { key: 'devops', label: t('blog.categories.devops') },
    { key: 'security', label: t('blog.categories.security') },
    { key: 'finops', label: t('blog.categories.finops') },
    { key: 'architecture', label: t('blog.categories.architecture') }
  ];
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } else {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  useEffect(() => {
    if (containerRef.current && heroRef.current) {
      const tl = gsap.timeline();
      tl.from(heroRef.current, { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" })
        .from(containerRef.current.children, { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Mastering Cloud Cost Optimization: A Comprehensive Guide",
      description: "Learn the ins and outs of cloud cost optimization for maximum efficiency and savings.",
      image: "/blog/cloud-optimization.jpg",
      category: "Update",
      date: "January 15, 2025",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Art of DevOps: Best Practices and Implementation",
      description: "Discover the power of DevOps methodologies in modern cloud infrastructure management.",
      image: "/blog/devops-practices.jpg",
      category: "Update",
      date: "January 12, 2025",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Optimizing AWS Infrastructure for Lightning-Fast Performance",
      description: "Unlock the secrets to optimize your AWS infrastructure for exceptional speed and reliability.",
      image: "/blog/aws-optimization.jpg",
      category: "Update",
      date: "January 10, 2025",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "The Role of FinOps in Modern Cloud Strategy",
      description: "Explore how FinOps influences cost management and financial accountability in cloud operations.",
      image: "/blog/finops-strategy.jpg",
      category: "Update",
      date: "January 8, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Cloud Security: Creating Robust and Compliant Infrastructure",
      description: "Learn the principles and techniques to craft secure and compliant cloud environments.",
      image: "/blog/cloud-security.jpg",
      category: "Update",
      date: "January 5, 2025",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Multi-Cloud Architecture: Designing for All Platforms",
      description: "Discover the essentials of multi-cloud architecture to ensure seamless cross-platform experiences.",
      image: "/blog/multi-cloud.jpg",
      category: "Update",
      date: "January 3, 2025",
      readTime: "12 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
       {/* Hero Section */}
       <section ref={heroRef} className="py-6 sm:py-8 md:py-10 bg-gradient-to-br from-slate-50 to-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-4xl mx-auto">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-3 sm:mb-4">
               {t('blog.hero.title')}
             </h1>
             <p className="text-lg sm:text-xl text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto">
               {t('blog.hero.description')}
             </p>
           </div>
         </div>
       </section>

       {/* Search and Filters */}
       <section className="py-4 sm:py-6 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Search Bar */}
           <div className="mb-6">
             <div className="relative max-w-md mx-auto">
               <HugeiconsIcon icon={Search01Icon} size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
               <input
                 type="text"
                 placeholder={t('blog.search_placeholder')}
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
               />
             </div>
           </div>

           {/* Category Filters */}
           <div className="mb-8">
             <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2">
               {categories.map((category) => (
                 <button
                   key={category.key}
                   onClick={() => setSelectedCategory(category.key)}
                   className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                     selectedCategory === category.key
                       ? 'bg-brand-accent text-white'
                       : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                   }`}
                 >
                   {category.label}
                 </button>
               ))}
             </div>
           </div>
         </div>
       </section>

       {/* Blog Posts Grid */}
       <section ref={containerRef} className="py-8 sm:py-12 lg:py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {blogPosts.map((post) => (
               <article key={post.id} className="relative aspect-[4/5] bg-white border border-slate-200 rounded-2xl overflow-hidden">
                 {/* Full Image Background */}
                 <img
                   src={post.image}
                   alt={post.title}
                   className="absolute inset-0 w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = '/placeholder.svg';
                   }}
                 />
                 
                 {/* Dark Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                 
                 {/* Arrow Icon - Top Right */}
                 <div className="absolute top-4 right-4">
                   <div className="w-8 h-8 bg-brand-accent backdrop-blur-sm rounded-full flex items-center justify-center">
                     <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} className="text-white" />
                   </div>
                 </div>

                 {/* Content Overlay - Bottom */}
                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                   <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
                     {post.title}
                   </h2>
                   <p className="text-slate-200 text-sm sm:text-base line-clamp-2">
                     {post.description}
                   </p>
                 </div>
               </article>
             ))}
          </div>

           {/* Load More Button */}
           <div className="text-center mt-12 sm:mt-16">
             <button className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-accent/90 transition-colors duration-300">
               {t('blog.load_more')}
             </button>
           </div>
         </div>
       </section>

       <SectionSeparator />

       {/* Newsletter Section */}
       <section className="py-12 sm:py-16 lg:py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
             {t('blog.newsletter.title')}
           </h2>
           <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
             {t('blog.newsletter.description')}
           </p>
           <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
             <input
               type="email"
               placeholder={t('blog.newsletter.email_placeholder')}
               value={newsletterEmail}
               onChange={(e) => setNewsletterEmail(e.target.value)}
               className="flex-1 px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-sm sm:text-base"
             />
             <button 
               type="submit"
               disabled={newsletterStatus === 'success' || newsletterStatus === 'error'}
               className={`px-6 py-3 font-medium rounded-full transition-colors duration-300 text-sm sm:text-base ${
                 newsletterStatus === 'success' 
                   ? 'bg-green-500 text-white cursor-not-allowed' 
                   : newsletterStatus === 'error'
                   ? 'bg-red-500 text-white cursor-not-allowed'
                   : 'bg-brand-accent text-white hover:bg-brand-accent/90'
               }`}
             >
               {newsletterStatus === 'success' 
                 ? t('blog.newsletter.success')
                 : newsletterStatus === 'error'
                 ? t('blog.newsletter.error')
                 : t('blog.newsletter.subscribe')
               }
             </button>
           </form>
         </div>
       </section>

      <Footer />
    </div>
  );
}
