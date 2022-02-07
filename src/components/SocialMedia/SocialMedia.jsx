import React from "react";
import { Button, Col, Row, Typography, Card, Space, List, Avatar } from 'antd';
import Image from 'next/image';
import styles from './SocialMedia.module.scss'


import linkedinImage from '../../assets/images/socialMedia/linkedin.png'
import instagramImage from '../../assets/images/socialMedia/instagram.png'
import facebookImage from '../../assets/images/socialMedia/facebook.png'
import youtubeImage from '../../assets/images/socialMedia/youtube.png'



const icons = [
    {
        image: linkedinImage, 
        link: 'https://www.linkedin.com/company/isemear',
    },
    {
        image:instagramImage, 
        link: 'https://www.instagram.com/isemearoficial/',
    },
    {
        image:facebookImage, 
        link: 'https://www.facebook.com/isemear',
    },
    {
        image:youtubeImage, 
        link: 'https://www.youtube.com/channel/UCVX26cPzN0MrCHTrrL4HYug',
    }
] 

export default function SocialMedia() {
    return (
            <Row gutter={10}>
                {icons.map((icon, index) => (
                    <Col key={index}>
                        <a href={icon.link}>
                          <Image src={icon.image} width={50} height={50} alt="social-icon"/>
                        </a>
                    </Col>
                 ))}
            </Row>
    )
}
