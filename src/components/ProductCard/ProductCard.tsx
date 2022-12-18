import React, { useState } from "react";

import { useAppContext } from "context/context";
import Button from "components/Button";
import ProductModal from "components/ProductModal";
import { IProduct } from "interfaces";
import { 
    StyledProductCard, 
    StyledImgWrapper, 
    StyledProductImg, 
    StyledTitle, 
    StyledButtons 
} from "./ProductCard.styles";

export interface IProductCardProps {
    product: IProduct;
}

const ProductCard = (props: IProductCardProps) => {
    const { addToCart } = useAppContext();

    const { product } = props;

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <StyledProductCard>
            <StyledTitle title={product.title}>{product.title}</StyledTitle>
            <StyledImgWrapper>
                <StyledProductImg src={product.image} alt={product.title} />
            </StyledImgWrapper>
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
