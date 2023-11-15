import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  fullName: null,
  email: null,
  age: null,
  gender: null,
  address: null,
  role: null,
});
