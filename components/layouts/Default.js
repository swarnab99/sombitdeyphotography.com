import Header from '../header/Header';
import Footer from '../footer/Footer';
import WhatsappButton from '../WhatsappButton';

const DefaultLayout = ({ children }) => {
	return (
		<main className='main-content'>
			<Header />
			<div className='main'>{children}</div>
			<Footer />
			<WhatsappButton
				number='+917003793551'
				text='Hi, Sombit Dey Photography'
			/>
		</main>
	);
};

export default DefaultLayout;
