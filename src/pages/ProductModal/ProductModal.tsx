import React from "react";

import Button from "components/Button";
import { StyledProductModal, StyledModalContent, StyledImgWrapper, StyledProductImg, StyledDescription } from "./ProductModal.styles";

export interface IProductModalProps {
    title: string;
    image: string;
    price: number;
    description: string;
    onClose: () => void;
}

const ProductModal = (props: IProductModalProps) => {
    return (
        <StyledProductModal>
            <StyledModalContent>
                <h2>{props.title}</h2>
                <StyledImgWrapper>
                    <StyledProductImg src={props.image} alt={props.title} />
                </StyledImgWrapper>
                <StyledDescription>{props.description}</StyledDescription>
                <p>&#36; {props.price}</p>
                <Button onClick={props.onClose}>Close</Button>
            </StyledModalContent>
        </StyledProductModal>
    );
};

export default ProductModal;
