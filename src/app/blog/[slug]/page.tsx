import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getPostBySlug } from "../blogContent";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blocks = post.content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const renderBlock = (block: string, index: number) => {
    if (block.startsWith("## ")) {
      return (
        <div key={index} className="mt-16">
          <div className="border-t border-[var(--border)] mb-10" />
          <h2 className="text-5xl leading-[1.08] font-normal tracking-tight [font-family:var(--font-instrument-serif)]">
            {block.replace(/^##\s+/, "")}
          </h2>
        </div>
      );
    }

    if (block.startsWith("![")) {
      const match = block.match(/^!\[(.*)\]\((.*)\)$/);
      const caption = match?.[1] ?? "Blog media";
      const source = match?.[2] ?? "";
      const isPlaceholder = source.startsWith("placeholder:");
      const previewText = isPlaceholder
        ? source.replace("placeholder:", "")
        : post.imageLabel;

      return (
        <figure key={index} className="mt-12">
          {isPlaceholder ? (
            <div className="relative w-full aspect-[16/9] rounded-4xl bg-black overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_15%_15%,#3b82f6_0%,transparent_35%),radial-gradient(circle_at_85%_20%,#6366f1_0%,transparent_32%),radial-gradient(circle_at_50%_80%,#2563eb_0%,transparent_28%)]" />
              <p className="relative z-10 text-white text-4xl md:text-6xl text-center leading-tight">
                {previewText}
              </p>
              <button
                type="button"
                aria-label="Play media preview"
                className="absolute right-6 bottom-6 z-10 h-16 w-16 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white text-2xl"
              >
                ▶
              </button>
            </div>
          ) : (
            <div className="w-full rounded-[28px] overflow-hidden bg-[var(--surface)] border border-black dark:border-white">
              <img
                src={source}
                alt={caption}
                className="block w-full h-auto rounded-[28px]"
              />
            </div>
          )}
          <figcaption className="mt-4 text-center text-[var(--muted)] text-lg">
            {caption}
          </figcaption>
        </figure>
      );
    }

    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, "").trim());
      return (
        <ul key={index} className="mt-7 list-disc pl-7 space-y-3 text-xl leading-9">
          {items.map((item) => {
            const separatorIndex = item.indexOf(":");
            if (separatorIndex === -1) {
              return <li key={item}>{item}</li>;
            }

            const label = item.slice(0, separatorIndex).trim();
            const detail = item.slice(separatorIndex + 1).trim();

            return (
              <li key={item}>
                <strong>{label}:</strong> {detail}
              </li>
            );
          })}
        </ul>
      );
    }

    if (/^Q\d+\.\s/.test(block)) {
      return (
        <p key={index} className="mt-7 text-xl leading-9 font-semibold text-[var(--foreground)]">
          {block}
        </p>
      );
    }

    return (
      <p key={index} className="mt-7 text-xl leading-9 text-[var(--foreground)]">
        {block}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-40 md:pt-44 pb-20">
        <section className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[var(--muted)] tracking-wide">
            {post.category} &nbsp; {post.date}
          </p>
          <h1 className="mt-5 text-4xl md:text-[56px] leading-[1.08] font-normal tracking-tight [font-family:var(--font-instrument-serif)]">
            {post.heroTitle ?? post.title}
          </h1>
          <p className="mt-6 text-xl text-[var(--muted)]">{post.author}</p>
        </section>

        <section className="mt-12">
          {post.coverImage ? (
            <div className="w-full rounded-[28px] overflow-hidden bg-[var(--surface)] border border-black dark:border-white">
              <img
                src={post.coverImage}
                alt={post.imageLabel}
                className="block w-full h-auto rounded-[28px]"
              />
            </div>
          ) : (
            <div className="w-full aspect-[16/7] rounded-4xl bg-black flex items-end justify-center p-8">
              <p className="text-white text-6xl md:text-8xl leading-none [font-family:var(--font-instrument-serif)]">
                {post.imageLabel}
              </p>
            </div>
          )}
        </section>

        <section className="mt-16 max-w-3xl mx-auto text-[var(--foreground)]">
          {blocks.map((block, index) => renderBlock(block, index))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
