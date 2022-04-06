/* eslint-disable @next/next/no-img-element */
import { DocLink } from '../../utils/prismicHelpers';

const PortfolioSection = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading } = slice.primary;
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h2 className='dorothea-heading'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row'>
					{slice?.items?.map((item, index) => (
						<PortfolioItem key={index} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

const PortfolioItem = ({ data }) => {
	const { image, link, title1, category } = data;
	return (
		<div className='col-md-6'>
			<DocLink link={link}>
				<div className='dorothea-team'>
					<img src={image.url} className='img-fluid' alt={image.alt} />
					<div className='desc'>
						<div className='con'>
							<h5>{title1[0]?.text}</h5>
							<span>{category}</span>
							{/* ====== SHARE BUTTON ===== */}
							{/* <p className='icon'>

							<span>
								<a href='#0'>
									<i className='ti-instagram'></i>
								</a>
							</span>
							<span>
								<a href='#0'>
									<i className='ti-vimeo'></i>
								</a>
							</span>
							<span>
								<a href='#0'>
									<i className='ti-twitter'></i>
								</a>
							</span>
						</p> */}
						</div>
					</div>
				</div>
			</DocLink>
		</div>
	);
};

export default PortfolioSection;
