"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
export async function addProduct(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  console.log("PRODUCTETEEEEEEEEEE");
  console.log(products);
  return products;
}
