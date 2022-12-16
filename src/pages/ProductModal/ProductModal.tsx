import React, { useState } from "react";

import Button from "components/Button";

const ProductModal = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen((prevState) => !prevState);
    };

    return <div>{modalOpen ? <>Modal</> : <Button onClick={toggleModal}>{"More info"}</Button>}</div>;
};

export default ProductModal;
