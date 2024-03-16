import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HeroSection from '../components/homePage/HeroSection';
import About from "../components/homePage/About";
import Podcasts from "../components/homePage/Podcasts";
import Seo from '../components/seo';
import InstagramSection from "../components/homePage/InstagramSection";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

const IndexPage: React.FC<PageProps>  = () => {
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection />
    <div className="container">
      <About/>
      <InstagramSection/>
      <FeaturedPosts/>
      <Podcasts/>
    </div>
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>Lee UP</title>