/* eslint-disable @next/next/no-img-element */

const Footer = () => {
	return (
		<div
			id='dorothea-footer'
			className='section-banner background-image'
			style={{
				background: `url('/images/SDP4792-copy.jpg') center center`,
				backgroundSize: 'cover',
			}}>
			<div className='top-fade'></div>
			<div className='left-fade'></div>
			<div className='wrap-text'>
				<i className='ti-more'></i>
				<p>
					<a href='mailto:info@dorothea.com' className='mail'>
						sombit.dey@gmail.com
					</a>
				</p>
				<p>
					<a href='tel:+16504440000' className='phone'>
						+91 9830570102
					</a>
				</p>
				<ul className='social-network'>
					<li>
						<a href='#'>
							<i className='ti-facebook'></i>
						</a>
					</li>
					<li>
						<a href='#'>
							<i className='ti-twitter'></i>
						</a>
					</li>
					<li>
						<a href='#'>
							<i className='ti-instagram'></i>
						</a>
					</li>
					<li>
						<a href='#'>
							<i className='ti-youtube'></i>
						</a>
					</li>
				</ul>
				<div>
					<img
						src='https://images.prismic.io/sombitdeyphotography/402d0fec-d1e0-4b6c-bc64-a5660a798e71_SDP-Logo2.png?auto=compress,format'
						className='logo-row'
						alt=''
					/>
				</div>
				<div className='credits-row'>
					<p>© 2022 SDP. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
