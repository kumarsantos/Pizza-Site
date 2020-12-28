import React from 'react'
import {FooterContainer,FooterWapper,SocialMediaWrap,SocialMedia,SocialLogo,SocialIcons,SocialIconLink} from './Footer'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWapper>
                <SocialMedia>
                <SocialMediaWrap>
                   <SocialLogo to="/">Pizza</SocialLogo>
                   <SocialIcons>
                       <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener moreferrer">
                           <FaFacebook />
                       </SocialIconLink>
                       <SocialIconLink href="https://Instagram.com" target="_blank" aria-label="Instagram" rel="noopener moreferrer">
                           <FaInstagram />
                       </SocialIconLink>
                       <SocialIconLink href="https://Twitter.com" target="_blank" aria-label="Twiter" rel="noopener moreferrer">
                           <FaTwitter />
                       </SocialIconLink>
                       <SocialIconLink href="https://Youtube.com" target="_blank" aria-label="YouTube" rel="noopener moreferrer">
                           <FaYoutube />
                       </SocialIconLink>
                   </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWapper>
        </FooterContainer>
    )
}

export default Footer
