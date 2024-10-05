import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const portectedRoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-rooms",
  "/meeting(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (portectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
