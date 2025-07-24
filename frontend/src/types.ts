export type User = {
  id: number;
  name: string;
  email: string;
  location: string;
};

export type Login = {
  user_name: string;
  ip_address: string;
  location: string;
  timestamp: string;
};