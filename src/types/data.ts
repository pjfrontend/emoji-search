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
  keywords: string[];
  groups: Record<string, string[]>;
  emojis: Record<string, EmojiInfo>;
}

export interface EmojiReverseLookup {
  subgroups: Record<string, string[]>;
  versions: Record<string, string[]>;
  keywords: Record<string, string[]>;
}
