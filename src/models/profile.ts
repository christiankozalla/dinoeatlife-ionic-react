import { User } from './user';

export interface Profile {
  userId: User['id'];
  name: string;
  bio?: string;
  city?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}
