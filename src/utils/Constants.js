//Define URL and constants here
export const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
};

export function getAccessToken() {
  return localStorage.getItem("token");
}

export const serverLocation = "http://localhost:8000",
  loginUrl = `${serverLocation}/api/login`,
  URL = {};
