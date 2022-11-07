import { User } from 'entities/User';

export interface UserComment {
  id: string;
  text: string;
  user: User
}
