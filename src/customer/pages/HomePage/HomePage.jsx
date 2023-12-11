import { mens_kurta } from "../../../data/Men/men_kurta";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeCarousel />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoe"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Woman's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Woman's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
