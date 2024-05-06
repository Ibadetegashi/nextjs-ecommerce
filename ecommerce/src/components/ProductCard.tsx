import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(product: Product) {
  return (
    <Link href={"/products/" + product.id}>
      <div className="min-w-[250px] max-w-[250px]  rounded-xl border hover:shadow-slate-500">
        <div className="w-full">
          <Image
            className="max-h-[250px] min-h-[250px] w-full  rounded-t-xl "
            src={product.imageUrl}
            width={200}
            height={300}
            alt={product.name}
          />
        </div>

        <div className="max-h-[200px] min-h-[200px] space-y-2 p-2">
          <h2 className="font-medium uppercase text-white">
            {product.name.length > 30
              ? `${product.name.substring(0, 30)}...`
              : product.name}
          </h2>
          <p className="min-h-[100px] max-w-[250px] text-gray-500">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>

          <div className="flex gap-4 font-bold text-green-800">
            ${product.price}
            {/* <del className="font-normal text-gray-500">
            ${product.price}.00
          </del> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
