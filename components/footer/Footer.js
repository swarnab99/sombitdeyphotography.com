/* eslint-disable @next/next/no-img-element */

const Footer = () => {
	return (
		<div
			id='dorothea-footer'
			className='section-banner background-image'
			style={{
				background: `url('https://images.prismic.io/sombitdeyphotography/bd3c1173-de89-46d3-abb3-bec1ff99ee8d_pre-wedding.jpeg?auto=compress,format&w=1600') center center`,
				backgroundSize: 'cover',
			}}>
			<div className='top-fade'></div>
			<div className='left-fade'></div>
			<div className='wrap-text'>
				<i className='ti-more'></i>
				<p>
					<a href='mailto:sombit.dey@gmail.com' className='mail'>
						sombit.dey@gmail.com
					</a>
				</p>
				<p>
					<a href='tel:+91 9830570102' className='phone'>
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
						src='https://images.prismic.io/sombitdeyphotography/a6cb1309-5acb-4e72-9adb-db13101e88ef_SDP-Logo.png?auto=compress,format?w=200'
						className='logo-row'
						alt='logo'
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
