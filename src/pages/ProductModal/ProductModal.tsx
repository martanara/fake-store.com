import React, { useState } from "react";

import Button from "components/Button";
import { StyledProductModal, StyledModalContent, StyledImgContainer, StyledProductImg, StyledDescription } from "./ProductModal.styles";
import { IProductCardProps } from "interfaces/interface";

const ProductModal = (props: IProductCardProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            {modalOpen && (
                <StyledProductModal>
                    <StyledModalContent>
                        <h2>{props.title}</h2>
                        <StyledImgContainer>
                            <StyledProductImg src={props.image} alt={props.title} />
                        </StyledImgContainer>
                            <StyledDescription><p>{props.description}</p></StyledDescription>
                        <p>$ {props.price}</p>
                        <Button onClick={toggleModal}>{"Close"}</Button>
                    </StyledModalContent>
                </StyledProductModal>
            )}
            <Button onClick={toggleModal}>{"More info"}</Button>
        </React.Fragment>
    );
};

export default ProductModal;
