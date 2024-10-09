import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions = {
  /* Configure one or more authentication providers */
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    /* ...add more providers here */
  ],
  pages: {
    signIn: '/signin', // Define the custom sign-in page path
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
