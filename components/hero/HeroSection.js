const HeroSection = () => {
	return (
		<div id='home'>
			<div className='dorothea-hero js-fullheight'>
				<div className='flexslider js-fullheight'>
					<ul className='slides'>
						<li
							className='bg-fixed'
							style={{
								backgroundImage: `url(/images/_SDP0031-1-copy.jpg)`,
							}}>
							<div className='overlay'></div>
							<div className='container'>
								<div className='row'>
									<div className='col-md-12 js-fullheight slider-text'>
										<div className='slider-text-inner'>
											<div className='mx-auto frame-inner'>
												<h2>Sombit Dey</h2>
												<h6>Photography</h6>
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
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='number'>
								<a href='tel:+16504440000'>
									<span>+91 98305 70102</span>
								</a>{' '}
							</div>
							<div className='arrow bounce text-center'>
								<a href='#services' className=''>
									{' '}
									<i className='ti-angle-double-down'></i>{' '}
								</a>
							</div>
							<div className='right-bottom-text'>
								<span>sombit.dey@gmail.com</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
