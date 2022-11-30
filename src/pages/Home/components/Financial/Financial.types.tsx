import { ProductsInCart, Voucher } from '@/types';

export interface FinancialProps {
  products: ProductsInCart;
  voucher: Voucher | null;
}
