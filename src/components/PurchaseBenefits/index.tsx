import type { IconProps } from '@phosphor-icons/react';
import { HomePurchaseBenefits, type ColorVariant } from './styles';

interface PurchaseBenefitsProps {
  text: string;
  variant: ColorVariant;
  Icon: React.ComponentType<IconProps>;
}

export function PurchaseBenefits({
  text,
  Icon,
  variant,
}: PurchaseBenefitsProps) {
  return (
    <HomePurchaseBenefits variant={variant}>
      <div>
        <Icon weight="fill" />
      </div>
      <p>{text}</p>
    </HomePurchaseBenefits>
  );
}
