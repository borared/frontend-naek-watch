import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";
import FeaturesList from "../components/about/FeaturesList";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-black">
            <AboutHeader />
            <AboutContent />
            <FeaturesList />
        </div>
    );
};

export default AboutUs;