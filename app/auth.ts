// Minimal auth stubs so the demo app can run without configuring NextAuth
export async function signIn(provider: string, formData: FormData) {
  // In the real app this would call your auth library. For now, assume success.
  return Promise.resolve({ ok: true });
}

export async function signOut(options?: { redirectTo?: string }) {
  // Stub signOut to satisfy server actions used in the UI.
  return Promise.resolve({ ok: true });
}

export class AuthError extends Error {
  type?: string;
  constructor(message?: string, type?: string) {
    super(message);
    this.type = type;
  }
}
