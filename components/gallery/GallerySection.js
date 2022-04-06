/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import FsLightbox from 'fslightbox-react';

const GallerySection = ({ slice }) => {
	const { heading, subheading } = slice?.primary;

	const [sources, setSources] = useState([]);
	// ===== SLIDE STATE =====
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});
	// ===== HANDLE SLIDE NUMBER =====
	const openLightboxOnSlide = (number) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	};
	// ===== GET STRUCTURED SOURCES =====
	useEffect(() => {
		let tempSources = [];
		slice.items.map((item) => {
			item.video_link.link_type == 'Web'
				? tempSources.push(item?.video_link?.url)
				: tempSources.push(item?.image?.large?.url);
		});
		setSources(tempSources);
		return () => {
			setSources([]);
		};
	}, [slice]);
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h2 className='dorothea-heading'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row align-items-stretch dorothea-photos'>
					<div className='col-12'>
						<div className='row align-items-stretch'>
							{slice?.items?.map((item, index) => (
								<GalleryItem
									key={index}
									data={item}
									index={index}
									openLightboxOnSlide={openLightboxOnSlide}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={sources}
				slide={lightboxController.slide}
			/>
		</div>
	);
};

const GalleryItem = ({ data, index, openLightboxOnSlide }) => {
	const { image } = data;
	return (
		<div className='col-12 col-md-6 col-lg-4'>
			<div
				className='d-block dorothea-photo-item'
				onClick={() => openLightboxOnSlide(index + 1)}>
				<img src={image?.url} alt={image?.alt} className='img-fluid' />
			</div>
		</div>
	);
};

export default GallerySection;
