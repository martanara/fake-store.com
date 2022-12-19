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

const CartModal = (props: any) => {
    const { cartProducts, getTotalPrice, totalPrice, removeFromCart } = useAppContext();
    const { refs } = props;

    useEffect(() => {
        getTotalPrice();
    }, [getTotalPrice]);

    return (
        <React.Fragment>
            <StyledCartModal ref={refs}>
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
