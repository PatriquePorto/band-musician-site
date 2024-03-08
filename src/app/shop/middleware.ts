import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/', '/shop', '/shop/product(.*)', '/shop/sign-in', '/shop/sign-up'], 
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

