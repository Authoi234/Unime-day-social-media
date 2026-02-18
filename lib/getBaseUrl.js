export function getBaseUrl() {
  // browser
  if (typeof window !== "undefined") {
    return "";
  }

  // server
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}