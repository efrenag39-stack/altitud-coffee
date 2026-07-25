export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  recommended?: boolean;
  firstClass?: boolean;
  tags?: string[];
  altitude?: string;
  origin?: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  altitude: string;
  roastLevel: string;
  flightNotes: string[];
  code: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatPreference: 'terminal' | 'window' | 'cockpit' | 'bar';
  specialRequests?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  flightRoute?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bebidas' | 'interior' | 'decoracion' | 'pasajeros';
  image: string;
  caption: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  altitudeCode: string;
  iconName: string;
}
