import { Image } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import sadImage from './sad.jpeg';

function NotAuthorized() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/login");
    }, 5000);

    return (
        <>
            <br />
            <h2 className="text-danger">Не сте оторизирани за това действие!!!</h2>
            <Image src={sadImage} alt="Not Authorized Sad Dog" fluid />
            <br />
        </>
    );
}

export default NotAuthorized;