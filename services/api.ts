import { Product } from "../types";

const isDev = import.meta.env;

const API_BASE_URL = isDev
  ? "http://localhost:8888/.netlify/functions"
  : "/.netlify/functions";

// Função utilitária para requests
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    try {
      return await request<Product[]>("/products");
    } catch (error) {
      if (isDev) {
        console.error(error);
      }
      throw new Error("Não foi possível conectar ao servidor.");
    }
  },

  async recordClick(productId: string): Promise<void> {
    try {
      await request<{ clicks: number }>("/products/click", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    } catch {
      // Falha silenciosa — não quebra a experiência do usuário
    }
  },

  async getStats(): Promise<any> {
    try {
      return await request("/stats");
    } catch (error) {
      if (isDev) {
        console.error(error);
      }
      throw error;
    }
  },

  async resetClicks(): Promise<void> {
    try {
      await request("/reset-clicks", {
        method: "POST",
      });
    } catch (error) {
      if (isDev) {
        console.error(error);
      }
      throw error;
    }
  },

  async healthCheck(): Promise<boolean> {
    try {
      const data = await request<{ status: string }>("/health");
      return data.status === "ok";
    } catch {
      return false;
    }
  },
};
