export interface User {
  _id?: string;
  user?: string;
  password?: string;
  name?: string;
  email?: string;
  scope?: string[];
  created_at?: Date;
  updated_at?: Date;
}
