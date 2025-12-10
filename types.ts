export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // Stored securely
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  carbonFootprint: number; // kg CO2e
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}