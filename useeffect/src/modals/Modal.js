import ReactDOM from 'react-dom';
import './modal.css';

import { DeleteListModal, AddListModal } from './modalTypes';

const Modal = ({ props, children }) => {

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    };

    const closeModal = (target) => {
        console.log('click');
    };

    return ReactDOM.createPortal(
        <>
            <div className="modal fade" id="exampleModal" aria-hidden="true" style={OVERLAY_STYLES}>
                <AddListModal />
            </div>
        </>,
        document.getElementById('app-modal')
    );
};

export default Modal;