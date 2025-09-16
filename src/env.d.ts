type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    session: import("./lib/auth").Session | null;
    user: import("./lib/auth").User | null;
    db: import("drizzle-orm/postgres-js").PostgresJsDatabase;
    auth: import("./lib/auth").AuthInstance;
  }
}

interface ImportMetaEnv {
  readonly DB_URL: string;
  readonly GOOGLE_CLIENT_ID: string;
  readonly GOOGLE_CLIENT_SECRET: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
