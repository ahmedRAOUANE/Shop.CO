import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArraivals from "@/components/NewArraivals";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArraivals />
      <TopSelling />
    </div>
  );
}
