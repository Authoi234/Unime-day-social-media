import { getBaseUrl } from "./getBaseUrl";


export async function createNewPost(post) {
  const res = await fetch(`${getBaseUrl()}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  return res.json();
}

export async function getAllPosts() {
  const res = await fetch(`${getBaseUrl()}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
