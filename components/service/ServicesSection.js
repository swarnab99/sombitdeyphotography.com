/* eslint-disable @next/next/no-img-element */

const ServicesSection = () => {
	return (
		<div id='services' className='section-padding services'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span
							className='dorothea-heading-meta animate-box'
							data-animate-effect='fadeInUp'>
							What I Do
						</span>
						<h2
							className='dorothea-heading animate-box'
							data-animate-effect='fadeInUp'>
							My Services
						</h2>
					</div>
				</div>
				<div className='row'>
					<ServiceItem top={true} />
					<ServiceItem />
					<ServiceItem top={true} />
					<ServiceItem />
				</div>
				<div className='row'>
					<div className='col-md-12 text-right'>
						<a className='underline-text' href='services.html'>
							All Services <i className='ti-arrow-right'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const ServiceItem = ({ top }) => {
	return (
		<div
			className={`col-md-3 animate-box ${top ? 'mtop-60' : ''}`}
			data-animate-effect='fadeInUp'>
			<div className='item'>
				<div className='position-re o-hidden'>
					<img src='/images/_SDP1064-1-copy9.jpeg' alt='' />
				</div>
				<div className='con'>
					<i className='ti-more'></i>
					<h5>
						<a href='services-post.html'>Wedding Photography</a>
					</h5>
					<div className='line'></div>
					<a href='services-post.html'>
						<i className='ti-arrow-right'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
