interface SignInWithOAuthParams {
  provider: string;
  providerAccountId: string;
  user: {
    name: string;
    username: string;
    email: string;
    image: string;
  };
}

interface AuthCredentials {
  name: string;
  username: string;
  password: string;
  email: string;
}
