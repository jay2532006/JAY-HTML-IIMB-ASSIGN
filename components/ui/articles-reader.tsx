"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { articles, categories, type Article } from "@/lib/articles";
import "./old-articles.css";

function searchable(article: Article) {
  return [
    article.title,
    article.dek,
    article.category,
    article.quote,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.points ?? []),
    ]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function ArticlesReader() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articles.filter(
      (article) =>
        (activeCategory === "All" || article.category === activeCategory) &&
        searchable(article).includes(q),
    );
  }, [activeCategory, search]);

  const featured = useMemo(() => articles.filter((article) => article.featured), []);

  const handleOpenEssay = (id: string) => {
    const el = document.getElementById(id) as HTMLDetailsElement | null;
    if (el) {
      el.open = true;
    }
  };

  return (
    <div className="old-articles-page">
      <header className="nav">
        <Link className="logo" href="/" aria-label="Jay Parmar — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/brand/jay-parmar-mark.webp" alt="Jay Parmar" />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#showcase">Work</Link>
          <Link className="active" href="/articles">
            Articles
          </Link>
          <Link href="/#dossier">About</Link>
        </nav>
        <a className="nav-cta" href="mailto:jaydeepak2532006@gmail.com">
          Let&apos;s talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> Notes from the field · 2026
            </p>
            <h1>
              Ideas for a world
              <br />
              in <em>motion.</em>
            </h1>
            <p className="intro">
              Essays on AI, leadership, institutions and the human judgment that connects
              them—shaped by conversations with builders, professors and industry leaders.
            </p>
          </div>
          <aside className="manifesto" aria-label="Editorial note">
            <span>Editorial note / 01</span>
            <blockquote>
              “Technology moves quickly. Understanding still asks us to slow down.”
            </blockquote>
            <p>Written by Jay Parmar from sessions, research and lived experience.</p>
          </aside>
        </section>

        <section className="index-strip" aria-label="Article collection summary">
          <div className="wrap stats">
            <div>
              <strong>{articles.length}</strong>
              <span>long-form essays</span>
            </div>
            <div>
              <strong>06</strong>
              <span>fields explored</span>
            </div>
            <div>
              <strong>01</strong>
              <span>recurring question: what matters?</span>
            </div>
          </div>
        </section>

        <section className="featured wrap" aria-labelledby="featured-heading">
          <div className="section-label">
            <span>01</span>
            <p>Featured thinking</p>
          </div>
          <h2 id="featured-heading">
            Start with the
            <br />
            <em>big questions.</em>
          </h2>
          <div className="featured-grid">
            {featured.map((article, i) => (
              <a
                key={article.id}
                className={i === 0 ? "feature-card primary" : "feature-card"}
                href={`#${article.id}`}
                onClick={() => handleOpenEssay(article.id)}
              >
                <div className="card-meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <div>
                  <small>{article.number}</small>
                  <h3>{article.title}</h3>
                  <p>{article.dek}</p>
                </div>
                <b>
                  Read essay <span>↓</span>
                </b>
              </a>
            ))}
          </div>
        </section>

        <section className="library" id="library">
          <div className="wrap">
            <div className="library-head">
              <div className="section-label light">
                <span>02</span>
                <p>The complete library</p>
              </div>
              <div className="library-title">
                <h2>
                  Browse every <em>idea.</em>
                </h2>
                <p>
                  Search by subject or open any essay to read it here. Every article is part of the
                  page—nothing sends you into a maze of tabs.
                </p>
              </div>
            </div>

            <div className="tools">
              <label className="search">
                <span>Search the archive</span>
                <div>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4" />
                  </svg>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Try ‘sovereignty’ or ‘leadership’"
                  />
                </div>
              </label>

              <div className="filters" aria-label="Filter articles by category">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={activeCategory === category ? "active" : undefined}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="result-line">
              <span>{String(filtered.length).padStart(2, "0")} essays</span>
              <i />
            </div>

            <div className="articles">
              {filtered.length === 0 ? (
                <div className="empty">
                  <span>0 results</span>
                  <h3>No essay found.</h3>
                  <p>Try a broader search or choose another category.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                filtered.map((article) => (
                  <details className="article" id={article.id} key={article.id}>
                    <summary>
                      <div className="article-number">{article.number}</div>
                      <div className="article-summary">
                        <div className="article-meta">
                          <span>{article.category}</span>
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.dek}</p>
                      </div>
                      <div className="toggle">
                        <span className="open-label">Read</span>
                        <span className="close-label">Close</span>
                        <b>+</b>
                      </div>
                    </summary>

                    <div className="article-body">
                      <div className="article-rail">
                        <span>Words by</span>
                        <strong>Jay Parmar</strong>
                        <i />
                        <span>{article.date}</span>
                      </div>

                      <div className="prose">
                        {article.quote && <blockquote>{article.quote}</blockquote>}
                        {article.sections.map((section, idx) => (
                          <section key={idx}>
                            {section.heading && <h4>{section.heading}</h4>}
                            {section.paragraphs.map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                            {section.points && (
                              <ul>
                                {section.points.map((point, ptIdx) => (
                                  <li key={ptIdx}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </section>
                        ))}

                        {article.links && (
                          <div className="references">
                            <span>People &amp; sources</span>
                            {article.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.label} ↗
                              </a>
                            ))}
                          </div>
                        )}

                        <a className="back" href={`#${article.id}`}>
                          Back to article top ↑
                        </a>
                      </div>
                    </div>
                  </details>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="closing wrap">
          <p className="eyebrow">
            <i /> The thread through it all
          </p>
          <h2>
            Automate the friction.
            <br />
            <em>Preserve the judgment.</em>
          </h2>
          <div>
            <p>
              I write to make complex systems easier to see—and to understand where technology should
              accelerate us, where institutions must protect us, and where people still need to
              decide.
            </p>
            <a href="mailto:jaydeepak2532006@gmail.com">
              Continue the conversation <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <Link className="logo inverse" href="/" aria-label="Jay Parmar — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/brand/jay-parmar-mark.webp" alt="Jay Parmar" />
          </Link>
          <p>
            Ideas on AI, institutions
            <br />
            and human judgment.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/jay-parmar-ai"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <Link href="/">Portfolio ↗</Link>
          </div>
          <small>© 2026 Jay Parmar</small>
        </div>
      </footer>
    </div>
  );
}
