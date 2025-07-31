import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why SIPs Are Ideal for Beginners",
      excerpt: "Discover how Systematic Investment Plans can help you start your investment journey with as little as ₹500 per month and build wealth systematically.",
      author: "Rajesh Patel",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Investment Basics"
    },
    {
      title: "How to Protect Your Wealth with Trusts",
      excerpt: "Learn about family trusts and how they can protect your assets from legal claims while ensuring smooth wealth transfer to future generations.",
      author: "Priya Sharma", 
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Wealth Protection"
    },
    {
      title: "Tax-Efficient Investment Strategies for 2024",
      excerpt: "Maximize your returns while minimizing tax liability with these proven strategies including ELSS funds, PPF, and other tax-saving instruments.",
      author: "Rajesh Patel",
      date: "March 8, 2024", 
      readTime: "6 min read",
      category: "Tax Planning"
    },
    {
      title: "Estate Planning: Securing Your Family's Future",
      excerpt: "A comprehensive guide to estate planning essentials including wills, trusts, and succession planning for Indian families and businesses.",
      author: "Priya Sharma",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Legacy Planning"
    },
    {
      title: "Understanding Mutual Fund Categories",
      excerpt: "Navigate the world of mutual funds with this detailed breakdown of equity, debt, and hybrid funds to make informed investment decisions.",
      author: "Rajesh Patel",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Investment Guide"
    },
    {
      title: "Insurance vs Investment: Finding the Right Balance",
      excerpt: "Learn how to strike the perfect balance between insurance coverage and investment allocation for optimal financial security.",
      author: "Priya Sharma",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Financial Planning"
    }
  ];

  const categories = ["All", "Investment Basics", "Wealth Protection", "Tax Planning", "Legacy Planning", "Investment Guide", "Financial Planning"];

  return (
    <Layout>
      <Hero 
        title="Financial Insights"
        subtitle="Stay Informed with Expert Advice"
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "btn-primary" : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="surface-card hover-lift group">
                {/* Thumbnail */}
                <div className="h-48 bg-surface rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-bold text-lg">
                        {post.title.split(' ')[0][0]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-accent hover:text-accent-foreground hover:bg-accent p-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

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