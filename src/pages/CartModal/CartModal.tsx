import React from "react";

import Button from "components/Button";
import { StyledProductModal, StyledModalContent } from "./CartModal.styles";

const CartModal = () => {
    return (
        <React.Fragment>
                <StyledProductModal>
                    <StyledModalContent>
                        Cart
                    </StyledModalContent>
                </StyledProductModal>
        </React.Fragment>
    );
};

export default CartModal;
