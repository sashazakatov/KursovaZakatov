import { useEffect } from 'react'
import { createPortal } from 'react-dom'
// import PropTypes from "prop-types";
import css from './Modal.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toggle } from 'store/openModalSlice'

const modaleRoot = document.querySelector('#modal-root')

const Modal = ({ children }) => {
    const dispatch = useDispatch()

    const handleKeydown = e => {
        if (e.code === 'Escape') {
            dispatch(toggle(false));
        }
    };
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            dispatch(toggle(false));
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
                    onClick={() => dispatch(toggle(false))}
                >
                    <AiOutlineClose/>
                </button>
                { children }
            </div>
        </div>,
        modaleRoot)
}

export default Modal;