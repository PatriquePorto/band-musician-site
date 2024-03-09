'use client';
import { formatPrice } from '../../../lib/utils';
import { formatPriceUS } from '../../../lib/utils';
import { useCartStore } from '../store';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

type CheckoutButtonProps = {
  totalPrice: number;
};

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
  const router = useRouter();
  const { user } = useUser();
  const cartStore = useCartStore();

  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart();
      router.push(`/shop/sign-in?redirectUrl=shop`);
      return;
    }
    cartStore.setCheckout('checkout');
  };

  const language  = useTranslation().i18n.language

  return (
    <div>
      {language === 'pt-BR' && (
        <p className='text-teal-500 font-bold'>
          Total: {formatPrice(totalPrice)}
        </p>
      )}
      {language === 'en-US' && (
        <p className='text-teal-500 font-bold'>
          Total: {formatPriceUS(totalPrice)}
        </p>
      )}
  
     
      <button
        onClick={handleCheckout}
        className='w-full rounded-md bg-teal-600 text-white py-2 mt-2 hover:bg-teal-800'
      >
       <p className='hover:text-white text-black font-bold'>
          { useTranslation().t('Finalizar Compra')}
        </p> 
      </button>
    </div>
  );
}