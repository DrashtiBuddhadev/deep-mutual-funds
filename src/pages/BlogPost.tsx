import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

type BlogPost = Tables<'blogs'>;

interface BlogContent {
  title?: string;
  introduction?: string;
  what_is?: string;
  sip_vs_swp?: any;
  key_benefits?: string[];
  who_needs_it?: string[];
  final_thought?: string;
  call_to_action?: {
    text: string;
  };
  why_non_attachable?: string;
  main_point_1?: string;
  main_point_2?: string;
  what_is_sip?: any;
  what_is_swp?: any;
  final_takeaway?: any;
  why_its_critical?: any;
  how_its_usually_funded?: any;
  real_business_risk_example?: any;
  what_is_a_buy_sell_agreement?: any;
  [key: string]: any;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      if (!id) throw new Error('No blog ID provided');
      
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', parseInt(id))
        .single();
      
      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!id,
  });

  const getBlogTitle = (post: BlogPost): string => {
    // Title is a direct column in the blogs table
    return post.title || 'Untitled Blog Post';
  };

  // Convert property names to readable headings
  const formatHeading = (key: string): string => {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Render call-to-action buttons with gold/blue styling
  const renderCallToAction = (cta: any, ctaType: 'gold' | 'blue' = 'blue') => {
    const buttonClass = ctaType === 'gold' 
      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold shadow-lg'
      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg';

    const text = typeof cta === 'string' ? cta : (cta?.text || 'Get Started');
    
    return (
      <Link to="/contact">
        <Button className={`${buttonClass} px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}>
          {text}
        </Button>
      </Link>
    );
  };

  // Generic content renderer that handles any JSON property structure
  const renderContentValue = (key: string, value: any, depth: number = 0): JSX.Element | null => {
    if (value === null || value === undefined || value === '') return null;

    const keyLower = key.toLowerCase();
    
    // Handle arrays
    if (Array.isArray(value)) {
      return (
        <div className="mb-4">
          <h3 className={`${depth === 0 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold text-gray-900 mb-3`}>
            {formatHeading(key)}
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {value.map((item: any, index: number) => (
              <li key={index} className="text-gray-700 leading-relaxed">
                {typeof item === 'string' ? item : JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    // Handle objects
    if (typeof value === 'object') {
      const sections: JSX.Element[] = [];
      
      // Special handling for call_to_action
      if (keyLower.includes('call_to_action') || keyLower.includes('cta')) {
        const ctaType = Math.random() > 0.5 ? 'gold' : 'blue'; // Randomize gold/blue
        return (
          <div className="text-center my-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            {renderCallToAction(value, ctaType)}
          </div>
        );
      }
      
      // Special handling for final_takeaway or conclusion sections
      if (keyLower.includes('final') || keyLower.includes('conclusion') || keyLower.includes('takeaway')) {
        return (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-l-4 border-green-500 my-8">
            <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-4">
              {value.heading || formatHeading(key)}
            </h2>
            {Object.entries(value).map(([subKey, subValue]) => {
              if (subKey === 'heading') return null;
              if (subKey.toLowerCase().includes('call_to_action')) {
                return (
                  <div key={subKey} className="mt-4">
                    {renderCallToAction(subValue, 'gold')}
                  </div>
                );
              }
              return (
                <div key={subKey} className="mb-3">
                  {typeof subValue === 'string' ? (
                    <p className="text-green-800 text-lg leading-relaxed">{subValue}</p>
                  ) : (
                    renderContentValue(subKey, subValue, depth + 1)
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      
      // Handle objects with heading property
      if (value.heading) {
        sections.push(
          <h3 key="heading" className={`${depth === 0 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold text-gray-900 mb-3`}>
            {value.heading}
          </h3>
        );
      }
      
      // Render other properties in the object
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (subKey === 'heading') return; // Already handled
        
        const renderedContent = renderContentValue(subKey, subValue, depth + 1);
        if (renderedContent) {
          sections.push(
            <div key={subKey} className="mb-3">
              {renderedContent}
            </div>
          );
        }
      });
      
      return (
        <div className="mb-6">
          {!value.heading && depth === 0 && (
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {formatHeading(key)}
            </h3>
          )}
          {sections}
        </div>
      );
    }
    
    // Handle strings
    if (typeof value === 'string') {
      // Don't show heading for introduction
      if (keyLower === 'introduction') {
        return (
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {value.replace(/\*\*/g, '')}
            </p>
          </div>
        );
      }
      
      // Show heading for other string content
      return (
        <div className="mb-6">
          <h3 className={`${depth === 0 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-semibold text-gray-900 mb-3`}>
            {formatHeading(key)}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {value.replace(/\*\*/g, '')}
          </p>
        </div>
      );
    }
    
    return null;
  };

  // New generic content renderer - handles any JSON structure dynamically
  const renderContent = (content: BlogContent) => {
    const sections: JSX.Element[] = [];
    
    // Get all content properties except 'title' (which is handled separately)
    const contentEntries = Object.entries(content).filter(([key]) => key !== 'title');
    
    // Sort entries to prioritize certain sections (introduction first, call_to_action last)
    const sortedEntries = contentEntries.sort(([keyA], [keyB]) => {
      const getOrder = (key: string) => {
        if (key === 'introduction') return 0;
        if (key.toLowerCase().includes('call_to_action')) return 999;
        if (key.toLowerCase().includes('final')) return 900;
        return 500;
      };
      return getOrder(keyA) - getOrder(keyB);
    });
    
    sortedEntries.forEach(([key, value], index) => {
      const renderedSection = renderContentValue(key, value);
      if (renderedSection) {
        sections.push(
          <section key={key} className="mb-8">
            {renderedSection}
          </section>
        );
      }
    });
    
    return sections;
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-muted-foreground">Loading blog post...</div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
          <div className="text-red-500 text-lg font-semibold">Error loading blog post</div>
          <div className="text-red-400 text-sm">
            {error instanceof Error ? error.message : 'Blog post not found'}
          </div>
          <Button onClick={() => navigate('/blog')} className="mt-4">
            Back to Blogs
          </Button>
        </div>
      </Layout>
    );
  }

  const content = post.content as BlogContent;
  const title = getBlogTitle(post);
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="mb-4 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm sm:text-base">{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm sm:text-base">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-6 sm:mb-8">
              <img 
                src={`/images/blog${((post.id - 1) % 3) + 1}.png`} 
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if blog image doesn't exist
                  (e.target as HTMLImageElement).src = "/images/image.png";
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              {renderContent(content)}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost; 