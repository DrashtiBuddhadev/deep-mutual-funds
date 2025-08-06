import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

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

  const renderContent = (content: BlogContent) => {
    const sections = [];

    // Introduction
    if (content.introduction) {
      sections.push(
        <section key="introduction" className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {content.introduction.replace(/\*\*/g, '')}
          </p>
        </section>
      );
    }

    // What is section
    if (content.what_is) {
      sections.push(
        <section key="what_is" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is it?</h2>
          <p className="text-gray-700 leading-relaxed">{content.what_is}</p>
        </section>
      );
    }

    // Why non-attachable
    if (content.why_non_attachable) {
      sections.push(
        <section key="why_non_attachable" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Non-Attachable?</h2>
          <p className="text-gray-700 leading-relaxed">{content.why_non_attachable}</p>
        </section>
      );
    }

    // Key benefits
    if (content.key_benefits && content.key_benefits.length > 0) {
      sections.push(
        <section key="key_benefits" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {content.key_benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">{benefit}</li>
            ))}
          </ul>
        </section>
      );
    }

    // Who needs it
    if (content.who_needs_it && content.who_needs_it.length > 0) {
      sections.push(
        <section key="who_needs_it" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Needs It?</h2>
          <ul className="list-disc list-inside space-y-2">
            {content.who_needs_it.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </section>
      );
    }

    // SIP vs SWP content
    if (content.sip_vs_swp) {
      sections.push(
        <section key="sip_vs_swp" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">SIP vs SWP</h2>
          {content.sip_vs_swp.conclusion && (
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-900 font-semibold">{content.sip_vs_swp.conclusion}</p>
            </div>
          )}
          {content.sip_vs_swp.main_point_1 && (
            <p className="text-gray-700 mb-2">{content.sip_vs_swp.main_point_1}</p>
          )}
          {content.sip_vs_swp.main_point_2 && (
            <p className="text-gray-700">{content.sip_vs_swp.main_point_2}</p>
          )}
        </section>
      );
    }

    // What is SIP
    if (content.what_is_sip) {
      sections.push(
        <section key="what_is_sip" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is SIP?</h2>
          <p className="text-gray-700 mb-4">{content.what_is_sip.definition}</p>
          {content.what_is_sip.benefits && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2">
                {content.what_is_sip.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    }

    // What is SWP
    if (content.what_is_swp) {
      sections.push(
        <section key="what_is_swp" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is SWP?</h2>
          <p className="text-gray-700 mb-4">{content.what_is_swp.definition}</p>
          {content.what_is_swp.benefits && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefits:</h3>
              <ul className="list-disc list-inside space-y-2">
                {content.what_is_swp.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    }

    // Buy-Sell Agreement content
    if (content.what_is_a_buy_sell_agreement) {
      sections.push(
        <section key="what_is_buy_sell" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.what_is_a_buy_sell_agreement.heading || 'What is a Buy-Sell Agreement?'}
          </h2>
          <p className="text-gray-700 mb-4">{content.what_is_a_buy_sell_agreement.description}</p>
          {content.what_is_a_buy_sell_agreement.events && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Events that trigger the agreement:</h3>
              <ul className="list-disc list-inside space-y-2">
                {content.what_is_a_buy_sell_agreement.events.map((event: string, index: number) => (
                  <li key={index} className="text-gray-700">{event}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    }

    // Why it's critical
    if (content.why_its_critical) {
      sections.push(
        <section key="why_its_critical" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.why_its_critical.heading || 'Why It\'s Critical'}
          </h2>
          {content.why_its_critical.benefits && (
            <ul className="list-disc list-inside space-y-2">
              {content.why_its_critical.benefits.map((benefit: string, index: number) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
          )}
        </section>
      );
    }

    // How it's funded
    if (content.how_its_usually_funded) {
      sections.push(
        <section key="how_its_funded" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.how_its_usually_funded.heading || 'How It\'s Usually Funded'}
          </h2>
          <p className="text-gray-700">{content.how_its_usually_funded.description}</p>
        </section>
      );
    }

    // Real business risk example
    if (content.real_business_risk_example) {
      sections.push(
        <section key="real_example" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.real_business_risk_example.heading || 'Real Business Risk Example'}
          </h2>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-900">{content.real_business_risk_example.story}</p>
          </div>
        </section>
      );
    }

    // Final thoughts
    if (content.final_thought) {
      sections.push(
        <section key="final_thought" className="mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Final Thought</h2>
            <p className="text-blue-900">{content.final_thought}</p>
          </div>
        </section>
      );
    }

    // Final takeaway
    if (content.final_takeaway) {
      sections.push(
        <section key="final_takeaway" className="mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              {content.final_takeaway.heading || 'Final Takeaway'}
            </h2>
            <p className="text-green-900 mb-4">{content.final_takeaway.message}</p>
            {content.final_takeaway.call_to_action && (
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                {content.final_takeaway.call_to_action.text}
              </Button>
            )}
          </div>
        </section>
      );
    }

    // Call to action
    if (content.call_to_action) {
      sections.push(
        <section key="call_to_action" className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              {content.call_to_action.text}
            </Button>
          </div>
        </section>
      );
    }

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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
              <div className="flex items-center text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formattedDate}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  5 min read
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg p-8">
              {renderContent(content)}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost; 