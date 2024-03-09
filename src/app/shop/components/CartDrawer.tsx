import Image from "next/image";
import { useCartStore } from "../store";
import { formatPrice } from "../../../lib/utils";
import { formatPriceUS } from "../../../lib/utils";
import CheckoutButton from "./CheckoutButton";
import Checkout from "./Checkout";
import { ProductType } from "../types/ProductType";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

export default function CartDrawer() {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  const { t } = useTranslation();

  const language = useTranslation().i18n.language;

  const handleAddProduct = (item: ProductType) => {
    useStore.addProduct(item);
    toast.success(t('Item adicionado no carrinho'));
  }
  
  const handleRemoveProduct = (item: ProductType) => {
    useStore.removeProduct(item);
    toast.success(t('Item removido do carrinho'));
  }

  return (
    <div
      onClick={() => useStore.toggleCart()}
      className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-slate-600 right-0 top-0 xl:w-1/4 lg:w-[35%] h-screen p-8 overflow-y-scroll"
      >
        <button
          onClick={() => useStore.toggleCart()}
          className="font-bold text-sm text-teal-600"
        >
          {useTranslation().t('Voltar para a loja')}
        </button>
        <div className="border-t border-gray-400 my-4"> </div>
        {useStore.onCheckout === 'cart' && (
          <>
            {useStore.cart.map((item) => (
              <div key={item.id} className="flex gap-4 py-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="w-24 object-cover"
                />
                <div>
                  <h2 className="w-42 truncate">{item.name}</h2>
                  <h2 className="text-sm font-bold">
                    {t('Quantidade')}: {item.quantity}
                  </h2>
                  {language === 'pt-BR' && (
                    <p className="text-teal-600 text-sm font-bold">
                      {t('Preço')}: {formatPrice(item.price)}
                    </p>
                  ) || language === 'en-US' && (
                    <p className="text-teal-600 text-sm font-bold">
                      {t('Price')}: {formatPriceUS(item.price)}
                    </p>
                  )}
                  <button
                    className="py-1 px-2 border rounded-md mt-2 text-sm mr-1 hover:bg-slate-400"
                    onClick={() => handleAddProduct(item)}
                  >
                    {t('Adicionar')}
                  </button>
                  <button
                    onClick={() => handleRemoveProduct(item)}
                    className="py-1 px-2 border rounded-md mt-2 text-sm hover:bg-slate-400"
                  >
                    {t('Remover')}
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        {useStore.onCheckout === 'cart' && useStore.cart.length === 0 && (
          language === 'pt-BR' && (
            <div className="flex items-center justify-center xl:mt-[23%] xl:h-[250px] xl:w-[100%] xl:ml-0 md:w-[70%] md:mt-[80%] ms:mt-56 ms:w-[200px] ms:ml-9">
              <Image
                className="flex xs:mt-16 ms:mt-28 object-cover"
                src="/images/carrinho-vazio.png"
                alt="hero"
                width={350}
                height={250}
              />
            </div>
          ) || language === 'en-US' && (
            <div className="flex items-center justify-center xl:mt-[23%] xl:h-[250px] xl:w-[100%] xl:ml-0 md:w-[70%] md:mt-[80%] ms:mt-56 ms:w-[200px] ms:ml-9">
              <Image
                className="flex xs:mt-16 ms:mt-28 object-cover"
                src="/images/cart-empty.png"
                alt="hero"
                width={200}
                height={150}
              />
            </div>
))}
            {useStore.cart.length > 0 && useStore.onCheckout === 'cart' && (
                <CheckoutButton totalPrice={totalPrice} />
             )}

              {useStore.onCheckout === 'checkout' && (
                <Checkout />
              )}
          </div>           
    </div>
    )
}