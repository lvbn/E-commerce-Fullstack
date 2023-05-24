import { useEffect, useState } from 'react';
import StoreItems from '../../components/store-items/StoreItems';

import { getProductsBySellerId } from '../../services/products-service';

import { Product } from '../../models/models';

export default function MyProductsScreen() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    const fectchProductsBySellerId = async () => {
      const res = await getProductsBySellerId({sellerId: '646d3615ee38ef18f3490506'})
      // console.log('My Products Screen: ', res)
      if (res !== undefined) {
        setProducts(res)
      }
    }

    fectchProductsBySellerId()
  }, [])

  return (
    <StoreItems products={products} />
  )
}
