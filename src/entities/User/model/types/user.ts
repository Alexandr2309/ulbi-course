export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  dataAuth?: User;
  _initialized: boolean
}
