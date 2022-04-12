/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import lozad from 'lozad';
import FsLightbox from 'fslightbox-react';

const GallerySection = ({ slice }) => {
	const { heading, subheading } = slice?.primary;

	const [activeCategory, setActiveCategory] = useState('All');
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
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();

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
	}, [slice, activeCategory]);

	// console.log(sources);

	const categoryOptions = [
		'All',
		'Wedding',
		'Pre Wedding',
		'Candid Wedding',
		'Kids',
		'Portrait',
	];
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h2 className='dorothea-heading mb-1'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row mb-5'>
					<div className='col-12'>
						{slice?.items[slice?.items.length - 1].category && (
							<div className='portfolio-menu text-center'>
								{categoryOptions.map((option, index) => (
									<button
										onClick={() => setActiveCategory(option)}
										key={index}
										className={`btn-sm mr-2 ${
											activeCategory == option ? 'active' : ''
										}`}>
										{option}
									</button>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='row align-items-stretch dorothea-photos'>
					<div className='col-12'>
						<div className='row align-items-stretch'>
							{slice?.items?.map(
								(item, index) =>
									(activeCategory == 'All' ||
										activeCategory == item.category) && (
										<GalleryItem
											key={index}
											data={item}
											index={index}
											openLightboxOnSlide={openLightboxOnSlide}
										/>
									)
							)}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-right'>
						{slice?.items?.length < 13 && (
							<Link href='/gallery'>
								<a className='underline-text'>
									All Photos <i className='ti-arrow-right'></i>
								</a>
							</Link>
						)}
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
				className='d-block dorothea-photo-item position-relative'
				onClick={() => openLightboxOnSlide(index + 1)}>
				<img src={image?.url} alt={image?.alt} className='img-fluid' />
				<span className='video_icon'>
					<i className='ti-video-camera text-white'></i>
				</span>
			</div>

			<style jsx>{`
				.video_icon {
					position: absolute;
					left: 10px;
					top: 10px;
					font-size: 30px;
				}
			`}</style>
		</div>
	);
};

export default GallerySection;
