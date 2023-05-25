import { useEffect } from 'react'
import StoreItems from '../../components/store-items/StoreItems';

// import mock from '../../mock-data/mock.json'
import { Product } from '../../models/models'
import { getAllProducts } from '../../services/products-service';
import { useProductsSlice } from '../../zustand/ProductsSlice';

export default function AllProductsScreen() {

  // const data = JSON.parse(JSON.stringify(mock))
  // const products: Product[] = data.products;

  const addItem = useProductsSlice((state) => state.addItem)
  const products = useProductsSlice((state) => state.products)

  // const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    const fetchAllProducts = async () => {
      const res = await getAllProducts()
      // console.log('All Products Screen: ', res)
      if (res !== undefined) {
        res.forEach((product: Product) => {
          addItem(product)
        })
        // console.log(products)
      }
    }

    fetchAllProducts()
  }, [])

  // console.log('All products Screen: ', products)
  return (
    // <StoreItems products={products} />
    <StoreItems products={products} />
  )
}
