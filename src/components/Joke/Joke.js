import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

import { Card, Button } from 'react-bootstrap';
import './Jokes.css';


function Joke({ joke, id }) {
    const { user } = useContext(AuthContext);

    return (
        <>
            <br />
            <Card className={"comment-card border-warning"} >
                <Card.Header className="text-black text-bold border-warning">
                    <i class="far fa-laugh"></i>
                    &nbsp;
                    {joke.name}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {joke.text}
                        {joke.ownerId != user?._id
                            ? <>
                                <div className="stats-buttons">
                                    <span variant="success-outline" className="text-success"><i className="fas fa-thumbs-up"></i> 23</span>
                                    &nbsp; &nbsp;
                                    <span variant="success-outline" className="text-warning"><i class="far fa-laugh"></i> 23</span>
                                    &nbsp; &nbsp;
                                    <span variant="success-outline" className="text-danger"><i className="fas fa-thumbs-down"></i> 23</span>
                                </div>
                            </>
                            : null
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Joke;