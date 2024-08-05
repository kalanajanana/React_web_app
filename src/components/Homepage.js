import img from '../images/restauranfood.jpg'
import '../Style/Homepage.css';
import Footer from './Footer';
import Specials from './Specials';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reservation');
  };
    return(
    <>
        <header>
            <div id='content'>
                <h1>{'Little Lemon'}</h1>
                <h3>{'Chicago'}</h3>
                <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                <button className='reserve' onClick={handleClick}>{'Reserve a Table'}</button>
            </div>
            <div id='image'>
            <a><img src={img} alt='Chef' id="chef"></img></a>
            </div>
        </header>
        <Specials/>
        <Footer/>
    </>
    );
}
export default Home;