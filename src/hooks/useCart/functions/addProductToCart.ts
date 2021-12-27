import { addProduct } from '@/hooks/useCart/functions/addProduct';
import { updateCorrectProduct } from '@/hooks/useCart/functions/updateCorrectProduct';

export const addProductToCart = updateCorrectProduct(addProduct);
