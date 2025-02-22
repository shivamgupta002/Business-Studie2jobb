import Header from "./_components/Header"
import Hero from "./_components/Hero";
import MiniBox from "./_components/MiniBox";
export const metadata = {
  title: "Studie2jobb",
  description: "Get internship with job",
};
export default function Home() {
  return (
   <>
    <Header/>
    <Hero/>
    {/* <MiniBox/> */}
    <MiniBox/>
   </>
  );
}
