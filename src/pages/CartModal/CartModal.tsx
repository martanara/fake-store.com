import { useAppContext } from "context/context";
import React, { useEffect } from "react";

import { StyledProductModal, StyledModalContent } from "./CartModal.styles";

const CartModal = () => {
    const { cartProducts, getTotalPrice, totalPrice } = useAppContext();

    useEffect(() => {
        getTotalPrice()
    }, [getTotalPrice]);

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
                    <p>Total price: {totalPrice}</p>
                </StyledModalContent>
            </StyledProductModal>
        </React.Fragment>
    );
};

export default CartModal;
