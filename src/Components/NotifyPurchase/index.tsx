import React, { useState, FC } from 'react';
import './index.scss'

const NotifyPurchase:FC = () => {

    const [open, setOpen] = useState(true);

    const closeMessage = () => setOpen(false)

    return (
        <div className={`notify-purchase ${open?'open':'close'}`}>
            <div className={`notify-purchase__container`}>
                <p className='notify-purchase__message'>
                    Purchase services <a target='_blank' rel='noopener' href='https://api.WhatsApp.com/send?phone=3147187187' className='notify-purchase__link link'>(Click here)</a>
                </p>
                <div onClick={closeMessage} className='notify-purchase__closeIcon'>
                    <svg width="28" height="28" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.0347 12.1594L22.9023 20.2899L14.7718 12.1594L12.0616 14.8695L20.1921 23L12.0616 31.1305L14.7718 33.8407L22.9023 25.7102L31.0347 33.8407L33.7448 31.1305L25.6143 23L33.7448 14.8695L31.0347 12.1594Z" fill="#3F97E9"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default NotifyPurchase;
