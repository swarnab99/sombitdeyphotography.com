/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { DocLink } from '../../utils/prismicHelpers';

const CtaSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, image, button_text, button_link } =
		slice?.primary;

	return (
		<div className='about-banner-section about'>
			<div
				className='background-image'
				style={{
					background: `url(${image?.url}) center center`,
					backgroundSize: 'cover',
				}}></div>
			<div className='bottom-fade'></div>
			<div className='wrap-text'>
				<RichText render={heading} />
				<RichText render={description} />
				<div className='col-md-12'>
					<DocLink linkClass='btn button' link={button_link}>
						{button_text[0]?.text}
					</DocLink>
				</div>
			</div>
		</div>
	);
};

export default CtaSection;
