/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const AboutSection = ({ slice }) => {
	console.log(slice);
	const { subheading, heading, description, image, button_text, button_link } =
		slice?.primary;
	return (
		<div className='section-banner'>
			<div className='container'>
				{subheading[0]?.text && (
					<div className='row'>
						<div className='col-md-12 text-center'>
							<span className='dorothea-heading-meta'>
								{subheading[0]?.text}
							</span>
							<h2 className='dorothea-heading'>{heading[0]?.text}</h2>
						</div>
					</div>
				)}
				<div className='row'>
					<div className='col-md-12'>
						<img
							src={image?.url}
							className='img-fluid mb-30'
							alt={image?.alt}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div>
							<RichText render={description} serializeHyperlink={CustomLink} />
						</div>
						<div>
							{button_link?.id && (
								<DocLink link={button_link} linkClass='btn button'>
									<span className='icon'></span> {button_text[0]?.text}
								</DocLink>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
