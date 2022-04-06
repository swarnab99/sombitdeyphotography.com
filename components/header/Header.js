/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	// ========== INCREASE & DECREASE HEADER ==========
	useEffect(() => {
		window.onscroll = function () {
			const header = document.getElementById('header');
			if (!header) return;
			if (
				document.body.scrollTop > 120 ||
				document.documentElement.scrollTop > 120
			) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		};
	}, []);
	// END

	return (
		<>
			<Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
			<header id='header' className='dorothea-header'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-6 col-md-6 dorothea-logo-wrap'>
							<Link href='/'>
								<a className='dorothea-logo'>
									<img
										src='https://images.prismic.io/sombitdeyphotography/1f4d4946-6a1a-4973-b189-27947ff39746_logo.png?auto=compress,format'
										alt='Sombit Dey Photography Logo'
									/>
								</a>
							</Link>
						</div>

						<div className='col-6 col-md-6 text-right dorothea-menu-burger-wrap'>
							<span
								onClick={() => setMenuOpen(!menuOpen)}
								className={`dorothea-nav-toggle ann-js-dorothea-nav-toggle ${
									menuOpen ? 'active' : ''
								}`}>
								<i></i>
							</span>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

const Menu = ({ menuOpen, closeMenu }) => {
	const router = useRouter();
	return (
		<nav
			className={`dorothea-menu ${menuOpen ? 'dorothea-menu-show' : ''}`}
			id='ann-navbar-spy'>
			<div className='dorothea-menu-inner' id='ann-navbar'>
				<ul onClick={closeMenu} className='list-unstyled'>
					<LinkItem text='Home' link='/' active={router.pathname == '/'} />
					<LinkItem
						text='About'
						link='/about'
						active={router.pathname == '/about'}
					/>
					<LinkItem
						text='Services'
						link='/services'
						active={router.pathname == '/services'}
					/>
					<LinkItem
						text='Gallery'
						link='/gallery'
						active={router.pathname == '/gallery'}
					/>
					<LinkItem
						text='Portfolio'
						link='/portfolio'
						active={router.pathname == '/portfolio'}
					/>
					<LinkItem
						text='Reviews'
						link='/reviews'
						active={router.pathname == '/reviews'}
					/>
					<LinkItem
						text='Blog'
						link='/blog'
						active={router.pathname == '/blog'}
					/>
					<LinkItem
						text='Contact'
						link='/contact'
						active={router.pathname == '/contact'}
					/>
				</ul>
			</div>
		</nav>
	);
};

const LinkItem = ({ text, link, active }) => {
	return (
		<li className={active ? 'active' : ''}>
			<Link href={link}>
				<a>{text}</a>
			</Link>
		</li>
	);
};

export default Header;
