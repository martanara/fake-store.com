import React, { createContext, ReactNode, useContext, useState } from "react";
import { ICartProduct, IProduct } from "interfaces";

export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;

    const [userToken, setUserToken] = useState<string>("");
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);

    const getProductById = (id: number) => {
        return cartProducts.find((product: any) => product.item.id === id);
    };

    const addToCart = (item: IProduct) => {
        const existingProduct = getProductById(item.id);

        let newState: ICartProduct[] = [];

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
        getTotalPrice();
        getTotalQuantity();

        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    const removeFromCart = (cartItem: ICartProduct) => {
        const newState = cartProducts.filter(product => product.item.id !== cartItem.item.id);

        setCartProducts(newState);
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartProducts.forEach((product) => {
            totalPrice += product.item.price * product.quantity;
        });

        setTotalPrice(totalPrice);
    };

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cartProducts.forEach((product) => {
            totalQuantity += product.quantity;
        });

        setTotalQuantity(totalQuantity);
    };

    return (
        <AppContext.Provider
            value={{
                userToken,
                setUserToken,
                cartProducts,
                setCartProducts,
                getProductById,
                addToCart,
                getTotalPrice,
                totalPrice,
                getTotalQuantity,
                totalQuantity,
                removeFromCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const {
        userToken,
        setUserToken,
        cartProducts,
        setCartProducts,
        getProductById,
        addToCart,
        totalPrice,
        getTotalPrice,
        totalQuantity,
        getTotalQuantity,
        removeFromCart
    } = useContext(AppContext);

    return {
        userToken,
        setUserToken,
        cartProducts,
        setCartProducts,
        getProductById,
        addToCart,
        getTotalPrice,
        totalPrice,
        totalQuantity,
        getTotalQuantity,
        removeFromCart
    };
};

interface IProps {
    userToken: string;
    setUserToken: (arg: string) => void;
    cartProducts: ICartProduct[];
    setCartProducts: (arg: ICartProduct[]) => void;
    getProductById: (arg: number) => void;
    addToCart: (arg: IProduct) => void;
    getTotalPrice: () => void;
    totalPrice: number;
    totalQuantity: number;
    getTotalQuantity: () => void;
    removeFromCart: (arg: ICartProduct) => void; 
}
