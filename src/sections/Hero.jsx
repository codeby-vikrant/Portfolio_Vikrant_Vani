import ParallaxBackground from "../components/ParallaxBackground";
import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
    </section>
  );
};

export default Hero;
