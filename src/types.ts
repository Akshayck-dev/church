export type NavigationTab = 
  | 'home' 
  | 'about'
  | 'contact'
  | 'mass-timings' 
  | 'devotions-shrine' 
  | 'sacraments' 
  | 'live-mass' 
  | 'vicar-parish' 
  | 'news-events' 
  | 'offerings';

export interface LiturgyEvent {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'daily' | 'saturday' | 'sunday' | 'confession' | 'adoration';
  tag?: string;
  isHighLight?: boolean;
}

export interface VotiveOffering {
  id: string;
  petitionerName: string;
  type: '7-day' | '30-day';
  intention: string;
  amount: number;
  date: string;
  isConfidential: boolean;
}

export interface MassIntentionRequest {
  id: string;
  name: string;
  nature: string;
  preferredDate: string;
  preferredTime: string;
  offeredBy: string;
  stipend: string;
  notes?: string;
  timestamp: string;
}

export interface AdorerCommitment {
  fullName: string;
  phone: string;
  window: string;
}

export interface SacramentInfo {
  key: string;
  title: string;
  category: string;
  icon: string;
  shortDesc: string;
  points: { icon: string; label: string; detail: string }[];
  ctaText: string;
  fullGuide: {
    description: string;
    requirements: string[];
    schedule: string;
  };
}

export interface ParishEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface Bulletin {
  id: string;
  date: string;
  title: string;
  fileSize: string;
}

export interface GalleryPhoto {
  id: string;
  caption: string;
  src: string;
}
