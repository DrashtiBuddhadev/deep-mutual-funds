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
        title="Blog"
        subtitle="At Deep Investment, we believe that financial literacy is the cornerstone of lasting wealth. Our blog is designed to simplify complex financial concepts and offer clear, practical insights on wealth creation, investment planning, risk management, and legacy protection."
        showCTA={false}
        className="hero-no-circular"
      />

      {/* Blog Introduction Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Whether you are just getting started, growing your business, or safeguarding your family's future, our goal is to help you make confident and well-informed financial decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We write for real people, not just finance professionals, so you can turn knowledge into action and strategy into results.
            </p>
            <p className="text-xl font-medium text-primary">
              Explore our latest articles and start building your financial intelligence today.
            </p>
          </div>
        </div>
      </section>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                        src={`/images/blog${((post.id - 1) % 3) + 1}.png`} 
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to placeholder if blog image doesn't exist
                          (e.target as HTMLImageElement).src = "/images/image.png";
                        }}
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
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:space-x-2">
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-3 py-1 text-sm">
                Previous
              </Button>
              <Button size="sm" className="btn-primary px-3 py-1">1</Button>
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-3 py-1 text-sm">
                2
              </Button>
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-3 py-1 text-sm">
                3
              </Button>
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-3 py-1 text-sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;