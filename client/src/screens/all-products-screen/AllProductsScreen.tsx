import React, { useEffect, useState } from 'react'
import StoreItems from '../../components/store-items/StoreItems';

import mock from '../../mock-data/mock.json'
import { Product } from '../../models/models'
import { getAllProducts } from '../../services/products-service';

export default function AllProductsScreen() {

  // const data = JSON.parse(JSON.stringify(mock))
  // const products: Product[] = data.products;

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    const fetchAllProducts = async () => {
      const res = await getAllProducts()
      console.log('All Products Screen: ', res)
      if (res !== undefined) {
        setProducts(res)
      }
    }

    fetchAllProducts()
  }, [])

  return (
    <StoreItems products={products} />
  )
}
