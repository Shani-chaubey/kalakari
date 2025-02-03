import BannerOne from "@/components/banners/BannerOne";
import LatestBlogPosts from "@/components/blog/LatestBlogPosts";
import HeroBannerOne from "@/components/hero/HeroBannerOne";
import NewsLetterTwo from "@/components/newsLetter/NewsLetterTwo";
import BenefitsSection from "@/components/others/BenefitSection";
import TestimonialsSection from "@/components/others/Testimonials";
import ProductsCollectionOne from "@/components/products/ProductsCollectionOne";

const HomePageOne = () => {
  return (
    <section className="overflow-hidden">
      <HeroBannerOne />
      {/* <Suspense fallback={<Loader />}>
        <CategoriesCollection />
      </Suspense> */}
      <ProductsCollectionOne />
      <BenefitsSection textCenter={false} />
      <BannerOne />
      <TestimonialsSection textCenter={false} />
      {/* <LatestBlogPosts twoColunmHeader={true} />
      <NewsLetterTwo /> */}
    </section>
  );
};

export default HomePageOne;
