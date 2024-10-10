import DressStyle from "@/components/DressStyle";
import HappyUsersComments from "@/components/HappyUsersComments";
import Hero from "@/components/Hero";
import NewArraivals from "@/components/NewArraivals";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <main className="box column">
      <Hero />
      <NewArraivals />
      <TopSelling />
      <DressStyle />
      <HappyUsersComments />
    </main>
  );
}
