import {useState, Fragment} from 'react';
import Image from 'next/image';
import { Button, Col, Row, Typography, Input, Form, Modal, Space } from 'antd';

import { Video } from '../../../components/Video';


import videoBackgroundImage from '../../../assets/images/landingPage/instituto-semear.png'


export default function VideoAbout (){
    return(
        <Fragment>
            <br/><br/><br/><br/>
            <Video youtubeID="HR1BaFO0R1I" title="Manifesto Semear"/>
        </Fragment>
    )
}



  
    