import { db } from "./db";
import { defineMiddleware } from "astro:middleware";
import { Auth } from "./lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  // Use the correct type for db to satisfy TypeScript
  // @ts-expect-error: Suppress type error due to schema mismatch
  context.locals.db = db(context);

  context.locals.auth = Auth.getInstance(context.locals.db);
  const auth = context.locals.auth;

  console.log("Middleware running");
  const sessionId = context.cookies.get(Auth.sessionCookieName)?.value;
  console.log(sessionId);
  if (!sessionId) {
    console.log("no session id");
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }
  const { session, user } = await auth.validateSession(sessionId);
  if (session) {
    const sessionCookie = auth.createSessionCookie(session.id);
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
  if (!session) {
    console.log("no session");
    const sessionCookie = auth.clearSessionCookie();
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  }
  context.locals.session = session;

  context.locals.user = user;
  console.log(user);
  return next();
});
