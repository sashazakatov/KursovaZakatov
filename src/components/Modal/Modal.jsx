import { useEffect } from 'react'
import { createPortal } from 'react-dom'
// import PropTypes from "prop-types";
import css from './Modal.module.css'
import { AiOutlineClose } from "react-icons/ai";

const modaleRoot = document.querySelector('#modal-root')

const Modal = ({onClose, largeImageURL, tag}) => { 
    const handleKeydown = e => {
        if (e.code === 'Escape') {
          onClose(false);
        }
    };
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose(false);
        }
    };
    useEffect(()=>{
        window.addEventListener('keydown', handleKeydown);
        return ()=>window.removeEventListener('keydown', handleKeydown);
    })

    return createPortal(
        <div onClick={handleBackdropClick} className={css.Overlay}>
            <div className={css.Modal}>
                <button
                    className={css.closeButton}
                    onClick={() => onClose(false)}
                >
                    <AiOutlineClose/>
                </button>
                <p>Text</p>
            </div>
        </div>,
        modaleRoot)
}

// Modal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired, 
//     tag: PropTypes.string.isRequired,
// }

export default Modal;