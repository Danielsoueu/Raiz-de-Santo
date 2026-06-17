import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog Raiz de Santo | Dicas de Axé e Cuidados com Roupas de Santo",
  description: "Dicas de como lavar roupas de santo, o significado das cores, tipos de tecidos e fundamentos das vestimentas na Umbanda e Candomblé.",
  path: "/blog",
  keywords: "lavar roupa de santo, cuidar de roupa de candomblé, axé nas roupas, costura religiosa umbanda, dicas roupas de santo"
});

export default function Blog() {
  return <BlogClient />;
}
