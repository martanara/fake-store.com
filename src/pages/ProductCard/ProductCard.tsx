import React, { useState } from "react";

import Button from "components/Button";
import { StyledProductCard, StyledImgContainer, StyledProductImg, StyledTitle, StyledButtons } from "./ProductCard.styles";
import ProductModal from "pages/ProductModal";

export interface IProductCardProps {
    title: string;
    image: string;
    price: number;
    description: string;
}

const ProductCard = (props: IProductCardProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <StyledProductCard>
            <StyledTitle title={props.title}>{props.title}</StyledTitle>
            <StyledImgContainer>
                <StyledProductImg src={props.image} alt={props.title} />
            </StyledImgContainer>
            <p>&#36; {props.price}</p>
            <StyledButtons>
                <Button>Add to cart</Button>
                <Button onClick={toggleModal}>More info</Button>
                {modalOpen ? (
                    <ProductModal
                        title={props.title}
                        image={props.image}
                        price={props.price}
                        description={props.description}
                        onClose={toggleModal}
                    />
                ) : null}
            </StyledButtons>
        </StyledProductCard>
    );
};

export default ProductCard;
