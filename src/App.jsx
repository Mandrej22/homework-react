import Header from './components/header/header';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Products from './components/products/products'
import ContactUs from './components/contact-us/contact-us';
import ServicesCards from './components/services/services-cards/services-cards';
import './styles/App.css'

function App() {

  const showCardsTitle = true;
  return(
    <div className="App">
      <Header />
      <Services />
      <Products />
      <ContactUs />
      {/* If we want to show the cards without the title in a different place */}
      {showCardsTitle && <h4 className='services-cards-title'>You might be interested</h4 >}
      <ServicesCards />
      <Footer /> 
    </div>
  );

}

export default App
