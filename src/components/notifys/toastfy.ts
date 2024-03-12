import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message : string) => {
    toast.success(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

export const notifyError = (message : string) => {
    toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}