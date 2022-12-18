import { useAppContext } from "context/context";
import React from "react";

import { StyledProductModal, StyledModalContent } from "./CartModal.styles";

const CartModal = () => {
    const { cartProducts } = useAppContext();

    const getTotalPrice = () => {
        let totalPrice= 0;
        cartProducts.forEach((product) =>{
            totalPrice += (product.item.price * product.quantity);
        });

        return totalPrice;
    }

    return (
        <React.Fragment>
            <StyledProductModal>
                <StyledModalContent>
                    <ul>
                        {cartProducts.map((product) => (
                            <li key={product.item.id}>
                                <p>name: {product.item.title}</p> 
                                <p>price: {product.item.price}</p>
                                <p>quantity: {product.quantity}</p>
                            </li>
                        ))}
                    </ul>
                    <p>Total price: {getTotalPrice()}</p>
                </StyledModalContent>
            </StyledProductModal>
        </React.Fragment>
    );
};

export default CartModal;
