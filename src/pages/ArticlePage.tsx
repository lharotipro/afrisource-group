import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft, Calendar, Clock, Mail, Tag,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { getArticleBySlug } from "../data/articles";
// ArticlePage — hero with Unsplash backdrop + sticky right-column carousel

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const [slide, setSlide] = useState(0);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-4xl font-bold text-foreground">Article not found</h1>
        <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const total = article.images.length;
  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Sticky nav ────────────────────────────────────── */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to AfriSource Group
          </Link>
          <img src="/logo.PNG" alt="AfriSource Group" className="h-9 brightness-0 invert" />
        </div>
      </div>

      {/* ── Hero — background image + dark overlay ────────── */}
      <div className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Unsplash background image at low opacity */}
        {article.heroImage && (
          <>
            <img
              src={article.heroImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.22 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/88 to-primary/70" />
          </>
        )}

        <div className="relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-primary-foreground/35 mb-8">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>/</span>
              <span>{article.category}</span>
            </div>

            <span className={`inline-block ${article.categoryBg} px-3 py-1.5 rounded-full text-white text-xs font-semibold mb-6`}>
              {article.category}
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] md:text-5xl xl:text-6xl mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-primary-foreground/65 max-w-2xl leading-relaxed mb-10">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/50 pb-10 border-b border-white/10">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readTime}</span>
              <span className="font-medium text-primary-foreground/80">Mohammed Hayoun — AfriSource Group</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6">
              {article.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-primary-foreground/60">
                  <Tag className="h-3 w-3" />{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Body (left) + Carousel (right, sticky) ──────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-start">

          {/* ── Left: article body ─────────────────────────── */}
          <div>
            <p className="text-xl leading-relaxed text-muted-foreground mb-12 font-medium border-l-4 border-accent pl-6">
              {article.excerpt}
            </p>

            <div className="space-y-0">
              {article.body.map((block, i) => {
                if (block.type === "heading") return (
                  <h2 key={i} className="mt-12 mb-4 text-2xl font-bold text-foreground">
                    {block.content as string}
                  </h2>
                );
                if (block.type === "paragraph") return (
                  <p key={i} className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {block.content as string}
                  </p>
                );
                if (block.type === "quote") return (
                  <blockquote key={i} className="my-10 rounded-2xl bg-primary p-8 text-primary-foreground">
                    <p className="text-lg font-medium leading-relaxed italic">"{block.content as string}"</p>
                    <p className="mt-4 text-sm text-primary-foreground/50 not-italic">— Mohammed Hayoun, Founder AfriSource Group</p>
                  </blockquote>
                );
                if (block.type === "list") return (
                  <ul key={i} className="mb-6 space-y-2">
                    {(block.content as string[]).map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-base text-muted-foreground">
                        <span className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-xs">✓</span>
                        <span>{item.replace(/^[✅❌🐟🌿🧴🫒🥦🪨🌾]\s?/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
                return null;
              })}
            </div>
          </div>

          {/* ── Right: sticky carousel ─────────────────────── */}
          {total > 0 && (
            <div className="sticky top-24 space-y-4">

              {/* Eyebrow */}
              <div className="text-center">
                <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                  Visual Slides
                </span>
              </div>

              {/* Slide viewer — portrait 4:5 fills the column naturally */}
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F3EF] shadow-2xl">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "4/5", maxHeight: "70vh" }}
                >
                  <img
                    key={slide}
                    src={article.images[slide].src}
                    alt={article.images[slide].caption ?? article.title}
                    className="w-full h-full object-contain"
                  />

                  {/* Prev / Next arrows */}
                  {total > 1 && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white shadow-lg transition-all hover:scale-105"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white shadow-lg transition-all hover:scale-105"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Counter badge */}
                  {total > 1 && (
                    <div className="absolute top-3 right-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {slide + 1} / {total}
                    </div>
                  )}
                </div>
              </div>

              {/* Caption */}
              {article.images[slide].caption && (
                <p className="text-center text-sm text-muted-foreground italic px-2">
                  {article.images[slide].caption}
                </p>
              )}

              {/* Thumbnail strip */}
              {total > 1 && (
                <div className="flex justify-center gap-2 flex-wrap">
                  {article.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all hover:scale-105 ${
                        i === slide ? "border-accent shadow-md" : "border-transparent opacity-55 hover:opacity-100"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    >
                      <img src={img.src} alt="" className="h-full w-full object-cover" />
                      {i === slide && (
                        <div className="absolute inset-0 ring-2 ring-accent ring-inset rounded-xl" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Dot indicators */}
              {total > 1 && (
                <div className="flex justify-center gap-2">
                  {article.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`rounded-full transition-all ${
                        i === slide ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── CTA footer ────────────────────────────────────── */}
      <div className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-4">Ready to Source?</p>
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Start Your Sourcing Journey</h2>
          <p className="text-primary-foreground/65 mb-8 max-w-xl mx-auto">
            Connect directly with Mohammed Hayoun and access our verified Moroccan supplier panel.
          </p>
          <a
            href="mailto:contact@afrisourcegroup.com"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg"
          >
            <Mail className="h-5 w-5" /> contact@afrisourcegroup.com
          </a>
          <div className="mt-10">
            <Link to="/#blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}