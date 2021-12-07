import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

import { DeleteListModal, AddListModal, EditListModal } from './modalTypes';

const Modal = ({ target, isOpen, onClose, children, setIsOpen, type, formData }) => {
    if (!isOpen) return null;
    let classes = "modal fade ";
    classes += isOpen ? 'show' : '';

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    };

    return ReactDOM.createPortal(
        <>
            <div className={classes} id="confirmModal" aria-hidden="true" style={OVERLAY_STYLES}>
                {type === 'edit-modal' ? <EditListModal formData={formData} onClose={onClose} target={target} setIsOpen={setIsOpen} /> : type === 'delete-modal' ? <DeleteListModal onClose={onClose} target={target} setIsOpen={setIsOpen} /> : <AddListModal />}
            </div>
        </>,
        document.getElementById('app-modal')
    );
};

export default Modal;