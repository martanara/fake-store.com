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

    return (
        <AppContext.Provider
            value={{
                userToken,
                setUserToken,
                cartProducts,
                setCartProducts,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { userToken, setUserToken, cartProducts, setCartProducts } = useContext(AppContext);

    return {
        userToken,
        setUserToken,
        cartProducts,
        setCartProducts,
    };
};

interface IProps {
    userToken: string;
    setUserToken: (arg: string) => void;
    cartProducts: ICartProduct[];
    setCartProducts: (arg: any) => void;
}
