import React from "react";

import Button from "components/Button";
import { 
    StyledProductCard, 
    StyledImgContainer, 
    StyledProductImg, 
    StyledTitle, 
    StyledButtons 
} from "./ProductCard.styles";
import { IProductCardProps } from "interfaces/interface";
import ProductModal from "pages/ProductModal";

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
            <StyledButtons>
                <Button>{"Add to cart"}</Button>
                <ProductModal 
                    {...props} 
                />
            </StyledButtons>
        </StyledProductCard>
    );
};

export default ProductCard;
