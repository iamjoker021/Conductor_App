import { useEffect, useState } from "react"
import { path }  from '../constant/constant';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const ChooseCity = () => {
    const [data, setData] = useState(null);
    const [selectedOption, setSelectionOption] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedOption.label) {
            navigate(`/${selectedOption.value}/bus`);
        } else {
            setError('Please select a valid City in the DropDown');
        }
    }

    useEffect(() => {
        setData([
            {value: 0, label: "Erode"},
            {value: 1, label: "Chennai"},
            {value: 2, label: "Trichy"}
        ]);
    
        fetch(path.getCity)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw Error('No Cities Found');
                }
            })
            .then((data) => {
                console.log('This is data: ',data.city_list);
                setData(data.city_list);
                setError(null);
                setIsPending(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
            })
    }, [])

    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <Select 
                    options={data}
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