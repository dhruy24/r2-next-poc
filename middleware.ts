import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Log to verify middleware execution
  console.log("Middleware triggeredddddddddddddddddddddddddddddddddddddddddddddddddddddddddd!");

  //const token = req.cookies.get('auth_tokes');
  const token = req.cookies.get('token');
  const url = req.nextUrl.clone();

  if (!token && url.pathname !== '/login') {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply the middleware to specific routes (e.g., /dashboard and /profile)
export const config = {
  matcher: ['/', "/dashboard", "/dashboard2" ],
};
