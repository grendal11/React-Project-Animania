import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState, useEffect } from 'react';
import * as jokeService from '../../services/jokeService';
import { Card, Button } from 'react-bootstrap';
import './Jokes.css';


function LastJoke() {
    const { user } = useContext(AuthContext);

    const [last, setLast] = useState([]);

    useEffect(() => {
        jokeService.getLast()
            .then(res => {
                setLast(res[0]);
            });
    }, []);

    return (
        <>
            <Card className="joke-card border-warning" >
                <Card.Header className="text-black text-bold border-warning text-left">
                    <i class="far fa-laugh"></i>
                    &nbsp;
                    {last.name}
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-left">
                        {last.text}
                        {last.ownerId != user?._id
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
                        <Button variant="warning-outline" className="text-danger" size="sm" href={'/jokes'}>Виж всички</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default LastJoke;