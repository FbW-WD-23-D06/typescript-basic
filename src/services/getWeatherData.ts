interface Error {
  name: string;
  message: string;
}

type Status = "loading" | "fulfilled" | "rejected";

export default async function getData(url: string): Promise<{
  status: Status;
  data: any;
  error: Error | null;
}> {
  let status: Status = "loading";
  let data = null;
  let error: Error | null = null;
  try {
    const response = await fetch(url);
    data = await response.json();
    console.log("data:", data);
    status = "fulfilled";
  } catch (err: unknown) {
    console.log("err:", err);
    if (err instanceof Error) {
      error = {
        name: err.name,
        message: err.message,
      };
    }
  } finally {
    return { status, data, error };
  }
}
