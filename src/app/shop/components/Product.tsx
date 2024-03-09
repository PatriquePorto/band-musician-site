import React from "react";
import { ProductType } from "../types/ProductType";
import ProductImage from "./ProductImage";
import { useTranslation } from "react-i18next";
import { formatPrice, formatPriceUS } from "../../../lib/utils";
import AddCart from "./AddCart";
import Link from "next/link";

type ProductProps = {
  product: ProductType
}

const Product = ({ product }: ProductProps) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="flex flex-col shadow-lg h-96 rounded-md bg-slate-800 p-5 text-gray-300">
      <div className="relative max-h-72 flex-1">
        <Link href={`/shop/product/${product.id}`}>
          <ProductImage product={product} fill />
        </Link>
      </div>
      <div className="flex justify-between font-bold my-3">
        <p className="w-40 truncate">{product.name}</p>
        <p className="text-md text-teal-300">
          {language === 'pt-BR' ? formatPrice(product.price) : formatPriceUS(product.price)}
        </p>
      </div>
      <AddCart product={product} />
    </div>
  );
}

export default Product;