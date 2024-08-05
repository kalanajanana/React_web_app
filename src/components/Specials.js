import '../Style/Homepage.css';
import Greek from '../images/greek salad.jpg';
import Bruchetta from '../images/bruchetta.svg';
import Lemon from '../images/lemon dessert.jpg';

function Specials() {
    return (
        <main>
            <div id='specials'>
                <h1>{'Specials'}</h1>
                <button className='reserve' id='onlineb'>{'Online Menu'}</button>
            </div>
            <div id='container'>
                <div id='delivery'>
                    <div id='scroll'>
                        <div className='foods'>
                            <img src={Greek} alt='Greek salad'></img>
                            <div className='menu'>
                                <h3>Greek salad</h3>
                                <h3>$12.99</h3>
                            </div>
                            <div className='order'>
                                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, 
                                    garnished with crunchy garlic and rosemary croutons. 
                                </p>
                                <h4>Order a delivery</h4>
                            </div>
                        </div>
                        <div className='foods'>
                            <img src={Bruchetta} alt='Bruchetta'></img>
                            <div className='menu'>
                                <h3>Bruchetta</h3>
                                <h3>$5.99</h3>
                            </div>
                            <div className='order'>
                                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, 
                                    garnished with crunchy garlic and rosemary croutons. 
                                </p>
                                <h4>Order a delivery</h4>
                            </div>
                        </div>
                        <div className='foods'>
                            <img src={Lemon} alt='Lemon Dessert'></img>
                            <div className='menu'>
                                <h3>Lemon Dessert</h3>
                                <h3>$5.00</h3>
                            </div>
                            <div className='order'>
                                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, 
                                    garnished with crunchy garlic and rosemary croutons. 
                                </p>
                                <h4>Order a delivery</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Specials;
