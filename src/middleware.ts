import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
  publicRoutes: ['/', '/website', '/shop', '/shop/product(.*)', '/shop/sign-in', '/shop/sign-up'], 
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

