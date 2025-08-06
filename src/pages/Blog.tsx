import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useNavigate } from 'react-router-dom';

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

const Blog = () => {
  const navigate = useNavigate();

  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });
  
  const getBlogTitle = (post: BlogPost): string => {
    // Title is a direct column in the blogs table
    return post.title || 'Untitled Blog Post';
  };

  const getBlogIntroduction = (content: BlogContent): string => {
    if (content.introduction) {
      return content.introduction.replace(/\*\*/g, '');
    }
    return 'No introduction available.';
  };

  const handleBlogClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <Layout>
      <Hero 
        title="Financial Insights"
        subtitle="Stay Informed with Expert Advice"
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Posts Grid */}
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="text-muted-foreground">Loading blog posts...</div>
            </div>
          ) : error ? (
            <div className="flex flex-col justify-center items-center py-12 space-y-4">
              <div className="text-red-500 text-lg font-semibold">Error loading blog posts</div>
              <div className="text-red-400 text-sm max-w-md text-center">
                {error instanceof Error ? error.message : 'Unknown error occurred'}
              </div>
            </div>
          ) : !blogPosts || blogPosts.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-12 space-y-4">
              <div className="text-gray-600 text-lg font-semibold">No blog posts found</div>
              <div className="text-gray-500 text-sm">
                The blogs table might be empty.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => {
                const content = post.content as BlogContent;
                const title = getBlogTitle(post);
                const introduction = getBlogIntroduction(content);
                const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });
                
                return (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => handleBlogClick(post.id)}
                  >
                    {/* Image with hover zoom effect */}
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <img 
                        src="/images/image.png" 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {formattedDate}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {introduction}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {formattedDate}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 p-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Previous
              </Button>
              <Button className="btn-primary">1</Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                2
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                3
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 lg:py-24 surface-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest financial insights and investment tips delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="btn-hero whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;