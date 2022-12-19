import React, { useEffect } from "react";

import { useAppContext } from "context/context";
import {
    StyledCartModal,
    StyledModalContent,
    StyledList,
    StyledParagraph,
    StyledHeader,
    StyledListItem,
    StyledIconButton,
    StyledSection
} from "./CartModal.styles";

const CartModal = () => {
    const { cartProducts, getTotalPrice, totalPrice, removeFromCart } = useAppContext();

    useEffect(() => {
        getTotalPrice();
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
                                <StyledSection>
                                    <StyledParagraph>price: &#36;{product.item.price}</StyledParagraph>
                                    <StyledParagraph>quantity: {product.quantity}</StyledParagraph>
                                    <StyledIconButton icon={"xmark"} onClick={() => removeFromCart(product)} />
                                </StyledSection>
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
