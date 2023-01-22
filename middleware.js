import { NextResponse } from "next/server";

export function middleware(request) {
  // const token = request.cookies.get("AuthToken") || false
  const token = true;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/complete",
    "/inProgress",
    "/newTask",
    "/createNew",
    "/canceled",
  ],
};
