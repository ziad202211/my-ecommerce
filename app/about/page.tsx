import InfoCards from "@/components/about/InfoCards";
import OurStory from "@/components/about/OurStory";
import Team from "@/components/about/Team";
import Services from "@/components/about/Services";

export default function About() {
    return(
        <>
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <OurStory/>
        <InfoCards/>
        <Team/>
        <Services/>
        </div>
        </>
    )
}