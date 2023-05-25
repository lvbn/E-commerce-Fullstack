// import { useEffect, useState } from 'react';
import StoreItems from '../../components/store-items/StoreItems';

// import { getProductsBySellerId } from '../../services/products-service';

// import { Product } from '../../models/models';
import { useProductsSlice } from '../../zustand/ProductsSlice';

export default function MyProductsScreen() {

  // const [products, setProducts] = useState<Product[]>([])
  const products = useProductsSlice((state) => state.products)

  // useEffect(() => {

  //   const fectchProductsBySellerId = async () => {
  //     const res = await getProductsBySellerId({sellerId: '646d3615ee38ef18f3490506'})
  //     // console.log('My Products Screen: ', res)
  //     if (res !== undefined) {
  //       setProducts(res)
  //     }
  //   }

  //   fectchProductsBySellerId()
  // }, [])

  return (
    <StoreItems products={products.filter(product => product.sellerId === '646d3615ee38ef18f3490506')} />
  )
}
