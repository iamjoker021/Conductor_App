import { useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import { useState } from 'react';
import useFetch from "../utils/useFetch";
import { path } from "../utils/apiPath";

const ChooseRouteAndFare = () => {
    const {bus_id} = useParams();

    const [ticketCount, setTicketCount] = useState(0);
    // const [fare, setFare] = useState(0);

    const { data: stops, isPending, error } = useFetch(...path.getRouteFareForBus(bus_id))

    const [selectedOptionFrom, setSelectionOptionFrom] = useState({});
    const [selectedOptionTo, setSelectionOptionTo] = useState({});

    const stop_filter = (stops, is_from) => {
        if (stops){
            if(is_from){
                return stops.filter(stop => stop.stop_order < (selectedOptionTo.stop_order || 1000))
            } else {
                return stops.filter(stop => (stop.stop_order > (selectedOptionFrom.stop_order || 0)))
            }
        } else {
            return {}
        }
        
    };
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if( (ticketCount * ( selectedOptionTo.fare - selectedOptionFrom.fare ) || 0) > 0 ){
            navigate('/bus/payment-page');
        }
        else {
            alert('Please fill valid info');
        }
    }

    return ( 
        <div className="form from-to">
            <form onSubmit={handleSubmit}>
                <Select
                    onChange={setSelectionOptionFrom}
                    options={stop_filter(stops, true)}
                    placeholder="From"
                />
                <Select
                    onChange={setSelectionOptionTo}
                    options={stop_filter(stops, false)}
                    placeholder="To"
                />
                <label>No. of Tickets: </label>
                <input
                    onChange={(e) => setTicketCount(e.target.value)}
                    type="number"
                    placeholder="Place Number of Tickets"
                    required
                />
                <p>Ticket Fare: { ticketCount * ( selectedOptionTo.fare - selectedOptionFrom.fare ) }</p>
                {(!isPending && selectedOptionFrom.label && selectedOptionTo.label && ticketCount) && <button type="submit">Place Ticket</button>}
                {!(selectedOptionFrom.label && selectedOptionTo.label && ticketCount ) && <button type="submit" disabled>Place Ticket</button>}
                {isPending && <button type="submit" disabled>Loading</button>}
                {error && <div className="error"><p>{ error }</p></div>}
            </form>
        </div>
     );
}
 
export default ChooseRouteAndFare;