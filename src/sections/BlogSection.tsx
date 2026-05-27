import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router";
import { articles } from "../data/articles";

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#F5F3EF] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Insights &amp; Stories
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl text-foreground">
            Trade Knowledge,{" "}
            <span className="text-accent">Straight from the Field</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories, sourcing guides and market insights from the Afrisource Group team.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 ${article.categoryBg} px-3 py-1 rounded-full text-white text-xs font-semibold`}>
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary border border-border px-3 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all mt-auto">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/company/afrisource-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-8 py-4 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Follow Us on LinkedIn for More Insights <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}