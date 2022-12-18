import React from "react";

import Button from "components/Button";
import { StyledProductModal, StyledModalContent, StyledImgWrapper, StyledProductImg, StyledDescription } from "./ProductModal.styles";
import { IProduct } from "interfaces";

export interface IProductModalProps {
    product: IProduct;
    onClose: () => void;
}

const ProductModal = (props: IProductModalProps) => {
    const { product, onClose } = props;

    return (
        <StyledProductModal>
            <StyledModalContent>
                <h2>{product.title}</h2>
                <StyledImgWrapper>
                    <StyledProductImg src={product.image} alt={product.title} />
                </StyledImgWrapper>
                <StyledDescription>{product.description}</StyledDescription>
                <p>&#36; {product.price}</p>
                <Button onClick={onClose}>Close</Button>
            </StyledModalContent>
        </StyledProductModal>
    );
};

export default ProductModal;
