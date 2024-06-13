import { useState } from 'react';
import useFetch from '../utils/useFetch'
import { useNavigate } from 'react-router-dom';
import { path }  from '../utils/apiPath';
import Select from 'react-select';

const ChooseCity = () => {
    const {data: city_list, isPending, error} = useFetch(path.getCity(), 'city_list')

    const [selectedOption, setSelectionOption] = useState({});

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedOption.label) {
            navigate(`/city/${selectedOption.value}/bus`);
        }
    }

    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <Select 
                    options={city_list}
                    placeholder="Search the City"
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
 
export default ChooseCity;