/* eslint-disable @next/next/no-img-element */

const PortfolioSection = () => {
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>View Our</span>
						<h2 className='dorothea-heading'>Events Portfolio</h2>
					</div>
				</div>
				<div className='row'>
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
					<PortfolioItem />
				</div>
			</div>
		</div>
	);
};

const PortfolioItem = () => {
	return (
		<div className='col-md-6'>
			<div className='dorothea-team'>
				<img
					src='https://images.prismic.io/sombitdeyphotography/42ccb5be-abdf-494b-8cae-e037cf19e308__SDP1144-2-copy.jpg?auto=compress,format'
					className='img-fluid'
					alt=''
				/>
				<div className='desc'>
					<div className='con'>
						<h5>
							<a href='#0'>Engagement Shoot</a>
						</h5>
						<span>Wedding</span>
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
		</div>
	);
};

export default PortfolioSection;
