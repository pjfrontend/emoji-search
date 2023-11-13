export interface Dictionary<T> {
  [Key: string]: T;
}

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
  groups: Dictionary<string[]>;
  emojis: Dictionary<EmojiInfo>;
}
