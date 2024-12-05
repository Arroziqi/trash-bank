import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Abaikan permintaan ke file Next.js internal, API, dan halaman /signin
  if (
    pathname.startsWith("/_next") || // File internal Next.js
    pathname.startsWith("/api") || // Endpoint API
    pathname === "/signin" // Halaman signin
  ) {
    return NextResponse.next();
  }

  // Periksa keberadaan token di cookie
  const token = request.cookies.get("token");
  if (!token) {
    // Redirect ke /signin jika tidak ada token
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Lanjutkan permintaan jika token ada
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Middleware berlaku untuk semua URL
};
