import React, {MouseEventHandler, useState} from 'react'
import CampaingTemplate from '../../../Components/CampaingTemplate/CampaingTemplate'
import Carousel from '../../../Components/Carousel/Slider'
import './styles.scss'

import BannerGalaxyS22 from '../../../assets/images/banner-galaxys22.webp'
import ImageModel from '../../../assets/images/test-model.png'

import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';

import {ReactComponent as IconClose} from '../../../assets/images/svg/svg-close.svg'
import {ReactComponent as IconArrowRight} from '../../../assets/images/svg/svg-arw-right-gray.svg' 

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const GalaxyS22_22FEB = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal:MouseEventHandler = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen)
  }

  const handleClose = () => setModalIsOpen(false)

  return (
    <CampaingTemplate id='GalaxyS22_22FEB' title='Galaxy S22 | Samsung Perú'>
      <div className='desktop none'>
        <Carousel>
          <img src={BannerGalaxyS22} alt='Galaxy S22' width='100%'/>
          <img src={BannerGalaxyS22} alt='Galaxy S22' width='100%'/>
          <img src={BannerGalaxyS22} alt='Galaxy S22' width='100%'/>
        </Carousel>
      </div>
      <div className='mobile none'>
        <Carousel>
          <img src='https://images.samsung.com/is/image/samsung/assets/pe/offer/galaxyz/Mobile-1.png?$720_N_PNG$' alt='Galaxy S22' width='100%'/>
          <img src='https://images.samsung.com/is/image/samsung/assets/pe/offer/galaxyz/Mobile-1.png?$720_N_PNG$' alt='Galaxy S22' width='100%'/>
          <img src='https://images.samsung.com/is/image/samsung/assets/pe/offer/galaxyz/Mobile-1.png?$720_N_PNG$' alt='Galaxy S22' width='100%'/>
        </Carousel>
      </div>
      
      <div>
        <div className='center'>
          <a className='link cta cta--contained cta--emphasis' onClick={handleModal} href='/react'> Comprar ahora </a>
        </div>
      </div>

      <div className='models'>
        <div className='model'>
          <h3>Galaxy S22</h3>
          <Carousel>
            <img src={ImageModel} alt='Galaxy S22' width='100%'/>
            <img src={ImageModel} alt='Galaxy S22' width='100%'/>
            <img src={ImageModel} alt='Galaxy S22' width='100%'/>
          </Carousel>
        </div>
        <div className='model'>
          <h3>Galaxy S22+</h3>
          <Carousel>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173723-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173723-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173723-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
          </Carousel>
        </div>
        <div className='model'>
          <h3>Galaxy S22 Ultra</h3>
          <Carousel>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173724-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173724-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
            <img src='https://samsungpe.vtexassets.com/arquivos/ids/173724-1200-auto?width=1200&height=auto&aspect=true' alt='Galaxy S22' width='100%'/>
          </Carousel>
        </div>
      </div>

      <div className='center'>
        <a className='link cta cta--contained cta--emphasis' onClick={handleModal} href='/react'> Comprar ahora </a>
      </div>
      
      <img width="100%" src='https://images.samsung.com/is/image/samsung/assets/pe/offer/galaxyz/section-02/Parte-2-Desktop.jpg?$FB_TYPE_A_JPG$' alt='' className='desktop none'/>
      <img width="100%" src='https://images.samsung.com/is/image/samsung/assets/pe/offer/galaxyz/section-02/Parte-2-Mobile.jpg?$FB_TYPE_B_JPG$' alt='' className='mobile none' style={{marginBottom:"15px"}}/>

      <div className='video'>
        <div className='video-wrapper'></div>
        <iframe 
          className="video-player" 
          src="https://www.youtube.com/embed/eu5JpVI586s?wmode=opaque&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;origin=https://www.samsung.com&amp;autoplay=0&amp;mute=0"
          frameBorder="0" 
          allow="autoplay" 
          sandbox="allow-scripts allow-same-origin allow-presentation" 
          id="eu5JpVI586s0" 
          title="The Liveshop" 
          style={{width: "100%", height: "100%", position:"absolute"}}
        />
      </div>

      <div className='center'>
        <a className='link cta cta--contained cta--emphasis' href='https://www.samsung.com.pe/pdf-samsung/offer-presale/Terminos_y_Condiciones_PRE_VENTA_Samsung_GalaxyZ_Fold3.pdf' target='_blank' rel="noopener"> TÉRMINOS Y CONDICIONES </a>
      </div>


      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalIsOpen}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <div className='modal-container'>
          <header className='modal-header'>
            <h2>ENCUENTRA UNA TIENDA</h2>
            <div onClick={handleClose} style={{width:"20px",cursor:"pointer"}}>
              <IconClose/>
            </div>
            <div className='stores'>
              <span>TIENDA ONLINE</span>
            </div>
          </header>
          <div className='modal-body'>
            <div className='where-to-buy'>
              <a className='where-to-buy__item' href='/'>
                <picture className='where-to-buy__logo'>
                  <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94619.png'/>
                </picture>
                <div className='where-to-buy__name'>
                  <span>Samsung Tienda Online</span>
                  <div style={{width:"10px"}}>
                    <IconArrowRight/>
                  </div>
                </div>
              </a>
              <a className='where-to-buy__item' href='/'>
                <picture className='where-to-buy__logo'>
                  <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94283.png'/>
                </picture>
                <div className='where-to-buy__name'>
                  <span>Oechsle</span>
                  <div style={{width:"10px"}}>
                    <IconArrowRight/>
                  </div>
                </div>
              </a>
              <a className='where-to-buy__item' href='/'>
                <picture className='where-to-buy__logo'>
                  <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94289.png'/>
                </picture>
                <div className='where-to-buy__name'>
                  <span>Plazavea</span>
                  <div style={{width:"10px"}}>
                    <IconArrowRight/>
                  </div>
                </div>
              </a>
              <a className='where-to-buy__item' href='/'>
                <picture className='where-to-buy__logo'>
                  <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94293.png'/>
                </picture>
                <div className='where-to-buy__name'>
                  <span>Falabella Peru</span>
                  <div style={{width:"10px"}}>
                    <IconArrowRight/>
                  </div>
                </div>
              </a>
              <a className='where-to-buy__item' href='/'>
                <picture className='where-to-buy__logo'>
                  <img alt='' src='https://gethatch.com/resources/images/merchant/mLogo94273.png'/>
                </picture>
                <div className='where-to-buy__name'>
                  <span>Claro</span>
                  <div style={{width:"10px"}}>
                    <IconArrowRight/>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <footer className='modal-footer'>
            <p>Precios varían de acuerdo a la tienda y/o minoristas.</p>
          </footer>
        </div>
      </StyledModal>
    </CampaingTemplate>
  )
}

export default GalaxyS22_22FEB