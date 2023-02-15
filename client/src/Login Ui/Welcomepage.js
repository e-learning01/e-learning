import './Welcomepage.css';
import Header from './Header.js'
import Footer from './Footer.js'

const Welcomepage = () => {
  return (
<div> 
<Header/>
  <div>
    <div className='sub-main'>
      <h1 className='headline'>Keep Learning.</h1>
      <h3 className='subline'> Learn, discover, think, and get courses from experts on many fields.</h3>
      <button>Get Started</button>
    </div>
  </div>
<Footer/>
</div>

  );
}

export default Welcomepage;
