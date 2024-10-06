import cls from "./Modal.module.scss";
import React from "react";

type ModalProps = {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
    if (!show) return null;

    return (
        <div className={cls.modalOverlay} onClick={onClose}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
