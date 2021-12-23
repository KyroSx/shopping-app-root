import { addProduct } from '@/ui/hooks/useCart/functions/addProduct';
import { updateCorrectProduct } from '@/ui/hooks/useCart/functions/updateCorrectProduct';

export const addProductToCart = updateCorrectProduct(addProduct);
