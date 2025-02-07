import { baseApiUrl } from "@/config";
import { $storage } from "@/composable/storage";

export async function $fetch(path, args = {}, method = "") {
  const hasArgs = Object.keys(args).length > 0;
  method = method || (hasArgs ? "POST" : "GET");
  const isMethodGet = method === "GET";

  let url = `${baseApiUrl}/${path}`;
  if (isMethodGet && hasArgs) url += `?${new URLSearchParams(args).toString()}`;

  const headers = { Accept: "application/json", "Content-Type": "application/json" };
  const token = $storage.get("token");
  if (token) headers.Authorization = `Bearer ${token}`;
  const options = isMethodGet ? { headers } : { method, headers, body: JSON.stringify(args) };

  return fetch(url, options).then((res) => (res.ok ? res.json() : Promise.reject(res)));
}
