// utils/auth.ts

export const users = [
  { username: "Abdou",     password: "Abdou"     },
  { username: "Salah",     password: "Salah"     },
  { username: "Abdelaziz", password: "Abdelaziz" },
  { username: "Abdullah",  password: "Abdullah"  },
  { username: "Mahmoud",   password: "Mahmoud"   },
  { username: "Alhamly",   password: "Alhamly"   },
  { username: "Ziad",      password: "Ziad"      },
  { username: "Farooh",    password: "Farooh"    },
  { username: "Khalid",    password: "Khalid"    },
export const isValidUser = (username: string, password: string) => {
  return users.some(user => user.username === username && user.password === password);
};