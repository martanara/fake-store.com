import { useAppContext } from "context/context";
import React, { useEffect } from "react";

import { StyledCartModal, StyledModalContent, StyledList, StyledParagraph, StyledHeader, StyledListItem } from "./CartModal.styles";

const CartModal = () => {
    const { cartProducts, getTotalPrice, totalPrice } = useAppContext();

    useEffect(() => {
        getTotalPrice()
    }, [getTotalPrice]);

    return (
        <React.Fragment>
            <StyledCartModal>
                <StyledModalContent>
                    <h3>Your products:</h3>
                    <StyledList>
                        {cartProducts.map((product) => (
                            <StyledListItem key={product.item.id}>
                                <StyledHeader>{product.item.title}</StyledHeader> 
                                <StyledParagraph>price: &#36;{product.item.price}</StyledParagraph>
                                <StyledParagraph>quantity: {product.quantity}</StyledParagraph>
                            </StyledListItem>
                        ))}
                    </StyledList>
                    <p>Total price: &#36;{totalPrice.toFixed(2)}</p>
                </StyledModalContent>
            </StyledCartModal>
        </React.Fragment>
    );
};

export default CartModal;
