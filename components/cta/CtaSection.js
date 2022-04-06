/* eslint-disable @next/next/no-img-element */

const CtaSection = () => {
	return (
		<div className='about-banner-section about'>
			<div
				className='background-image'
				style={{
					background: 'url(/images/_SDP1834-copy.jpg) center center',
					backgroundSize: 'cover',
				}}></div>
			<div className='bottom-fade'></div>
			<div className='wrap-text'>
				<h2>Have Questions?</h2>
				<p>
					I am a photographer and visual artist who specializes in conceptua
					imagery and also photo manipulations. Vestibue in viverra bibendum
					magna mattis avida sapien.
				</p>
				<div className='col-md-12'>
					<a href='#' className='btn button'>
						Get a Quote
					</a>
				</div>
			</div>
		</div>
	);
};

export default CtaSection;
