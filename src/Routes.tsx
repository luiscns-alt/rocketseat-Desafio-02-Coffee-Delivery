import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CoffeeCheckout } from './pages/CoffeeCheckout'
import { CoffeeSuccess } from './pages/CoffeeSuccess'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<CoffeeCheckout />} />
        <Route path="/orderConfirmed" element={<CoffeeSuccess />} />
      </Route>
    </Routes>
  )
}
