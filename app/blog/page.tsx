import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog Raiz de Santo | Dicas de Axé e Cuidados com Roupas de Santo",
  description: "Dicas de como lavar roupas de santo, o significado das cores, tipos de tecidos e fundamentos das vestimentas na Umbanda e Candomblé.",
  keywords: "lavar roupa de santo, cuidar de roupa de candomblé, axé nas roupas, costura religiosa umbanda, dicas roupas de santo",
};

export default function Blog() {
  return <BlogClient />;
}
