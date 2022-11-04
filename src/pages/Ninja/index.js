import React from 'react'
import ButtonComponent from '../../components/ButtonComponent';
import SocialLink from '../../components/SocialLink';
import './index.css'

const NinjaPage = () => {

  return (
    <div className="page page-ninja">
      <div className="page-wrapper">
        <img src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/1a8afd21-5e4c-41e3-a84e-390a2f4fba69?_reload=d4e0a9e0-5981-11ed-af5a-df2fdc72ed2d" />
        <p className='page-header__name'>Ninja </p>
        <p>I love video games 👾</p>
        <ButtonComponent className='page-main--btn' text="Ninja Gaming" icon="fa-brands fa-youtube" />
        <ButtonComponent text="Ninja Vods" icon="fa-brands fa-youtube" />
        <ButtonComponent text="Ninja Shorts" icon="fa-brands fa-youtube" />
        <ButtonComponent text="GFUEL" icon="fa-solid fa-barcode" />
        <ButtonComponent text="Instagram" icon="fa-brands fa-instagram" />
        <ButtonComponent text="Twitter" icon="fa-brands fa-twitter" />
        <ButtonComponent text="Twitch" icon="fa-brands fa-twitch" />
        <ButtonComponent text="Merch!" icon="fa-solid fa-cart-shopping" />
        <ButtonComponent text="Text Me!" icon="fa-solid fa-mobile-screen" />
        <ButtonComponent text="Masterclass" icon="fa-solid fa-graduation-cap" />

        <ul>
          <SocialLink icon='fa-brands fa-twitch' />
          <SocialLink icon='fa-brands fa-facebook' />
          <SocialLink icon='fa-brands fa-tiktok' />
        </ul>
      </div>
    </div>
  );
}

export default NinjaPage
