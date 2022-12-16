import React from "react";

import Button from "components/Button";
import { StyledProductCard, StyledImgContainer, StyledProductImg, StyledTitle } from "./ProductCard.styles";

interface IProductCardProps {
    title: string;
    image: string;
    price: number;
    description: string;
}

const ProductCard = (props: IProductCardProps) => {
    return (
        <StyledProductCard>
            <StyledTitle>
                <h3>{props.title}</h3>
            </StyledTitle>
            <StyledImgContainer>
                <StyledProductImg src={props.image} alt={props.title} />
            </StyledImgContainer>
            <p>$ {props.price}</p>
            <Button>{"Add to cart"}</Button>
        </StyledProductCard>
    );
};

export default ProductCard;
