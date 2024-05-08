import { getProducts } from "@/actions/productActions/actions";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="m-20 flex flex-wrap justify-center gap-2">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
