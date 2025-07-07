// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // تحقق من وجود كوكي 'loggedIn' وقيمته
  const isLoggedIn = request.cookies.get('loggedIn')?.value === 'true';

  // المسار لصفحة تسجيل الدخول
  const loginPath = '/login';

  // إذا كان المستخدم غير مسجل دخول (بناءً على كوكي الجلسة)
  // و يحاول الوصول إلى أي مسار آخر غير صفحة تسجيل الدخول نفسها
  if (!isLoggedIn && request.nextUrl.pathname !== loginPath) {
    // أعد التوجيه إلى صفحة تسجيل الدخول
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // إذا كان مسجل دخول أو يحاول الوصول لصفحة تسجيل الدخول، اسمح له بالمرور
  return NextResponse.next();
}

// تحديد المسارات التي سيتم تطبيق الـ Middleware عليها
export const config = {
  matcher: [
    // هذا سيطبق الـ middleware على كل المسارات باستثناء:
    // - ملفات Next.js الداخلية (مثل API routes, static assets, images optimization)
    // - أي مسار يبدأ بـ '_' مثل _next/
    // - favicon.ico
    // - مجلد 'images' (حتى لا يتعارض مع تحميل الصور)
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};