const HeroSection = ({ slice }) => {
	// console.log(slice);
	const { heading, title, image, phone_number, email_id } = slice?.primary;
	return (
		<div id='home'>
			<div className='dorothea-hero js-fullheight'>
				<div className='flexslider js-fullheight'>
					<ul className='slides'>
						<li
							className='bg-fixed'
							style={{
								backgroundImage: `url(${image?.url})`,
							}}>
							<div className='overlay'></div>
							<div className='container'>
								<div className='row'>
									<div className='col-md-12 js-fullheight slider-text'>
										<div className='slider-text-inner'>
											<div className='mx-auto frame-inner'>
												<h2>{heading[0]?.text}</h2>
												<h6>{title[0]?.text}</h6>
												<span className='frame-1'></span>
												<span className='frame-2'></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className='bottom-fade'></div>
				<div className='container hero-bottom'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='number'>
								<a href={`tel:${phone_number[0]?.text}`}>
									<span>{phone_number[0]?.text}</span>
								</a>
							</div>
							<div className='arrow bounce text-center'>
								<a href='#services' className=''>
									<i className='ti-angle-double-down'></i>
								</a>
							</div>
							<div className='right-bottom-text'>
								<a href={`mailto:${email_id[0]?.text}`}>
									<span>{email_id[0]?.text}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.hero-bottom {
					position: relative;
					z-index: 99;
				}
			`}</style>
		</div>
	);
};

export default HeroSection;
