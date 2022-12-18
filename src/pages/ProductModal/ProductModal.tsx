import React from "react";

import Button from "components/Button";
import { StyledProductModal, StyledModalContent, StyledImgWrapper, StyledProductImg, StyledDescription, StyledButtons } from "./ProductModal.styles";
import { IProduct } from "interfaces";
import { useAppContext } from "context/context";

export interface IProductModalProps {
    product: IProduct;
    onClose: () => void;
}

const ProductModal = (props: IProductModalProps) => {
    const { product, onClose } = props;

    const { addToCart } = useAppContext();

    return (
        <StyledProductModal>
            <StyledModalContent>
                <h2>{product.title}</h2>
                <StyledImgWrapper>
                    <StyledProductImg src={product.image} alt={product.title} />
                </StyledImgWrapper>
                <StyledDescription>{product.description}</StyledDescription>
                <p>&#36; {product.price}</p>
                <StyledButtons>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={() => {
                        addToCart(product);
                        onClose();
                    }}>Add to cart</Button>
                </StyledButtons>
            </StyledModalContent>
        </StyledProductModal>
    );
};

export default ProductModal;
