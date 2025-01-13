import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from 'react';
import { Container } from './styles';
import type { FieldError } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  containerPropsStyle?: HTMLAttributes<HTMLDivElement>;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { placeholder, containerPropsStyle, error, ...rest },
  ref,
) {
  return (
    <Container {...containerPropsStyle}>
      <input type="text" {...rest} ref={ref} placeholder={placeholder} />
      <span>{error?.message}</span>
    </Container>
  );
});
