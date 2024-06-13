import { useState } from 'react';
import useFetch from '../utils/useFetch'
import { useNavigate } from 'react-router-dom';
import { path }  from '../constant/constant';
import Select from 'react-select';

const ChooseCity = () => {
    const [selectedOption, setSelectionOption] = useState({});
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedOption.label) {
            navigate(`/${selectedOption.value}/bus`);
        }
    }

    const { data: city, isPending, error } = useFetch(path.getCity)

    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <Select 
                    options={city}
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