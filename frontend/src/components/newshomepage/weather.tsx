
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { GetList } from '../actions/weatherget';

const Weather: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetList());
        console.log("UseEffect done:");

    }, []); 

    return(
        <>
        <h1 >Weather page</h1>
        </>
    )


};
export default Weather;