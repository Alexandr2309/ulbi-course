export interface User {
  id: string;
  username: string;
  avatar?: string
}

export interface UserSchema {
  dataAuth?: User;
  _initialized: boolean
}
