import { Link } from 'react-router-dom';

const Home = () => {

    return ( 
        <div className="button">
            <Link>Show You Tikcets</Link>
            <Link to="/city">Place Your Tickets</Link>
        </div>
     );
}
 
export default Home;