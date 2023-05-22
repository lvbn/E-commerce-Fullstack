import styles from './MyStoreWrapper.module.css'
import Sidebar from '../side-bar/Sidebar.tsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function MyStoreWrapper() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/mystore/products')
  }, [])

  return (
    <div className={styles.container}>
      <Sidebar />
      <div
        id="detail"
        onClick={() => {

        }}
      >
        <Outlet />
      </div>
    </div>
  )
}
