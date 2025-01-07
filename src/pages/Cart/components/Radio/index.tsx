import { forwardRef, type InputHTMLAttributes, type LegacyRef } from 'react';
import { PaymentButtonContainer } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};
export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <PaymentButtonContainer data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </PaymentButtonContainer>
  );
});
