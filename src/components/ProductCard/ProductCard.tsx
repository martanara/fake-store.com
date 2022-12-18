import React, { useState } from "react";

import Button from "components/Button";
import { StyledProductCard, StyledImgContainer, StyledProductImg, StyledTitle, StyledButtons } from "./ProductCard.styles";
import ProductModal from "components/ProductModal";
import { IProduct } from "interfaces";
import { useAppContext } from "context/context";

export interface IProductCardProps {
    product: IProduct;
}

const ProductCard = (props: IProductCardProps) => {
    const { product } = props;

    const { addToCart } = useAppContext();
    
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <StyledProductCard>
            <StyledTitle title={product.title}>{product.title}</StyledTitle>
            <StyledImgContainer>
                <StyledProductImg src={product.image} alt={product.title} />
            </StyledImgContainer>
            <p>&#36; {product.price}</p>
            <StyledButtons>
                <Button onClick={() => addToCart(product)}>Add to cart</Button>
                <Button onClick={toggleModal}>More info</Button>
                {modalOpen ? <ProductModal product={product} onClose={toggleModal} /> : null}
            </StyledButtons>
        </StyledProductCard>
    );
};

export default ProductCard;
