import { useState } from 'react';
import useFetch from '../utils/useFetch'
import { useNavigate, useParams } from 'react-router-dom';
import { path }  from '../utils/apiPath';
import Select from 'react-select';

const ChooseBus = () => {
    const {city_id} = useParams();

    const {data: bus_list, isPending, error} = useFetch(...path.getBusForCity(city_id))

    const [selectedOption, setSelectionOption] = useState({});

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedOption.label) {
            navigate(`/bus/${selectedOption.value}/route`);
        }
    }

    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <Select 
                    options={bus_list}
                    placeholder="Search your Bus Number"
                    onChange={setSelectionOption}
                    autoFocus
                    isSearchable
                />
                {!isPending && selectedOption.label && <button type="submit">Enter</button>}
                {!selectedOption.label && <button type="submit" disabled>Enter</button>}
                {isPending && <button type="submit" disabled>Loading</button>}
                {error && <div className="error"><p>{ error }</p></div>}
            </form>
        </div>
     );
}
 
export default ChooseBus;