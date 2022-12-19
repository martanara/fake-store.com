import React, { useEffect, useState } from "react";

import Heading from "components/Heading";
import ProductCard from "components/ProductCard";
import { getSortedList } from "utils/getSortedList";
import { IProduct } from "interfaces";
import { 
    StyledProductsWrapper, 
    StyledSelect 
} from "./Products.styles";

const Products = () => {
    const [productList, setProductList] = useState<IProduct[]>([]);

    const getProductList = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProductList(json));
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <React.Fragment>
            <Heading>Our products</Heading>
            <StyledSelect>
                <label htmlFor="products">Sort products by name:</label>
                <select
                    name="products"
                    id="products"
                    onChange={(event) => setProductList(getSortedList(productList, event.target.value, "title"))}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </StyledSelect>
            <StyledProductsWrapper>
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </StyledProductsWrapper>
        </React.Fragment>
    );
};

export default Products;
