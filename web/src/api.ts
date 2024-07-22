import wretch, { type WretchResponse } from "wretch";

const API = wretch("http://localhost:8081", { mode: "cors" });

export async function ping(): Promise<string> {
  const res = await API.url('/ping').get().res();
  handleError(res)
  return await res.text()
}

async function handleError(res: WretchResponse) {
  if (!res.ok) {
    throw new Error(await res.text())
  }
}
