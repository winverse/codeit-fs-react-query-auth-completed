import { request } from "./request.js";

export function signUp(payload) {
  return request("/auth/signup", {
    method: "POST",
    body: payload,
  });
}

export function login(payload) {
  return request("/auth/login", {
    method: "POST",
    body: payload,
  });
}

export function logout() {
  return request("/auth/logout", {
    method: "POST",
  });
}

export async function getMe() {
  try {
    // 1. 현재 로그인한 사용자 정보를 요청합니다.
    return await request("/auth/me");
  } catch (error) {
    // 2. 401 응답이면 null을 돌려줍니다.
    if (error?.status === 401) {
      return null;
    }

    // 3. 그 밖의 오류는 그대로 다시 던집니다.
    throw error;
  }
}
