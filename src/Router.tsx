import { Route, Routes } from 'react-router-dom';
import { DefaultLayouts } from './layouts/DefaultLayouts';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pedidos" element={<Order />} />
      </Route>
    </Routes>
  );
}
