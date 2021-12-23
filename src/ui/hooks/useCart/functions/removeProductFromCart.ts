import { updateCorrectProduct } from '@/ui/hooks/useCart/functions/updateCorrectProduct';
import { removeProduct } from '@/ui/hooks/useCart/functions/removeProduct';

export const removeProductFromCart = updateCorrectProduct(removeProduct);
