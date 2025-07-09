import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('loggedIn')?.value === 'true';
  const loginPath = '/login';

  // ✅ اسمح فقط بصفحة تسجيل الدخول إذا لم يكن مسجلاً دخول
  if (!isLoggedIn && request.nextUrl.pathname !== loginPath) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
// هذا يضمن أن middleware يعمل على جميع الصفحات ما عدا API وملفات Next.js الثابتة