import { auth } from '@/auth';
import { authRoutes, publicRoutes } from './routes';
import { NextResponse } from 'next/server';

export default auth((req) => {
  // req.auth
  const { nextUrl, auth } = req;
  const isLoggedIn = !!auth;

  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isPublic) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/members', nextUrl));
    }

    return NextResponse.next();
  }

  if (!isPublic && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};