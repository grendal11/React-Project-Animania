import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as articleService from '../../services/articleService';
import { Form, Button } from 'react-bootstrap';

function CreateArticle() {
    const [breed, setBreed] = useState(false);

    const onSwitchBreed = (e) => {    
        setBreed(!breed);
    }

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onArticleCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let category = formData.get('category');
        let maxAge = formData.get('maxAge');
        let imageUrl = formData.get('imageUrl');
        let size = formData.get('size');
        let description = formData.get('description');
        let food = formData.get('food');
        let canBreed = formData.get('canBreed') == "on" ? true : false;
        let breeding = formData.get('breeding');
        let facts = formData.get('facts');
        let ownerId = user._id;

        articleService.create({
            name,
            category,
            maxAge,
            imageUrl,
            size,
            description,
            food,
            canBreed,
            breeding,
            facts,
            ownerId
        }, user.accessToken)
            .then(result => {
                navigate('/articles');
            })
    }

    return (
        <section className="form-container" >
            <Form onSubmit={onArticleCreate} method="POST">
                <br />
                <h2>Нова статия</h2>
                <br />
                <Form.Group className="mb-3 small-element">
                    <Form.Label>Име на животно</Form.Label>
                    <Form.Control type="text" name="name" id="name" placeholder="Име на животно" />
                </Form.Group>

                <Form.Group className="mb-3 small-element">
                    <Form.Label>Категория</Form.Label>
                    <Form.Select name="category" id="category">
                        <option >Изберете</option>
                        <option value="dogs">Кучета</option>
                        <option value="cats">Котки</option>
                        <option value="water">Водни</option>
                        <option value="birds">Птици</option>
                        <option value="reptiles">Влечуги</option>
                        <option value="rodents">Гризачи</option>
                        <option value="others">Други</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3 small-element">
                    <Form.Label>Максимална възраст</Form.Label>
                    <Form.Control type="text" name="maxAge" id="maxAge" placeholder="12-14 години" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Изображение</Form.Label>
                    <Form.Control type="text" name="imageUrl" id="imageUrl" placeholder="https://..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Размери</Form.Label>
                    <Form.Control as="textarea" rows={3} name="size" id="size" placeholder="Височина, дължина, тегло ..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" id="description" placeholder="Описание на животното ..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Хранене</Form.Label>
                    <Form.Control as="textarea" rows={3} name="food" id="food" placeholder="Описание ..." />
                </Form.Group>

                <Form.Group className="mb-3" id="canBreed">
                    <Form.Check
                        type="checkbox"
                        label="Подходящо за отглеждане"
                        name="canBreed"
                        className="text-left"
                        onChange={onSwitchBreed}
                    />
                </Form.Group>

                {breed ?
                    <Form.Group className="mb-3">
                        <Form.Label>Отглеждане</Form.Label>
                        <Form.Control as="textarea" rows={3} name="breeding" id="breeding" placeholder="Описание ..." />
                    </Form.Group>
                    : null
                }

                <Form.Group className="mb-3">
                    <Form.Label>Любопитни факти</Form.Label>
                    <Form.Control as="textarea" rows={3} name="facts" id="facts" placeholder="Описание ..." />
                </Form.Group>

                <Button variant="success" type="submit">
                    Запиши
                </Button>
            </Form>
        </section>
    );
}

export default CreateArticle;