import Link from 'next/link';

const SecondaryHeroSection = ({ slice }) => {
	// console.log(slice);
	const { heading, background_image } = slice.primary;
	return (
		<div>
			<div className='dorothea-hero js-fullheight'>
				<div className='flexslider js-fullheight'>
					<div
						className='bg-fixed'
						style={{
							backgroundImage: `url(${background_image.url})`,
							backgroundSize: 'cover',
						}}>
						<div className='overlay '></div>
						<div className='container'>
							<div className='col-md-12 js-fullheight slider-text'>
								<div className='slider-text-inner'>
									<div className='mx-auto frame-inner'>
										<h1 className=''>{heading[0]?.text}</h1>
										<Link href='/'>
											<a>
												<h6>Home</h6>
											</a>
										</Link>
										<span className='frame-1'></span>
										<span className='frame-2'></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.dorothea-hero .flexslider .slider-text {
					min-height: 400px;
					overflow: hidden;
				}
				.bg-fixed {
					background-size: cover;
					background-position: center center;
				}
				.overlay {
					width: 100%;
					height: 100%;
					top: 0;
					position: absolute;
					background: rgb(0 0 0 / 40%);
				}
			`}</style>
		</div>
	);
};

export default SecondaryHeroSection;
