const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:5001";

export async function request(path, options = {}) {
  const { method = "GET", body } = options;

  const response = await fetch(`${BACKEND_URL}/api${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = response.status === 204 ? null : await response.json();

  if (!response.ok) {
    const error = new Error(payload?.message ?? "요청에 실패했습니다.");
    error.status = response.status;
    error.code = payload?.code;
    error.field = payload?.field;
    throw error;
  }

  return payload;
}
