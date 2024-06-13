import { useParams } from "react-router-dom";

const ChooseRouteAndFare = () => {
    const {bus_id} = useParams();

    return ( 
        <div className="form">
            <p>Choose Route Fare page, BusID: { bus_id } </p>
        </div>
     );
}
 
export default ChooseRouteAndFare;