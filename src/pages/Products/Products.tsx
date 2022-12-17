import React, { ChangeEvent, useEffect, useState } from "react";

import ProductCard from "pages/ProductCard";
import Heading from "components/Heading";

import { StyledProductsContainer } from "./Products.styles";
import { useAppContext } from "context/context";

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
    const [sortType, setSortType] = useState<string>("asc");

    useEffect(() => {
        getProductList();
    }, []);

    useEffect(() => {
        const sortProducts = (type: string) => {
            if (type === "desc") {
                return setProductList(
                    productList.sort((a, b) => {
                        if (a.title < b.title) {
                            return -1;
                        }
                        if (a.title > b.title) {
                            return 1;
                        }
                        return 0;
                    })
                );
            }

            return setProductList(
                productList.sort((a, b) => {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (a.title < b.title) {
                        return 1;
                    }
                    return 0;
                })
            );
        };

        sortProducts(sortType);
    }, [productList, sortType]);

    const getProductList = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProductList(json));
    };

    if (!userToken) return <Heading>Please log in</Heading>;

    return (
        <React.Fragment>
            <Heading>Our products</Heading>
            <label htmlFor="products">Sort products by name:</label>
            <select name="products" id="products" onChange={(e) => setSortType(e.target.value)}>
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
