const providers = [
  ["ChatGPT", "https://chatgpt.com/?q="],
  ["Claude", "https://claude.ai/new?q="],
  ["Gemini", "https://gemini.google.com/app"],
  ["Grok", "https://grok.com/?q="],
  ["Perplexity", "https://www.perplexity.ai/search?q="],
] as const;

export default function AIProviders({ prompt }: { prompt: string }) {
  return (
    <nav
      className="cmp-ai-providers"
      aria-label="Run the comparison in your preferred AI"
    >
      <span>Run it in</span>
      {providers.map(([name, url]) => (
        <a
          href={
            url.endsWith("?q=") ? `${url}${encodeURIComponent(prompt)}` : url
          }
          key={name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Run in ${name}`}
        >
          <img
            src={`/lifecycle/ai/${name.toLowerCase()}.png`}
            alt={name}
            height={22}
          />
        </a>
      ))}
    </nav>
  );
}
