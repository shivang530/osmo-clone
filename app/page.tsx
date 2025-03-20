import { headers } from 'next/headers';

// Log build time
console.log(`[Build Time] Page built at: ${new Date().toISOString()}`);

export const revalidate = 18000; // Revalidate every 5 hours (in seconds)

const testimonials = [
  {
    content: "Osmo is full of awesome (and easy to use) interactions that save so much time. They're visually powerful but also robust, and the best thing is, it's only going to get better as more even resources get added! Oh and it doesn't hurt that the dashboard looks sick too.",
    author: "Jason Harvey",
    title: "Somefolk",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    featured: true
  },
  {
    content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    author: "Nicola Romei",
    title: "Digital Designer",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "It's nice to get access to some creative dev best kept secrets - they're a great a source of inspiration for animations and interactions. Already found out some tricks for some issues that were giving me headaches before!",
    author: "Flayks",
    title: "Designer & Front End Dev",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="/" className="nav-logo">Osmo</a>
        <div className="nav-links">
          <a href="/home" className="nav-link">Home</a>
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/updates" className="nav-link">Updates</a>
          <a href="/faq" className="nav-link">FAQ</a>
          <a href="/login" className="nav-link">Log in</a>
          <a href="/get-started" className="nav-button">Get Started</a>
        </div>
      </nav>

      <div className="sidebar">
        <div className="sidebar-column">
          <a href="#buttons" className="sidebar-link">Buttons</a>
          <a href="#components" className="sidebar-link">Components</a>
          <a href="#transitions" className="sidebar-link">Transitions</a>
          <a href="#animations" className="sidebar-link">Animations</a>
          <a href="#loaders" className="sidebar-link">Loaders</a>
        </div>
        <div className="sidebar-column">
          <a href="#documentation" className="sidebar-link">Documentation</a>
          <a href="#tools" className="sidebar-link">Tools</a>
          <a href="#references" className="sidebar-link">References</a>
          <a href="#tutorials" className="sidebar-link">Tutorials</a>
        </div>
      </div>

      <section className="hero">
        <div className="glow"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Start building websites<br />
            people remember.
          </h1>
          <p className="hero-description">
            Osmo came from constantly digging through old projects
            wondering, 'How did I build that again?' It is basically our
            personal toolbox, packed with components, techniques,
            tricks and tutorials—and it will keep growing.
          </p>
          <div className="hero-buttons">
            <a href="/become-member" className="button-primary">
              Become a member
            </a>
            <a href="/about" className="button-secondary">
              <span>👋</span> About us
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="trusted-by">
          <h2>Trusted by</h2>
          <div className="avatar-group">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="avatar">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={`Trusted user ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-title">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}