export interface EmojiInfo {
  code: string;
  since: string;
  emoji: string;
  group: string;
  subgroup: string;
  keywords: string[];
}

export interface EmojiData {
  versions: string[];
  groups: Record<string, string[]>;
  emojis: Record<string, EmojiInfo>;
}