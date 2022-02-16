import React, { FC } from 'react'

const Header:FC = () => {
  return (
    <>
        <header id="header" role="banner">
            <div className="skip-bar"><a id="skipToContent" href="#content">Skip to content</a><a id="skipToAccHelp" href="#accHelp">Skip to accessibility help</a></div>
            <div className="cookie-bar cookie-bar--type-manage" role="status">
                <div className="cookie-bar__wrap" style={{display: "none"}}>
                    <div className="cookie-bar__msg-wrap">
                        <div className="cookie-bar__msg">
                            <p className="cookie-bar__title">Samsung y Cookies</p>
                            <p className="cookie-bar__desc">Este sitio utiliza cookies. Al hacer clic en ACEPTAR o continuar navegando en la página, estás aceptando nuestro uso de cookies.<a href="/pe/info/privacy/">Encuentra más info aquí</a></p><button className="cookie-bar__desc-read-more-btn">Leer más</button>
                        </div>
                        <div className="cookie-bar__manage"><a className="cta cta--contained cta--emphasis" href="javascript:void(0)" title="ACEPTAR" an-tr="cod01_cookie bar-home-cta-button" an-ca="other interaction" an-ac="cookie bar:accept" an-la="cookie bar:accept"> ACEPTAR</a></div>
                    </div>
                    <div className="cookie-bar__select">
                        <div className="cookie-bar__select-text">
                            <p>Selecciona tu ubicación o idioma</p>
                        </div>
                        <div className="cookie-bar__select-ctas">
                            <div className="menu filled"><select className="menu__select" data-default-message="" tabIndex={-1} an-tr="cod01_cookie bar-home-cta-button" an-ca="other interaction" an-ac="cookie bar:choose your location" an-la="cookie bar:choose your location"></select><button className="menu__select-field" aria-haspopup="listbox" aria-expanded="false"><span className="menu__select-field-text"></span><svg className="menu__select-field-icon down" focusable="false">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                    </svg><svg className="menu__select-field-icon up" focusable="false">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M78.65 65.254L47.999 34.145l-30.65 31.109-5.699-5.615 36.349-36.892L84.35 59.639z"></path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="cookie-bar__close-wrap"><button className="cookie-bar__close cookie-bar__main-close" an-tr="cod01_cookie bar-home-cta-button" an-ca="other interaction" an-ac="cookie bar:close" an-la="cookie bar:close"><span className="hidden">cerrar</span><svg className="icon" focusable="false">
                                <path xmlns="http://www.w3.org/2000/svg" d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                            </svg></button></div>
                </div>
            </div>
        </header>
        <div className="gnb">
            <section className="epp-bar-wrap">
                <div className="epp-bar">
                    <div className="epp-bar-div">
                        <div className="epp-bar-logo"></div>
                        <div className="epp-bar-msg">Welcome to the<div className="epp-bar-username">!</div> Please enjoy our special offers for you</div>
                        <div className="benfit-wrap"><a className="benfit-wrap__benefits" href="/us/support/account/benefits/">MY BENEFITS</a><span className="benfit-wrap__gap"></span><a className="benfit-wrap__offers" href="/us/shop/all-deals/">SPECIAL OFFERS</a></div>
                    </div>
                </div>
            </section>
            <div className="gnb__dimmed">
                
            </div>
            <nav className="gnb__nav" role="navigation">
                <div className="gnb__bar">
                    <div className="gnb__bar-inner"><a className="gnb__logo" href="/pe/" an-tr="nv00_gnb--text-logo" an-ca="navigation" an-ac="gnb" an-la="logo"><span className="hidden">Samsung</span></a>
                        <div className="gnb__mobile-menu"><a className="gnb__cart-btn js-global-cart-btn js-has-carturl js-layer-open" href="//shop.samsung.com/pe/cart" role="button" data-div-id="#layerEmptyCart" an-tr="nv00_gnb—text-depth1" an-ca="navigation" an-ac="gnb" an-la="cart" data-cart-url="//shop.samsung.com/pe/cart"><span className="hidden">Cart</span><svg className="icon" id="cart-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                    <path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path>
                                </svg><span className="gnb__cart-in-number gnb-cart-count" aria-live="polite" style={{display:"none"}}></span></a><a className="gnb__search-btn gnb__search-btn-js" href="javascript:void(0)" aria-haspopup="true" role="button" an-tr="nv00_gnb--image-search" an-ca="navigation" an-ac="gnb" an-la="search"><span className="hidden">Búsqueda</span><svg className="icon" id="search-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                    <path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path>
                                </svg></a><a className="gnb__menu-btn js-gnb-menu-btn" href="javascript:void(0)" aria-haspopup="true" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:open"><span>Abrir menú</span><svg className="icon" id="menu-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                    <path d="M83 70v8H13v-8h70zm0-26v8H13v-8h70zm0-26v8H13v-8h70z"></path>
                                </svg></a></div>
                        <div className="gnb__menu-wrap">
                            <div className="gnb__depth1-container">
                                <div className="gnb__main">
                                    <ul className="gnb__depth1" role="menubar">
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/mobile/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="mobile"><span className="gnb__depth1-link-text">Mobile</span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="/pe/mobile/" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="mobile">Mobile</a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new"><span className="gnb__depth2-link-text">Novedades</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-s20/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:galaxy s20 series"><span className="gnb__depth3-link-text">Nueva Serie Galaxy S20</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-z-flip/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:glaxy z flip"><span className="gnb__depth3-link-text">Galaxy Z Flip</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/galaxy-buds-plus-r175/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:galaxy buds plus"><span className="gnb__depth3-link-text">Galaxy Buds+</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-s10/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:galaxy s10"><span className="gnb__depth3-link-text">Galaxy S10</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-a71-a715/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:galaxy a71"><span className="gnb__depth3-link-text">Galaxy A71</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/galaxy-watch-active2-r820/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:whats new:galaxy watch active2"><span className="gnb__depth3-link-text">Galaxy Watch Active2</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="18010000" data-group-code="18000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones"><span className="gnb__depth2-link-text">Smartphones</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-z-flip/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:galaxy z flip"><span className="gnb__depth3-link-text">Galaxy Z Flip</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-s/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:galaxy s"><span className="gnb__depth3-link-text">Galaxy S</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/galaxy-note/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:galaxy note"><span className="gnb__depth3-link-text">Galaxy Note</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//www.samsung.com/pe/smartphones/galaxy-a-series/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:galaxy a"><span className="gnb__depth3-link-text">Galaxy A</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?smartphones" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:accessories"><span className="gnb__depth3-link-text">Accessorios</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/smartphones/all-smartphones/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:smartphones:see all"><span className="gnb__depth3-link-text">Ver Todo</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="18020000" data-group-code="18000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets"><span className="gnb__depth2-link-text">Tablets</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tablets/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tablets/galaxy-tab-s/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets:galaxy tab s"><span className="gnb__depth3-link-text">Galaxy Tab S</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tablets/galaxy-tab-a/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets:galaxy tab a"><span className="gnb__depth3-link-text">Galaxy Tab A</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?cover" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets:accessories"><span className="gnb__depth3-link-text">Accesorios</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tablets/all-tablets/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:tablets:see all"><span className="gnb__depth3-link-text">Ver Todo</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="18030000" data-group-code="18000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:watches"><span className="gnb__depth2-link-text">Watches</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/watches/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:watches:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/all-wearables/?smart-watch+galaxy-watch" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:watches:galaxy watch"><span className="gnb__depth3-link-text">Galaxy Watch</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/all-wearables/?smart-watch+fitness-band" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:watches:galaxy fit"><span className="gnb__depth3-link-text">Galaxy Fit</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?watches" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:watches:accessories"><span className="gnb__depth3-link-text">Accesorios</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/all-wearables/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:watches:see all"><span className="gnb__depth3-link-text">Ver Todo</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="18030000" data-group-code="18000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:audio"><span className="gnb__depth2-link-text">Audio</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-sound/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:audio:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/all-wearables/?galaxy-buds" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:audio:galaxy buds"><span className="gnb__depth3-link-text">Galaxy Buds</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?akg" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:audio:akg headphones"><span className="gnb__depth3-link-text">Audífonos AKG</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/wearables/all-wearables/?audio" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:audio:see all"><span className="gnb__depth3-link-text">Ver Todo</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="18060000" data-group-code="18000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories"><span className="gnb__depth2-link-text">Accesorios</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?smartphones" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories:smartphones accessories"><span className="gnb__depth3-link-text">Accesorios para Smartphones</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?tablets" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories:tablets accessories"><span className="gnb__depth3-link-text">Accesorios para Tablets</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/?watches" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories:watches accessories"><span className="gnb__depth3-link-text">Accesorios para Watches</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/mobile-accessories/all-mobile-accessories/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:accessories:see all"><span className="gnb__depth3-link-text">Ver Todo</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services"><span className="gnb__depth2-link-text">Apps & Servicios</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/galaxy-store/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:galaxy store"><span className="gnb__depth3-link-text">Galaxy Store</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/bixby/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:bixby"><span className="gnb__depth3-link-text">Bixby</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/samsung-health/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:samsung health"><span className="gnb__depth3-link-text">Samsung Health</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/samsung-dex/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:samsung dex"><span className="gnb__depth3-link-text">Samsung DeX</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/samsung-members/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:samsung members"><span className="gnb__depth3-link-text">Samsung Members</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/one-ui/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:one ui 2"><span className="gnb__depth3-link-text">One UI 2</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/smartthings/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:smartthings"><span className="gnb__depth3-link-text">SmartThings</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/apps/smart-switch/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="mobile:apps and services:smart switch"><span className="gnb__depth3-link-text">Smart Switch</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="gnb__feature-container"><a className="gnb__feature-container-link" href="/pe/smartphones/galaxy-s20/" an-tr="nv00_gnb--cta-feature" an-ca="navigation" an-ac="gnb" an-la="feature image:mobile:galaxy s20 series:learn more">
                                                            <div className="image"><img className="image__preview responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/624x624-without5G.jpg?$LazyLoad_Home_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/624x624-without5G.jpg?$LazyLoad_Home_JPG$" alt="Galaxy S20 series" /><img className="image__main responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/624x624-without5G.jpg?$330_330_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/624x624-without5G.jpg?$624_624_JPG$" alt="Galaxy S20 series" /></div>
                                                            <div className="gnb__feature-container-contents">
                                                                <p className="gnb__feature-container-description">Galaxy S20 series</p><a className="cta cta--underline cta--black" href="/pe/smartphones/galaxy-s20/">Conoce más</a>
                                                            </div>
                                                        </a></div><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/tvs/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="tv and av"><span className="gnb__depth1-link-text">TV & AV</span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="/pe/tvs/" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="tv and av">TV & AV</a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="tv and av:whats new"><span className="gnb__depth2-link-text">Novedades</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/qled-tv/highlights/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:whats new:2020 qled"><span className="gnb__depth3-link-text">2020 QLED</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="https://samsung.com.pe/super-big-tv/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:whats new:super big tv"><span className="gnb__depth3-link-text">Super Big TV</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-video/soundbar/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:whats new:soundbars 2020"><span className="gnb__depth3-link-text">Soundbars 2020</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/tv-buying-guide/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:whats new:all about tv"><span className="gnb__depth3-link-text">Todo Acerca de TV</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="19010000" data-group-code="19000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs"><span className="gnb__depth2-link-text">TVs</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?qled-8k" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:qled 8k"><span className="gnb__depth3-link-text">QLED 8K</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?qled-4k-tv" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:qled 4k"><span className="gnb__depth3-link-text">QLED 4K</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?the-frame" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:lifestyle"><span className="gnb__depth3-link-text">LifeStyle</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/crystal-uhd-tv/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:crystal uhd"><span className="gnb__depth3-link-text">Crystal UHD</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?uhd-tv" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:uhd"><span className="gnb__depth3-link-text">UHD</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?full-hd-tv" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:full hd hd"><span className="gnb__depth3-link-text">Full HD/HD</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tv-accessories/all-tv-accessories/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tvs:tv accessories"><span className="gnb__depth3-link-text">TV Accesorios</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="19010000" data-group-code="19000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="tv and av:lifestyle tvs"><span className="gnb__depth2-link-text">Lifestyle TVs</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?the-frame" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:lifestyle tvs:the frame"><span className="gnb__depth3-link-text">The Frame</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?accesorios" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:lifestyle tvs:accessories"><span className="gnb__depth3-link-text">Accesorios</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="19010000" data-group-code="19000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size"><span className="gnb__depth2-link-text">TV por Tamaño</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?60-or-more" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:70 inches or larger"><span className="gnb__depth3-link-text">70" o Más</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?60-or-more" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:65 inches"><span className="gnb__depth3-link-text">65"</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?5059" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:55 inches"><span className="gnb__depth3-link-text">55"</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?4049" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:43 inches"><span className="gnb__depth3-link-text">43"</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/?3039" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:32 inches or smaller"><span className="gnb__depth3-link-text">32" o Menos</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/tv-buying-guide/what-size-tv-should-i-get/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:what size tv should i get"><span className="gnb__depth3-link-text">¿Qué Tamaño de TV Debería Tener?</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/tvs/all-tvs/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:tv by size:all screen size tvs"><span className="gnb__depth3-link-text">Mira Todos</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="19020000" data-group-code="19000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="tv and av:sound devices"><span className="gnb__depth2-link-text">Equipos de Sonido</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-video/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:sound devices:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-video/all-audio-video/?all-in-one-soundbars" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:sound devices:all in one soundbars"><span className="gnb__depth3-link-text">Soundbars Todo en Uno</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-video/all-audio-video/?party-audio" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:sound devices:giga party audios"><span className="gnb__depth3-link-text">Torres de Sonido</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/audio-video/all-audio-video/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="tv and av:sound devices:see all"><span className="gnb__depth3-link-text">Mira Todos</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="gnb__feature-container"><a className="gnb__feature-container-link" href="/pe/tvs/qled-tv/highlights/" an-tr="nv00_gnb--cta-feature" an-ca="navigation" an-ac="gnb" an-la="feature image:tv and av:unrivaled qled 8k:learn more">
                                                            <div className="image"><img className="image__preview responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/2020-QLED-8K_624x624.jpg?$LazyLoad_Home_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/2020-QLED-8K_624x624.jpg?$LazyLoad_Home_JPG$" alt="QLED 8K" /><img className="image__main responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/2020-QLED-8K_624x624.jpg?$330_330_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/2020-QLED-8K_624x624.jpg?$624_624_JPG$" alt="QLED 8K" /></div>
                                                            <div className="gnb__feature-container-contents">
                                                                <p className="gnb__feature-container-description">QLED 8K</p><a className="cta cta--underline cta--black" href="/pe/tvs/qled-tv/highlights/">Conoce más</a>
                                                            </div>
                                                        </a></div><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/home-appliances/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="home appliances"><span className="gnb__depth1-link-text">Línea Blanca</span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="/pe/home-appliances/" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="home appliances">Línea Blanca</a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new"><span className="gnb__depth2-link-text">Novedades</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//www.samsung.com.pe/familyhub/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:family hub"><span className="gnb__depth3-link-text">Family Hub™</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//www.samsung.com.pe/flexdoor/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:flexdoor"><span className="gnb__depth3-link-text">Flex Door</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/addwash/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:addwash"><span className="gnb__depth3-link-text">Addwash™</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/blackedition/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:black edition"><span className="gnb__depth3-link-text">Black Edition</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//www.samsung.com.pe/premium-service/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:premium service"><span className="gnb__depth3-link-text">Premium Service</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/multi-device-experience/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:whats new:connected living"><span className="gnb__depth3-link-text">Tu Vida Conectada</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="07010000" data-group-code="07000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators"><span className="gnb__depth2-link-text">Refrigeradoras</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/french-door/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:french door"><span className="gnb__depth3-link-text">French Door</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/side-by-side/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:side by side"><span className="gnb__depth3-link-text">Side by Side</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/top-mount/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:top freezer"><span className="gnb__depth3-link-text">Top Freezer</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/bottom-freezer/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:bottom freezer"><span className="gnb__depth3-link-text">Bottom Freezer</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/refrigerators/all-refrigerators/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:refrigerators:see all"><span className="gnb__depth3-link-text">Mira Todas</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="07020000" data-group-code="07000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines"><span className="gnb__depth2-link-text">Lavadoras</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washers-and-dryers/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washing-machines/2-in-1/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:flex wash"><span className="gnb__depth3-link-text">Carga 2 en 1</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washing-machines/front-loader/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:front loader"><span className="gnb__depth3-link-text">Carga Frontal</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washing-machines/top-loader/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:top loader"><span className="gnb__depth3-link-text">Carga Superior</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washing-machines/dryer/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:dryer"><span className="gnb__depth3-link-text">Secadoras</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/washing-machines/all-washing-machines/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines:see all"><span className="gnb__depth3-link-text">Mira Todas</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="07020000" data-group-code="07000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:washing machines"><span className="gnb__depth2-link-text">Cocinas</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/ranges/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:ranges"><span className="gnb__depth3-link-text">Cocinas a gas</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/hobs/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:hobs"><span className="gnb__depth3-link-text">Encimera</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/ovens/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:ovens"><span className="gnb__depth3-link-text">Hornos eléctricos</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/hoods/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:hoods"><span className="gnb__depth3-link-text">Campanas</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/all-cooking-appliances/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:kitchens:see all"><span className="gnb__depth3-link-text">Mira Todas</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation" data-type-code="07180000" data-group-code="07000000"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves"><span className="gnb__depth2-link-text">Microondas</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves:overview"><span className="gnb__depth3-link-text">Vista General</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/microwave-oven-convection-mc32k7055ct/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves:convection"><span className="gnb__depth3-link-text">Convección</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/microwave-ovens/?with-golden" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves:grill"><span className="gnb__depth3-link-text">Con Dorador</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/microwave-ovens/?without-golden" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves:without grill"><span className="gnb__depth3-link-text">Sin Dorador</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/cooking-appliances/all-cooking-appliances/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="home appliances:microwaves:see all"><span className="gnb__depth3-link-text">Mira Todas</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu" role="presentation" data-group-code="07000000"><a className="gnb__depth2-link" href="/pe/refrigerators/all-refrigerators/?accesories" role="menuitem" an-tr="nv00_gnb--click-depth2" an-ca="navigation" an-ac="gnb" an-la="home appliances:accessories"><span className="gnb__depth2-link-text">Accesorios</span></a></li>
                                                    </ul>
                                                    <div className="gnb__feature-container"><a className="gnb__feature-container-link" href="https://samsung.com.pe/familyhub/" an-tr="nv00_gnb--cta-feature" an-ca="navigation" an-ac="gnb" an-la="feature image:home appliances:powerful and complete cleaning with the samsung jet trademark:learn more">
                                                            <div className="image"><img className="image__preview responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/banner-menu-FH.JPG?$LazyLoad_Home_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/banner-menu-FH.JPG?$LazyLoad_Home_JPG$" alt="Family Hub™" /><img className="image__main responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/banner-menu-FH.JPG?$330_330_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/banner-menu-FH.JPG?$624_624_JPG$" alt="Family Hub™" /></div>
                                                            <div className="gnb__feature-container-contents">
                                                                <p className="gnb__feature-container-description">Family Hub™</p><a className="cta cta--underline cta--black" href="https://samsung.com.pe/familyhub/">Conoce más</a>
                                                            </div>
                                                        </a></div><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/monitors/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="it"><span className="gnb__depth1-link-text">IT</span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="/pe/monitors/" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="it">IT</a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="it:whats new"><span className="gnb__depth2-link-text">Novedades</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/monitors/all-monitors/?monitor-gaming" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="it:whats new:gaming monitor"><span className="gnb__depth3-link-text">Gaming Monitor</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/multi-device-experience/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="it:whats new:connected living"><span className="gnb__depth3-link-text">Tu Vida Conectada</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/monitors/highresolution/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="it:whats new:high resolution monitors"><span className="gnb__depth3-link-text">Monitor de Alta Resolución</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="it:it"><span className="gnb__depth2-link-text">IT</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/monitors/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="it:it:monitor"><span className="gnb__depth3-link-text">Monitor<br /></span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="gnb__feature-container"><a className="gnb__feature-container-link" href="/pe/monitors/curved-monitor/" an-tr="nv00_gnb--cta-feature" an-ca="navigation" an-ac="gnb" an-la="feature image:it:the curve in a new dimension:learn more">
                                                            <div className="image"><img className="image__preview responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/p6_gro1/p6_initial_gnb/GNB_IT_624x624_curved-monitor.png?$LazyLoad_Home_PNG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/p6_gro1/p6_initial_gnb/GNB_IT_624x624_curved-monitor.png?$LazyLoad_Home_PNG$" alt="Excelencia en el trabajo y los juegos" /><img className="image__main responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/p6_gro1/p6_initial_gnb/GNB_IT_624x624_curved-monitor.png?$330_330_PNG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/p6_gro1/p6_initial_gnb/GNB_IT_624x624_curved-monitor.png?$624_624_PNG$" alt="Excelencia en el trabajo y los juegos" /></div>
                                                            <div className="gnb__feature-container-contents">
                                                                <p className="gnb__feature-container-description">Excelencia en el trabajo y los juegos</p><a className="cta cta--underline cta--black" href="/pe/monitors/curved-monitor/">Conoce más</a>
                                                            </div>
                                                        </a></div><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="//shop.samsung.com.pe/" target="_blank" title="Abrir en una nueva ventana" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="shop"><span className="gnb__depth1-link-text">Tienda Online<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                    </svg></span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="//shop.samsung.com.pe/" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="shop">Tienda Online<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                </svg></a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="shop:galaxy"><span className="gnb__depth2-link-text">Galaxy</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/moviles/smartphones" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:galaxy:smartphones"><span className="gnb__depth3-link-text">Celulares<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/moviles/tablets" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:galaxy:tablets"><span className="gnb__depth3-link-text">Tablets<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/moviles/wearables" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:galaxy:wearables"><span className="gnb__depth3-link-text">Wearables<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/moviles/accesorios" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:galaxy:accessories"><span className="gnb__depth3-link-text">Accesorios<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="shop:tv and av"><span className="gnb__depth2-link-text">TV & AV</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/tv---av/TV" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:tv and av:tv"><span className="gnb__depth3-link-text">TV<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/tv---av/soundbars" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:tv and av:audio"><span className="gnb__depth3-link-text">Audio<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="shop:home appliance"><span className="gnb__depth2-link-text">Línea Blanca</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/linea-hogar/Refrigeradoras" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:home appliance:refrigerators"><span className="gnb__depth3-link-text">Refrigeradoras<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/linea-hogar/lavadoras" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:home appliance:washing machines"><span className="gnb__depth3-link-text">Lavadoras<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/linea-hogar/microondas" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:home appliance:microwaves"><span className="gnb__depth3-link-text">Microondas<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="shop:it"><span className="gnb__depth2-link-text">Informática</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="//shop.samsung.com.pe/it/monitores" role="menuitem" target="_blank" title="Abrir en una nueva ventana" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="shop:it:monitors"><span className="gnb__depth3-link-text">Monitores<svg className="icon" id="outlink-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                                        <path d="M81.436 14.564v54.285h-8V28.221L18.22 83.436l-5.656-5.656L67.78 22.563l-40.629.001v-8z"></path>
                                                                                    </svg></span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gnb__sub">
                                    <ul className="gnb__depth1" role="menubar">
                                        <li className="gnb__depth1-menu has-depth-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/explore/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="explore"><span className="gnb__depth1-link-text">Explorar</span></a><a className="gnb__depth2-open-cta" href="javascript:void(0)"><svg className="icon" id="next-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M35.757 84.389l-5.533-5.778 31.982-30.612L30.224 17.39l5.533-5.779 38.018 36.388z"></path>
                                                </svg></a>
                                            <div className="gnb__depth2-wrap">
                                                <div className="gnb__depth-back-wrap"><a className="gnb__depth-back" href="javascript:;"><svg className="icon" id="backward-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
                                                        </svg><span className="hidden">Volver a 1 Menú de profundad</span></a></div>
                                                <div className="gnb__depth2-inner">
                                                    <div className="gnb__depth2-title-wrap"><strong className="gnb__depth2-title"><a className="gnb__depth2-title-link" href="/pe/explore/" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="explore">Explorar</a></strong></div>
                                                    <ul className="gnb__depth2" role="menu">
                                                        <li className="gnb__depth2-menu gnb-api--mobile-only" role="presentation"><a className="gnb__depth2-link" href="/pe/explore/" role="menuitem" an-tr="nv00_gnb--click-depth2" an-ca="navigation" an-ac="gnb" an-la="explore:explore home"><span className="gnb__depth2-link-text">Explore Home</span></a></li>
                                                        <li className="gnb__depth2-menu has-depth-menu" role="presentation"><a className="gnb__depth2-link" href="javascript:;" role="menuitem" an-tr="nv00_gnb--hover-depth2" an-ca="navigation" an-ac="gnb" an-la="explore:stories"><span className="gnb__depth2-link-text">Historias</span><svg className="icon" id="next-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                                                                </svg></a><a className="gnb__depth2-dropdown-cta" href="javascript:void(0)"><span className="hidden">Abrir menú</span><svg className="icon" id="open-down-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                                    <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
                                                                </svg></a>
                                                            <div className="gnb__depth3-wrap">
                                                                <div className="gnb__depth3-inner">
                                                                    <ul className="gnb__depth3" role="menu">
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/explore/photography/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="explore:stories:photography"><span className="gnb__depth3-link-text">Fotografía</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/explore/life-hacks/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="explore:stories:life hacks"><span className="gnb__depth3-link-text">Trucos Cotidianos</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/explore/wellbeing/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="explore:stories:wellbeing"><span className="gnb__depth3-link-text">Bienestar</span></a></li>
                                                                        <li className="gnb__depth3-menu" role="presentation"><a className="gnb__depth3-link" href="/pe/explore/entertainment/" role="menuitem" an-tr="nv00_gnb--text-depth3" an-ca="navigation" an-ac="gnb" an-la="explore:stories:entertainment"><span className="gnb__depth3-link-text">Entretenimiento</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="gnb__depth2-menu" role="presentation"><a className="gnb__depth2-link" href="/pe/explore/brand/" role="menuitem" an-tr="nv00_gnb--click-depth2" an-ca="navigation" an-ac="gnb" an-la="explore:brand"><span className="gnb__depth2-link-text">Marca</span></a></li>
                                                        <li className="gnb__depth2-menu" role="presentation"><a className="gnb__depth2-link" href="/pe/explore/how-to/" role="menuitem" an-tr="nv00_gnb--click-depth2" an-ca="navigation" an-ac="gnb" an-la="explore:how to"><span className="gnb__depth2-link-text">How-to</span></a></li>
                                                        <li className="gnb__depth2-menu" role="presentation"><a className="gnb__depth2-link" href="/pe/explore/experiences/" role="menuitem" an-tr="nv00_gnb--click-depth2" an-ca="navigation" an-ac="gnb" an-la="explore:experiences"><span className="gnb__depth2-link-text">Experiencias</span></a></li>
                                                    </ul>
                                                    <div className="gnb__feature-container"><a className="gnb__feature-container-link" href="/pe/explore/productivity/work/tablet-powered-schedule-hacks/" an-tr="nv00_gnb--cta-feature" an-ca="navigation" an-ac="gnb" an-la="feature image:explore:tablet-powered schedule hacks:learn more">
                                                            <div className="image"><img className="image__preview responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/tablet-hacks_624x624_pc.jpg?$LazyLoad_Home_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/tablet-hacks_624x624_pc.jpg?$LazyLoad_Home_JPG$" alt="Programación poderosa de Tablets contra Hacks" /><img className="image__main responsive-img" data-desktop-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/tablet-hacks_624x624_pc.jpg?$330_330_JPG$" data-mobile-src="//images.samsung.com/is/image/samsung/p5/pe/gnb_p6/tablet-hacks_624x624_pc.jpg?$624_624_JPG$" alt="Programación poderosa de Tablets contra Hacks" /></div>
                                                            <div className="gnb__feature-container-contents">
                                                                <p className="gnb__feature-container-description">Programación poderosa de Tablets contra Hacks</p><a className="cta cta--underline cta--black" href="/pe/explore/productivity/work/tablet-powered-schedule-hacks/">Conoce más</a>
                                                            </div>
                                                        </a></div><a className="gnb__depth2-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                                        </svg></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gnb__depth1-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/offer/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="offer"><span className="gnb__depth1-link-text">Promociones</span></a></li>
                                        <li className="gnb__depth1-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/support/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="support"><span className="gnb__depth1-link-text">Soporte</span></a></li>
                                        <li className="gnb__depth1-menu" role="presentation"><a className="gnb__depth1-link" href="/pe/business/" role="menuitem" an-tr="nv00_gnb--click-depth1" an-ca="navigation" an-ac="gnb" an-la="business"><span className="gnb__depth1-link-text">Empresas</span></a></li>
                                    </ul>
                                    <ul className="gnb__utility">
                                        <li className="gnb__login before-login-context"><a className="gnb__login-btn" href="javascript:void(0)" role="button" an-tr="nv00_gnb—text-depth1" an-ca="navigation" an-ac="gnb" an-la="login"><span className="hidden">Iniciar sesión</span><svg className="icon" id="user-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
                                                </svg></a>
                                            <div className="gnb__login-layer">
                                                <ul className="gnb__utility-menu">
                                                    <li><a className="gnb__utility-link loginBtn" href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="login" an-la="account:login">Iniciar sesión</a></li>
                                                    <li><a className="gnb__utility-link loginBtn" href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="sign up" an-la="account:sign up">Sign-Up</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="gnb__logout after-login-context" style={{display:"none"}}><a className="gnb__logout-btn" href="javascript:void(0)" role="button" an-tr="nv00_gnb-cta-samsung" an-ca="account" an-ac="login:success" an-la=" login:success:samsung account"><span className="hidden">Abrir Mi menú</span><svg className="icon" id="user-select-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm-.002-48c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2z"></path>
                                                </svg></a>
                                            <div className="gnb__login-layer"><strong className="gnb__user-name"></strong>
                                                <ul className="gnb__utility-menu">
                                                    <li><a className="gnb__utility-link logoutBtn" href="javascript:;" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="logout" an-la="account:logout">Cerrar sesión</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="gnb__cart"><a className="gnb__cart-btn js-global-cart-btn js-has-carturl js-layer-open" href="//shop.samsung.com/pe/cart" role="link" data-div-id="#layerEmptyCart" an-tr="nv00_gnb—text-depth1" an-ca="navigation" an-ac="gnb" an-la="cart" data-cart-url="//shop.samsung.com/pe/cart"><span className="hidden">Cart</span><svg className="icon" id="cart-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path>
                                                </svg><span className="gnb__cart-in-number gnb-cart-count" aria-live="polite" style={{display:"none"}}></span></a></li>
                                        <li className="gnb__search"><a className="gnb__search-btn gnb__search-btn-js" href="javascript:void(0)" role="button" an-tr="nv00_gnb—text-depth1" an-ca="navigation" an-ac="gnb" an-la="search"><span className="hidden">Búsqueda</span><svg className="icon" id="search-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                                    <path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path>
                                                </svg></a></li>
                                    </ul>
                                    <div className="gnb__utility-mobile">
                                        <ul className="gnb__utility-menu before-login-context">
                                            <li><a className="gnb__utility-link loginBtn" href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="login" an-la="account:login">Iniciar sesión</a></li>
                                            <li><a className="gnb__utility-link loginBtn" href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="sign up" an-la="account:sign up">Sign-Up</a></li>
                                        </ul><strong className="gnb__user-name after-login-context" style={{display:"none"}}><span className="gnb__user-name-inner"></span></strong>
                                        <ul className="gnb__utility-menu after-login-context" style={{display:"none"}}>
                                            <li><a className="gnb__utility-link logoutBtn" href="javascript:;" an-tr="nv00_gnb--text-depth2" an-ca="account" an-ac="logout" an-la="account:logout">Cerrar sesión</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div><a className="gnb__menu-close" href="javascript:void(0)" role="button" an-tr="nv00_gnb--image-action" an-ca="navigation" an-ac="gnb" an-la="gnb:close"><span className="hidden">Cerrar menú</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                    <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                                </svg></a>
                        </div>
                        <div className="gnb__mobile-dimmed">
                            
                        </div>
                        <form id="signInForm" name="signInForm" method="get" action="https://account.samsung.com/accounts/v1/DCGLPE/signInGate"><input id="response_type" type="hidden" name="response_type" value="" /><input type="hidden" name="client_id" value="zyj35vde15" /><input id="locale" type="hidden" name="locale" value="" /><input type="hidden" name="countryCode" value="PE" /><input id="redirect_uri" type="hidden" name="redirect_uri" value="/aemapi/v6/data-login/afterLogin.pe.json" /><input id="signInState" type="hidden" name="state" value="" /><input id="signInGoBackURL" type="hidden" name="goBackURL" value="" /><input id="scope" type="hidden" name="scope" value="" /></form>
                        <form id="signOutForm" name="signOutForm" method="get" action="https://account.samsung.com/accounts/v1/DCGLPE/signOutGate"><input type="hidden" name="client_id" value="zyj35vde15" /><input id="signOutState" type="hidden" name="state" value="" /><input id="signOutURL" type="hidden" name="signOutURL" value="/aemapi/v6/data-login/afterLogout.pe.json" /></form>
                        <form id="joinForm" name="joinForm" method="post" action="https://account.samsung.com/membership/"><input type="hidden" name="actionID" value="SignupAP" /><input type="hidden" name="serviceID" value="zyj35vde15" /><input type="hidden" name="serviceName" value="SAMSUNG" /><input type="hidden" name="domain" value="" /><input type="hidden" name="countryCode" value="PE" /><input type="hidden" name="languageCode" value="es" /><input id="joinRegistURL" type="hidden" name="registURL" value="/aemapi/v6/data-login/afterLogin.pe.json" /><input id="joinReturnURL" type="hidden" name="returnURL" /><input id="joinGoBackURL" type="hidden" name="goBackURL" value="" /><input type="hidden" name="ssoType" value="ENC_TK" /><input id="joinEmailActivationURL" type="hidden" name="emailActivationURL" value="/aemapi/v6/data-login/emailActivationURL.pe.json" /></form>
                        <form id="findAccountForm" name="findAccountForm" method="post" action="https://account.samsung.com/membership/"><input type="hidden" name="actionID" value="FindEmail" /><input type="hidden" name="serviceID" value="zyj35vde15" /><input type="hidden" name="serviceName" value="SAMSUNG" /><input type="hidden" name="domain" value="" /><input type="hidden" name="countryCode" value="PE" /><input type="hidden" name="languageCode" value="es" /><input id="findGoBackURL" type="hidden" name="goBackURL" value="" /><input type="hidden" name="ssoType" value="ENC_TK" /></form>
                        <form id="accountModifyForm" name="accountModifyForm" method="post" action="https://account.samsung.com/membership/"><input type="hidden" name="actionID" value="ModifyUserInfo" /><input type="hidden" name="serviceID" value="zyj35vde15" /><input type="hidden" name="serviceName" value="SAMSUNG" /><input type="hidden" name="domain" value="" /><input type="hidden" name="countryCode" value="PE" /><input type="hidden" name="languageCode" value="es" /><input id="accountModifyGoBackURL" type="hidden" name="goBackURL" value="" /><input type="hidden" name="ssoType" value="ENC_TK" /></form>
                        <form id="textForm" name="textForm"><input id="productCountText" type="hidden" name="productCountText" value="Cantidad de productos" /></form><input id="domain" type="hidden" name="domain" value="www.samsung.com" /><input id="useLogin" type="hidden" name="useLogin" value="Y" /><input id="useStore" type="hidden" name="useStore" value="Y" /><input id="storeDomain" type="hidden" name="storeDomain" value="https://shop.samsung.com" /><input id="hybrisApiJson" type="hidden" name="hybrisApiJson" /><input id="loginLinkURL" type="hidden" name="loginLinkURL" value="https://account.samsung.com/accounts/v1/DCGLPE/signInGate" /><input id="logoutURL" type="hidden" name="logoutURL" value="https://account.samsung.com/accounts/v1/DCGLPE/signOutGate" /><input id="updateProfileURL" type="hidden" name="updateProfileURL" /><input id="isLoginWithNoStore" type="hidden" name="isLoginWithNoStore" /><input id="countryCode" type="hidden" name="countryCode" value="PE" /><input id="languageCode" type="hidden" name="languageCode" value="es" /><input id="loginAccountServiceId" type="hidden" name="loginAccountServiceId" value="zyj35vde15" /><input id="emailActivationURL" type="hidden" name="emailActivationURL" value="/aemapi/v6/data-login/emailActivationURL.pe.json" /><input id="shopIntegrationFlag" type="hidden" name="shopIntegrationFlag" />
                        <div className="layer_popup" id="confirmPopup" style={{display:"none"}}>
                            <div className="popAlign" id="popup-type02">
                                <div className="popup_wrap">
                                    <h2 className="pop-tit"></h2>
                                    <p className="msg-text tc"></p>
                                    <div className="pop-btn"><a className="button login-leave-btn" href="javascript:void(0)" title="Sin acceso Aceptar">Aceptar</a></div><button className="close-button icon-close-x login-leave-btn" data-focus-id="shop-popover-close" data-tab-disable="true" tabIndex={0}><span className="blind">Sin acceso Cerrar</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="layer_popup" style={{display: "none"}}>
                            <div className="popup-nextgen-type popAlign" id="popup_alert" tabIndex={0} data-focus-id="shop-popover-wrap" data-tab-previous="shop-popover-close">
                                <div className="popup_wrap">
                                    <p className="msg-text tc"></p>
                                    <div className="pop-btn"><a className="button alert-ok-button" href="javascript:void(0);" data-popup="close" title="">Aceptar</a></div><button className="close-button icon-close-x" data-focus-id="shop-popover-close" data-tab-next="shop-popover-wrap" data-popup="close" data-tab-disable="true" tabIndex={0}><span className="blind">Cerrar capa emergente</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="gnb__mobile-dimmed">
                            
                        </div>
                    </div>
                </div>
            </nav>
            <div className="layer-popup-dim" style={{display: "none"}}></div>
            <div className="layer-popup gnb-layer_popup-js" id="layerEmptyCart" role="dialog" style={{display: "none"}}>
                <div className="layer-popup__inner">
                    <div className="layer-popup__contents"><svg className="icon icon--information" id="info-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M48 2.5c25.129 0 45.5 20.371 45.5 45.501S73.13 93.5 48 93.5 2.5 73.13 2.5 48.001C2.5 22.871 22.871 2.5 48 2.5zm0 5C25.633 7.5 7.5 25.633 7.5 48.001S25.632 88.5 48 88.5s40.5-18.131 40.5-40.499C88.5 25.633 70.367 7.5 48 7.5zm2.5 31V75h-5V43.5H40v-5h10.5zm-3.502-16.595C49.209 21.905 51 23.737 51 26c0 2.262-1.791 4.095-4.002 4.095C44.79 30.095 43 28.262 43 26c0-2.263 1.79-4.095 3.998-4.095z"></path>
                        </svg>
                        <p className="layer-popup__information-text">Su carrito está vacío.</p>
                    </div>
                    <div className="layer-popup__cta-wrap">
                        <div className="layer-popup__cta"><a className="cta cta--contained cta--black gnb-js-layer-close" href="javascript:;" title="" an-tr="nv00_gnb--text-cart" an-ca="other interaction" an-ac="cart is empty:ok" an-la="cart is empty:ok">Aceptar</a></div>
                    </div><button className="layer-popup__close" type="button"><span className="hidden">Cerrar capa emergente</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                        </svg></button>
                </div>
            </div>
            <div className="layer-popup gnb-layer_popup-js" id="layerInsufficientStock" role="dialog" style={{display: "none"}}>
                <div className="layer-popup__inner">
                    <div className="layer-popup__contents"><svg className="icon icon--information" id="info-regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M48 2.5c25.129 0 45.5 20.371 45.5 45.501S73.13 93.5 48 93.5 2.5 73.13 2.5 48.001C2.5 22.871 22.871 2.5 48 2.5zm0 5C25.633 7.5 7.5 25.633 7.5 48.001S25.632 88.5 48 88.5s40.5-18.131 40.5-40.499C88.5 25.633 70.367 7.5 48 7.5zm2.5 31V75h-5V43.5H40v-5h10.5zm-3.502-16.595C49.209 21.905 51 23.737 51 26c0 2.262-1.791 4.095-4.002 4.095C44.79 30.095 43 28.262 43 26c0-2.263 1.79-4.095 3.998-4.095z"></path>
                        </svg>
                        <p className="layer-popup__information-text">Lo sentimos, no hay existencias suficientes para tu carrito.</p>
                    </div>
                    <div className="layer-popup__cta-wrap">
                        <div className="layer-popup__cta"><a className="cta cta--contained cta--black gnb-js-layer-close" href="javascript:;">Aceptar</a></div>
                    </div><button className="layer-popup__close" type="button"><span className="hidden">Cerrar capa emergente</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                        </svg></button>
                </div>
            </div>
            <div className="layer-popup gnb__remove-product gnb-layer_popup-js" id="layerRemoveProduct" role="dialog" style={{display: "none"}}>
                <div className="layer-popup__inner">
                    <h2 className="layer-popup__title">Quitar un producto</h2>
                    <div className="layer-popup__contents">
                        <p>Sin este producto, el código de promoción o el cupón solicitado no se puede canjear.<br />¿Estás seguro de que deseas quitar este producto?</p>
                    </div>
                    <div className="layer-popup__cta-wrap">
                        <div className="layer-popup__cta"><a className="cta cta--outlined cta--black" href="javascript:;" title="">Mover a la lista de deseos</a></div>
                        <div className="layer-popup__cta"><a className="cta cta--contained cta--black" href="javascript:;" title="">Eliminar</a></div>
                    </div><button className="layer-popup__close" type="button"><span className="hidden">Cerrar capa emergente</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                        </svg></button>
                </div>
            </div>
            <div className="layer-popup gnb__popup-privacy gnb-layer_popup-js" id="layerPrivacy" role="dialog" style={{display: "none"}}>
                <div className="layer-popup__inner" id="popup_privacy">
                    <h2 className="layer-popup__title">Privacy Policy</h2>
                    <div className="layer-popup__contents">
                        <div className="checkbox-radio"><input className="hidden" id="privacy-terms" type="checkbox" name="checkbox" /><label className="checkbox-radio__label" htmlFor="privacy-terms"><span className="checkbox-radio__label-text">He leído y acepto la<a className="link-text" href="/pe/info/privacy/" target="_blank" title="Abrir en una nueva ventana">Polítca de Privacidad</a>de Samsung.com</span></label></div>
                        <p className="check-text check-text--error" id="errorPrivacy" style={{display: "none"}}>Marca esta casilla para ir a Samsung.com.</p>
                        <div className="checkbox-radio"><input className="hidden" id="privacy-terms2" type="checkbox" name="checkbox" /><label className="checkbox-radio__label" htmlFor="privacy-terms2"><span className="checkbox-radio__label-text">By ticking this box, I accept Samsung Service Updates, including :</span></label></div>
                        <p className="check-text">Samsung.com Services and marketing information, new product and service announcements as well as special offers, events and newsletters.</p>
                        <div className="layer-popup__cta-wrap">
                            <div className="layer-popup__cta"><a className="cta cta--outlined cta--black" id="privacyBtn" href="javascript:;" title="">IR A SAMSUNG.COM</a></div>
                            <div className="layer-popup__cta"><a className="cta cta--contained cta--black login-leave-btn" href="javascript:;" title="">SALIR DE LA PÁGINA</a></div>
                        </div><button className="layer-popup__close" data-focus-id="shop-popover-close" data-tab-disable="true" tabIndex={0}><span className="hidden">Cerrar Política de Privacidad</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                                <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                            </svg></button>
                    </div>
                </div>
            </div>
            <div className="layer-popup gnb__popup-privacy gnb-layer_popup-js" id="layerPreference" role="dialog" style={{display: "none"}}>
                <div className="layer-popup__inner" id="popup-type04">
                    <h2 className="layer-popup__title">Revisar preferencias</h2>
                    <p className="layer-popup__contents">Ayúdanos a recomendarte productos, actualiza tus preferencias.</p>
                    <div className="layer-popup__cta-wrap">
                        <div className="layer-popup__cta"><a className="cta cta--outlined cta--black" id="preferenceCheckBtn" href="javascript:void(0);" title="">SÍ</a></div>
                        <div className="layer-popup__cta"><a className="cta cta--contained cta--black" id="privacyCloseBtn" href="javascript:void(0);" title="">MÁS TARDE</a></div>
                    </div><button className="layer-popup__close" data-focus-id="shop-popover-close" data-tab-disable="true" tabIndex={0}><span className="hidden">Cerrar preferencias</span><svg className="icon" id="delete-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false">
                            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                        </svg></button>
                </div>
            </div><input id="sc_gnb_searchURL" type="hidden" name="sc_gnb_searchURL" value="/pe/search" /><input id="sc_gnb_matchedcontentsusable" type="hidden" name="sc_gnb_matchedcontentsusable" value="Y" /><input id="sc_gnb_suggestedsearchauto" type="hidden" name="sc_gnb_suggestedsearchauto" value="true" /><input id="sc_gnb_placeholder" type="hidden" name="sc_gnb_placeholder" value="Galaxy S20" />
            <section className="gnb-search" style={{display: "none"}}>
                <div className="gnb-search__dimmed"></div>
                <div className="gnb-search__contents">
                    <h2 className="text-title">¿Qué estás buscando?</h2>
                    <form className="gnb-search__form" action="javascript:;" role="search" autoComplete="off">
                        <fieldset>
                            <legend>Formulario de búsqueda</legend>
                            <div className="gnb-search__input-wrap"><button className="gnb-search__input-btn--close" type="button">Cerrar</button><input className="gnb-search__input" type="text" name="search" an-tr="search layer--search bar-submit" an-ca="search" an-ac="search layer" an-la="search bar:keyword submit" /><span className="gnb-search__placeholder">Galaxy S20</span><button className="gnb-search__input-btn--cancel" type="button">Cancelar</button><button className="gnb-search__input-btn--submit" type="submit" an-tr="search layer--Image-submit" an-ca="search" an-ac="search layer" an-la="search bar:keyword submit">Buscar</button></div>
                        </fieldset>
                    </form>
                    <div className="gnb-search__result-wrap gnb-search__result-wrap--hide">
                        <div className="gnb-search__suggested gnb-search__suggested--hide">
                            <div className="gnb-search__result-title-wrap">
                                <p className="gnb-search__result-title">Búsquedas sugeridas</p>
                            </div>
                            <ul className="gnb-search__result-list"></ul>
                        </div>
                        <div className="gnb-search__no-suggestions gnb-search__no-suggestions--hide">
                            <div className="gnb-search__result-title-wrap">
                                <p className="gnb-search__result-title">No hay sugerencias</p>
                            </div>
                        </div>
                        <div className="gnb-search__history gnb-search__history--hide">
                            <div className="gnb-search__result-title-wrap">
                                <p className="gnb-search__result-title">Historial de búsqueda</p><button className="gnb-search__btn--history-clear" an-tr="search layer--text-link" an-ca="search" an-ac="search layer" an-la="search history:clear all">Borrar todo</button>
                            </div>
                            <ul className="gnb-search__result-list"></ul>
                        </div>
                        <div className="gnb-search__related gnb-search__related--hide">
                            <div className="gnb-search__result-title-wrap">
                                <p className="gnb-search__result-title">Búsquedas relacionadas</p>
                            </div>
                            <ul className="gnb-search__result-list"></ul>
                        </div>
                        <div className="gnb-search__matched gnb-search__matched--hide">
                            <div className="gnb-search__result-title-wrap">
                                <p className="gnb-search__result-title">Contenido coincidente</p>
                            </div>
                            <ul className="gnb-search__result-list"></ul>
                        </div>
                    </div><button className="gnb-search__btn--close" an-tr="search layer--Image-link" an-ca="search" an-ac="search layer" an-la="close">Cancelar</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Header