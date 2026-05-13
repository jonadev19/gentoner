import Hero from "@/components/sections/Hero";
import BrandsBanner from "@/components/sections/BrandsBanner";
import Certification from "@/components/sections/Certification";
import CategoryCards from "@/components/sections/CategoryCards";
import SearchCatalog from "@/components/sections/SearchCatalog";
import Benefits from "@/components/sections/Benefits";
import InstagramFeed from "@/components/sections/InstagramFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsBanner />
      <Certification />
      <CategoryCards />
      <SearchCatalog />
      <Benefits />
      <InstagramFeed />
    </>
  );
}
