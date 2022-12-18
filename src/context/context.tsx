import React, { createContext, ReactNode, useContext, useState } from "react";
import { ICartProduct } from "interfaces";

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
        getTotalPrice();
        getTotalQuantity(); 
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        cartProducts.forEach((product) =>{
            totalPrice += (product.item.price * product.quantity);
        });

        setTotalPrice(totalPrice);
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cartProducts.forEach((product) =>{
            totalQuantity += (product.quantity);
        });

        setTotalQuantity(totalQuantity);
    }

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
                totalQuantity
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { userToken, 
        setUserToken, 
        cartProducts, 
        setCartProducts,
        getProductById,
        addToCart,
        totalPrice,
        getTotalPrice,
        totalQuantity,
        getTotalQuantity,
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
        getTotalQuantity
    };
};

interface IProps {
    userToken: string;
    setUserToken: (arg: string) => void;
    cartProducts: ICartProduct[];
    setCartProducts: (arg: any) => void;
    getProductById: (arg: any) => void;
    addToCart: (arg: any) => void;
    getTotalPrice: () => void;
    totalPrice: number;
    totalQuantity: number;
    getTotalQuantity: () => void;
}
