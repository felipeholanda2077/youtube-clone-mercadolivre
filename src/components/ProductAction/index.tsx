import { ReactNode } from 'react';

import { Container } from './styles';

interface ProductActionProps {
  children: ReactNode;
}

export function ProductAction({ children }: ProductActionProps) {
  return (
    <Container>
      <h1>ProductAction</h1>
      {children}
    </Container>
  );
}
