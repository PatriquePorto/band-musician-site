import React from 'react'
import { ProductType }from '../types/ProductType'
import  Product  from '../components/Product'
import Stripe from 'stripe'

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  })

  const products = await stripe.products.list()
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ 
        product: product.id 
      })
      return {
        id: product.id,
        price: prices.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: prices.data[0].currency,
      }  
    })
  )

  return formatedProducts
 /* const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json() */
}

const Main = async () => {

  const products = await getProducts()

  return (
    <div className='max-w-7xl mx-auto pt-20 px-8 xl:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>

        {
         products.map((product) => (
         <Product key={product.id} product={product} />
        ))
      }
        </div>
      </div>
  )
}

export default Main