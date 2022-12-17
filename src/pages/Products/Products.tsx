import React, { useEffect, useState } from "react";

import ProductCard from "pages/ProductCard";
import Heading from "components/Heading";

import { StyledProductsContainer } from "./Products.styles";

interface IProductsList {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
}

interface IProps {
    userToken?: string;
}

const Products = (props: IProps) => {
    const { userToken } = props;

    const [productList, setProductList] = useState<IProductsList[]>([]);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProductList(json));
    };

    if (!userToken) return <Heading>Please log in</Heading>

    return (
        <React.Fragment>
            <Heading>Our products</Heading>
            <StyledProductsContainer>
                {productList.map((product) => (
                    <ProductCard 
                        key={product.id}
                        title={product.title} 
                        image={product.image} 
                        price={product.price} 
                        description={product.description} 
                    />
                ))}
            </StyledProductsContainer>
        </React.Fragment>
    );
};

export default Products;
