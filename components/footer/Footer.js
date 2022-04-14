/* eslint-disable @next/next/no-img-element */
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer>
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
			</footer>

			{/* ========== FAVFLY ========= */}
			<div>
				<div className='favfly text-center'>
					<div className='divider-icon border-0 position-relative'>
						<i className='fa color-rose'>
							<FaHeart />
						</i>
					</div>
					<a
						title='Best digital marketing company in kolkata'
						href='https://favfly.com?ref=sombitdeyphotography.com'
						className='container py-3 d-block'>
						Growing with Favfly
					</a>
				</div>

				<style jsx>{`
					.favfly {
						letter-spacing: 1px;
					}
					.favfly a {
						color: #fff;
						font-weight: 500;
					}
					.divider-icon:before {
						left: 0;
					}
					.divider-icon:before,
					.divider-icon:after {
						position: absolute;
						top: 50%;
						content: '';
						border-top: 2px solid #222227;
						width: calc(50% - 30px);
					}
					.divider-icon i {
						position: absolute;
						top: 50%;
						left: 50%;
						-webkit-transform: translate(-50%, -50%);
						-ms-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
						font-size: 18px;
						color: #fff;
					}
					.divider-icon:after {
						right: 0;
					}
				`}</style>
			</div>
		</>
	);
};

export default Footer;
