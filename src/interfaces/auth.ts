export interface User {
  fullName: string;
  company: string;
  post: string;
  email: string;
  phone: string;
}

export interface Lenguage {
  idioma: number;
}

export interface ImageUser {
  image: string;
}

export interface ImageProfile {
  profileImage: string;
}

export interface AuthState {
  user: User | object;
}
