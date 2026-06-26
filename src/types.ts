export interface CoupleDetails {
  groom: {
    name: string;
    parents: {
      father: string;
      mother: string;
    };
  };
  bride: {
    name: string;
    parents: {
      father: string;
      mother: string;
    };
  };
}

export interface TimelineEvent {
  id: string;
  title: string;
  icon: string; // Emoji character or lucide name
  date: string;
  time?: string;
  venue: string;
  description?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}
