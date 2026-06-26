export interface MessageItem {
  name: string;
  relation: string;
  msg: string;
  img?: string; // 👈 Adding the '?' makes it optional for text-only cards!
}

export interface VideoItem {
  id: string;
  videoUrl: string;
  title?: string;
}