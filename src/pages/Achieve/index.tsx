import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContentAchieve from "../../content/MiddleBlockContentAchieve.json";
import AboutContentAchieve from "../../content/AboutContentAchieve.json";
import MissionContentAchieve from "../../content/MissionContentAchieve.json";
import ProductContentAchieve from "../../content/ProductContentAchieve.json";
import ContactContent from "../../content/ContactContent.json";
import ScrollCarousel from 'scroll-carousel-react';

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContentAchieve.title}
        content={MiddleBlockContentAchieve.text}
        button={MiddleBlockContentAchieve.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContentAchieve.title}
        content={AboutContentAchieve.text}
        section={AboutContentAchieve.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContentAchieve.title}
        content={MissionContentAchieve.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContentAchieve.title}
        content={ProductContentAchieve.text}
        icon="waving.svg"
        id="product"
      />
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {/* <div className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-12 w-12'>
            <img src="/img/linked.png" alt="LinkedIn" />
          </div> */}

      
          
        {["/img/linked.png", "/img/apple.jpg", "/img/micro.png", "/img/amaz.png"].map((item) => (
          <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
            <img src={item} alt="LinkedIn" />
          </div>
        ))}
      </ScrollCarousel>
    </Container>
  );
};

export default Home;
