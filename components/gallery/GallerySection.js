/* eslint-disable @next/next/no-img-element */

const GallerySection = () => {
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
							Photo Gallery
						</h2>
					</div>
				</div>
				<div className='row align-items-stretch dorothea-photos'>
					<div className='col-12'>
						<div className='row align-items-stretch'>
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
							<GalleryItem />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const GalleryItem = () => {
	return (
		<div
			className='col-12 col-md-6 col-lg-4 animate-box'
			data-animate-effect='fadeInUp'>
			<a href='#' className='d-block dorothea-photo-item'>
				<img
					src='https://images.prismic.io/sombitdeyphotography/7a1058f0-41ec-4099-abb3-e7445d0cbf11__SDP3568-1-copy.jpg?auto=compress,format&w=450'
					alt=''
					className='img-fluid'
				/>
			</a>
		</div>
	);
};

export default GallerySection;
