import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token }) => !!token, 
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",  // protect dashboard pages
    "/notes/:path*",      // protect notes pages
    "/profile/:path*",    // protect profile pages
  ],
};
