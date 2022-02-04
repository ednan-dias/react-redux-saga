import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { useCallback } from "react";

interface CatalogItemProps {
  product: IProduct;
}
export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
}
