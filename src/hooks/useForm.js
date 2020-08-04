import {useState} from 'react';

export const useForm = (initState = {}) => {

    const [values, setValues] = useState(initState);

    const handleInputChanged = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChanged];
}
