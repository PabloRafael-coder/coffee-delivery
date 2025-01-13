import { forwardRef, type InputHTMLAttributes } from 'react';
import { PaymentButtonContainer } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean;
}

export const Radio = forwardRef<HTMLInputElement, Props>(function Radio(
  { children, isSelected, ...rest },
  ref,
) {
  return (
    <PaymentButtonContainer data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </PaymentButtonContainer>
  );
});
