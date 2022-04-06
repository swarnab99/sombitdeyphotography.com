/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { DocLink } from '../../utils/prismicHelpers';

const ServicesSection = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading } = slice?.primary;
	return (
		<div id='services' className='section-padding services'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h2 className='dorothea-heading'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row'>
					{slice?.items?.map((item, index) => (
						<ServiceItem key={index} data={item} />
					))}
				</div>
				<div className='row'>
					<div className='col-md-12 text-right'>
						{slice?.items?.length < 4 && (
							<Link href='/services'>
								<a className='underline-text'>
									All Services <i className='ti-arrow-right'></i>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const ServiceItem = ({ top, data }) => {
	const { title, image, link } = data;
	return (
		<div className={`col-md-3 ${top ? 'mtop-60' : ''}`}>
			<div className='item'>
				<div className='position-re o-hidden'>
					<img src={image?.url} alt={image?.alt} />
				</div>
				<div className='con'>
					<i className='ti-more'></i>
					<h5>
						<DocLink link={link}>{title[0]?.text}</DocLink>
					</h5>
					<div className='line'></div>

					<DocLink link={link}>
						<i className='ti-arrow-right'></i>
					</DocLink>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
