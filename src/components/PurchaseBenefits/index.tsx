import { ShoppingCart } from '@phosphor-icons/react';
import { HomePurchaseBenefits } from './styles';

export function PurchaseBenefits() {
  return (
    <HomePurchaseBenefits>
      <div>
        <ShoppingCart weight="fill" />
      </div>
      <p>Compra simples e segura</p>
    </HomePurchaseBenefits>
  );
}
