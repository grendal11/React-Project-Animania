import { Image } from 'react-bootstrap';

function NotAuthorized() {
    return (
        <>
            <br />
            <h2 className="text-danger">Не сте оторизирани за това действие!!!</h2>
            <Image src="./images/sad.jpeg" alt="Not Authorized Sad Dog" fluid />
            <br />
        </>
    );
}

export default NotAuthorized;