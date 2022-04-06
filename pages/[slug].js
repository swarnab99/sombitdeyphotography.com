import AboutSection from '../components/about/AboutSection';
import CtaFormSection from '../components/cta/CtaFormSection';
import CtaSection from '../components/cta/CtaSection';
import GallerySection from '../components/gallery/GallerySection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';

const ServicePage = () => {
	return (
		<>
			<SecondaryHeroSection />
			<AboutSection />
			<CtaSection />
			<GallerySection />
			<CtaFormSection />
		</>
	);
};

export default ServicePage;
