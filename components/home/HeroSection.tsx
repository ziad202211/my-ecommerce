import CategoryMenu from "./CategoryMenu";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 lg:px-8 mb-6">
      <div className="flex flex-col md:flex-row">
        <CategoryMenu />
        <HeroCarousel />
      </div>
    </div>
  );
}
