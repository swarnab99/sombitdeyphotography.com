import AboutSection from '../components/about/AboutSection';
import BlogsSection from '../components/blog/BlogsSection';
import CtaFormSection from '../components/cta/CtaFormSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';

const AboutPage = () => {
	return (
		<>
			<SecondaryHeroSection />
			<AboutSection />
			<CtaFormSection />
			<BlogsSection />
		</>
	);
};

export default AboutPage;
