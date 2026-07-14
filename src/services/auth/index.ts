type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

async function postJson(path: string, body: any) {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw data || new Error("Request failed");
  return data;
}

export async function register(payload: RegisterPayload) {
  return postJson("/api/auth/register", payload);
}

export async function login(payload: LoginPayload) {
  return postJson("/api/auth/login", payload);
}

export async function logout() {
  return postJson("/api/auth/logout", {}).catch(() => null);
}

export default { register, login, logout };
