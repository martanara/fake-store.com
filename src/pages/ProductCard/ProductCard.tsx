import React, { useState } from "react";

import Button from "components/Button";
import { StyledProductCard, StyledImgContainer, StyledProductImg, StyledTitle, StyledButtons } from "./ProductCard.styles";
import ProductModal from "pages/ProductModal";
import { IProduct } from "interfaces";
import { useAppContext } from "context/context";

export interface IProductCardProps {
    product: IProduct;
}

const ProductCard = (props: IProductCardProps) => {
    const { product } = props;

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { cartProducts, setCartProducts } = useAppContext();

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    const getProductById = (id: any) => {
        return cartProducts.find((p: any) => p.item.id === id);
    };

    const addToCart = (item: any) => {
        const existingProduct = getProductById(item.id);
       
        let newState: any = [];

        if (existingProduct) {
            newState = cartProducts.map((product: any) => {
                if (product.item.id === existingProduct.item.id) {
                    return {
                        item,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
            setCartProducts(newState);
        } else {
            setCartProducts([...cartProducts, { item, quantity: 1 }]);
        } 
    };

    console.log(cartProducts);

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
