import type { Icon } from '@phosphor-icons/react';
import { HomePurchaseBenefits, type ColorVariant } from './styles';

interface ColorPurchaseProps {
  text: string;
  variant: ColorVariant;
  Icon: Icon;
}

export function PurchaseBenefits({ text, Icon, variant }: ColorPurchaseProps) {
  return (
    <HomePurchaseBenefits variant={variant}>
      <div>
        <Icon weight="fill" />
      </div>
      <p>{text}</p>
    </HomePurchaseBenefits>
  );
}
