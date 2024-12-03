import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  //const expiration = new Date(Date.now() + 20 * 1000).toUTCString();
  const expiration = new Date(Date.now() + 20 * 1000)

  // Set cookies
  const response = NextResponse.json({ success: true });
  response.cookies.set("session", data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: expiration,
  });
  response.cookies.set("userData", JSON.stringify({
    admin: data.admin,
    gteamId: data.gteamId,
    username: data.userName,
  }), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: expiration,
  });

  return response;
}
