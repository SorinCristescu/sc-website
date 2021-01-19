import Head from 'next/head';
import styled from 'styled-components';

import Button from '../components/button';
import Carousel from '../components/carousel';
import SectionIntro from '../components/sectionIntro';

const Section = styled.section`
  width: 100%;
  height: calc(100vh-80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const HeroContainer = styled.div`
  width: 80%;
`;
const contentHeroSection = [
  {
    id: 1,
    title: '',
    subtitle:
      'I create progress by designing and developing custom software, mobile applications and websites.',
    linkName: 'See what I do',
    path: '',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    linkName: '',
    path: '',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    linkName: '',
    path: '',
  },
];

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Sorin Cristescu Studio Production</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section>
          <HeroContainer>
            <h1>
              I design unique
              <br />
              web experience
            </h1>
            <svg
              width="350px"
              height="3px"
              viewBox="0 0 476 3"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Home"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-508.000000, -562.000000)"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                >
                  <line x1="508" y1="563" x2="984" y2="563.5" id="Path"></line>
                </g>
              </g>
            </svg>
            <p>creator of disruptive world-class experience</p>
            <Carousel content={contentHeroSection} minWidth="300px" />
          </HeroContainer>
        </Section>
        <SectionIntro
          intro="About"
          title="Premium digital freelancer experience for 
brave clients and cool agencies"
          text="Hi, I’m Sorin Cristescu, UX/UI designer and fullstack developer with a passion for all things visual and technical, based in Barcelona and Copenhagen and currently working as freelancer.
          I offer my expertise to agencies and creative teams.         
          After several years as Technical Director and Developer I craved to reconnect with craftsmanship, to make beautiful objects carefully designed, carefully developed.         
          My mission is to revolutionize the way brands are experienced by making online interactions meaningful and memorable. Helping ambitious and creative business leaders to ship innovative and meaningful digital products in which they can take pride.         
          For the past 7 years, I’ve been forming digital products and interactive experiences, corporate websites, e-commerce or mobile apps. From research, user flow, sketches, wireframes to final design systems, user interface, motion design and brand guidelines. I use cutting edge technologies combined with pleasing and purposeful visual to tell stories and invoke a feeling of conectedness.         
          Digital experiences always have to deliver valuable engagement with the client’s brand. Innovation means nothing without purpose. That’s why I work with clients whose work is not only the future of the industry, but which also makes its users smile."
        />

        <SectionIntro
          intro="My philosophy"
          title="Using cutting edge technologies combined with pleasing and purposeful visual to tell stories and invoke a feeling of conectedness"
          text=""
        >
          <Carousel content={contentHeroSection} minWidth="300px" />
        </SectionIntro>

        <SectionIntro
          intro="Now about business"
          title="I look for not clients but brave men ready to create the best product in their niche"
          text=""
        >
          <p>... and leave competitors somewhere behind.</p>
          <p>Here’s how I can help.</p>
          <Carousel content={contentHeroSection} minWidth="300px" />
        </SectionIntro>
        <SectionIntro
          intro="Let’s get down to business"
          title="90% of people use the web to find companies. Is yours ready?"
          text=""
        >
          <p>I am currently available for your project opportunity.</p>
          <p>Let’s build something great together!</p>
        </SectionIntro>
      </main>
    </div>
  );
};

export default Home;
