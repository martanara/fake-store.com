import React, { useEffect, useState } from "react";

import { useAppContext } from "context/context";
import Heading from "components/Heading";
import ProductCard from "pages/ProductCard";
import { StyledProductsContainer } from "./Products.styles";
import { getSortedList } from "utils/getSortedList";

interface IProductsList {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
}

const Products = () => {
    const { userToken } = useAppContext();

    const [productList, setProductList] = useState<IProductsList[]>([]);

    const getProductList = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProductList(json));
    };

    useEffect(() => {
        getProductList();
    }, []);

    if (!userToken) return <Heading>Please log in</Heading>;

    return (
        <React.Fragment>
            <Heading>Our products</Heading>
            <label htmlFor="products">Sort products by name:</label>
            <select
                name="products"
                id="products"
                onChange={(event) => setProductList(getSortedList(productList, event.target.value, "title"))}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
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
