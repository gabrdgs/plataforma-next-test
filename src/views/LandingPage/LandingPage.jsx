import { Fragment } from 'react';

import { IndexPage } from '../../components/IndexPage';
import { NavigationBar } from '../../components/NavigationBar';
import { Hero } from './Hero';
import { About } from './About';
import { VideoAbout } from './VideoAbout';
import { Partners } from './Partners';
import { SeedArea } from './SeedArea';
import { MentorArea } from './MentorArea';
import { Footer } from './Footer';

export default function LandingPage() {
  return (
    <Fragment>
      <IndexPage/>
      <NavigationBar/>
      <Hero id="missao" />
      <About id="quem-somos" />
      <VideoAbout id="video-semear"/>
      <Partners id="parceiros" />
      <SeedArea id="area-jovem" />
      <MentorArea id="mentor" />
      <Footer id="rodape"/>
    </Fragment>
  );
}
