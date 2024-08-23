import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.tsx'
import ProductTable from './ProductTable.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Counter/>
      <ProductTable/>
    </div>
  </StrictMode>,
)
