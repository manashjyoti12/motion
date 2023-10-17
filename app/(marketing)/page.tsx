import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justifly-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Hero />
      </div>

      <Footer />
    </div>
  );
}

export default MarketingPage;