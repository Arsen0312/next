import cls from "./Modal.module.scss";
import React, { forwardRef } from "react";
import CloseIcon from "@/assets/CloseIcon";

interface TModalProps {
    children: React.ReactNode;
    closeModal: () => void;
}

const Modal = forwardRef<HTMLDivElement, TModalProps>(({ children, closeModal }, ref) => {

    return (
        <div className={cls.main}>
            <div ref={ref} className={cls.contentModal}>
                <button className={cls.closeBtn} onClick={() => closeModal()}>
                    <CloseIcon/>
                </button>
                {children}
            </div>
        </div>
    );
});

Modal.displayName = "Modal";

export default Modal;