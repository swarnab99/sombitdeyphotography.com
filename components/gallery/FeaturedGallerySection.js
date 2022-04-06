/* eslint-disable @next/next/no-img-element */

const FeaturedGallerySection = () => {
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span
							className='dorothea-heading-meta animate-box'
							data-animate-effect='fadeInUp'>
							Portfolio
						</span>
						<h2
							className='dorothea-heading animate-box'
							data-animate-effect='fadeInUp'>
							Gallery
						</h2>
					</div>
				</div>
				<div className='row dorothea-photos'>
					<div
						className='col-12 col-md-4 animate-box'
						data-animate-effect='fadeInUp'>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/1.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/_SDP1064-1-copy9.jpeg'
								alt=''
							/>{' '}
						</a>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/6.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/SDP4792-copy.jpg'
								alt=''
							/>{' '}
						</a>
					</div>
					<div
						className='col-12 col-md-4 animate-box'
						data-animate-effect='fadeInUp'>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/3.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/SDP4792-copy.jpg'
								alt=''
							/>{' '}
						</a>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/5.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/SDP4792-copy.jpg'
								alt=''
							/>{' '}
						</a>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/7.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/SDP4792-copy.jpg'
								alt=''
							/>{' '}
						</a>
					</div>
					<div
						className='col-12 col-md-4 animate-box'
						data-animate-effect='fadeInUp'>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/4.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/SDP4792-copy.jpg'
								alt=''
							/>{' '}
						</a>
						<a
							className='d-block dorothea-photo-item'
							data-fancybox='images'
							data-caption='Photography'
							href='images/gallery/2.jpg'>
							{' '}
							<img
								className='img-fluid'
								src='/images/_SDP1064-1-copy9.jpeg'
								alt=''
							/>{' '}
						</a>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-right'>
						{' '}
						<a className='underline-text' href='gallery.html'>
							All Gallery <i className='ti-arrow-right'></i>
						</a>{' '}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedGallerySection;
