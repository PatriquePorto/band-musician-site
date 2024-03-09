'use client'

import { useCartStore } from "../store"
import { ProductType } from "../types/ProductType"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  const { t } = useTranslation();

  const handleAddToCart = () => {
    addProduct(product);
    toast.success(t('Item adicionado no carrinho'), {
      position: 'bottom-right'
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center hover:bg-teal-800"
    >
      { useTranslation().t('Adicionar no Carrinho')}
    </button>
  );
}