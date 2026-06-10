import type { CollectionEntry } from 'astro:content';

export const colorClasses: Record<string, string> = {
  yellow: 'bg-sunshine',
  mint: 'bg-mintpop',
  pink: 'bg-bubblegum',
  sky: 'bg-skybolt',
  purple: 'bg-grape',
  orange: 'bg-lava',
  green: 'bg-limezap',
  blue: 'bg-cyan-300',
};

export const iconEmoji: Record<string, string> = {
  calculator: '🧮', flask: '🧪', book: '📚', globe: '🌍', laptop: '💻', heart: '💪', leaf: '🌿', star: '⭐'
};

export function slugOf(entry: CollectionEntry<'chapters' | 'subjects' | 'quizzes' | 'notes' | 'videos'>) {
  return 'slug' in entry.data && entry.data.slug ? entry.data.slug : entry.id.replace(/\.md$/, '');
}

export function youtubeEmbed(url: string) {
  const parsed = new URL(url);
  const id = parsed.hostname.includes('youtu.be') ? parsed.pathname.slice(1) : parsed.searchParams.get('v');
  return `https://www.youtube.com/embed/${id ?? ''}`;
}
