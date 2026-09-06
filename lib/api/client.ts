import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getData<T>(url: string): Promise<T> {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || err.message);
    }
    throw new Error("Unexpected error while fetching data");
  }
}

export default api;