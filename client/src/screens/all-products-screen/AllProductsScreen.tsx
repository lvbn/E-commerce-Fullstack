import React from 'react'
import StoreItems from '../../components/store-items/StoreItems';

import mock from '../../mock-data/mock.json'
import { Product } from '../../models/models'

export default function AllProductsScreen() {

  const data = JSON.parse(JSON.stringify(mock))
  const products: Product[] = data.products;

  return (
    <StoreItems products={products} />
  )
}
