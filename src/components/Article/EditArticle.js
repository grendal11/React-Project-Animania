import { useNavigate, useParams } from 'react-router-dom';
import { useState, useContext } from 'react';

import useArticleState from '../../hooks/useArticleState';

import { AuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as articleService from '../../services/articleService';
import { Form, Button } from 'react-bootstrap';

function EditArticle() {
    const { articleId } = useParams();
    const [article, setArticle] = useArticleState(articleId);

    const [breed, setBreed] = useState(article.canBreed);

    const onSwitchBreed = (e) => {
        setBreed(!breed);
    }

    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    const navigate = useNavigate();

    const onArticleEdit = (e) => {
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

        if (name.length < 1) {
            window.scrollTo(0, 0);
            addNotification('Името е задължително', types.warning);
            return;
        }

        if (description.length < 20) {
            window.scrollTo(0, 0);
            addNotification('Описанието е много кратко. Въведете поне 20 символа', types.warning);
            return;
        }

        articleService.update(article._id,
            {
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
            }, user.accessToken)
            .then(result => {
                addNotification('Промените бяха записани', types.success);
                navigate('/articles');
            })
            .catch(err => {
                addNotification('Възникна грешка. Промените не бяха записани', types.error);
            });
    }

    return (
        <section className="form-container" >
            <Form onSubmit={onArticleEdit} method="POST">
                <br />
                <h2>Редактиране на статия</h2>
                <br />
                <Form.Group className="mb-3 small-element">
                    <Form.Label>Име на животно</Form.Label>
                    <Form.Control type="text" name="name" id="name" defaultValue={article.name} placeholder="Име на животно" />
                </Form.Group>

                <Form.Group className="mb-3 small-element">
                    <Form.Label>Категория</Form.Label>
                    <Form.Select name="category" id="category" defaultValue={article.category}>
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
                    <Form.Control type="text" name="maxAge" id="maxAge" defaultValue={article.maxAge} placeholder="12-14 години" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Изображение</Form.Label>
                    <Form.Control type="text" name="imageUrl" id="imageUrl" defaultValue={article.imageUrl} placeholder="https://..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Размери</Form.Label>
                    <Form.Control as="textarea" rows={3} name="size" id="size" defaultValue={article.size} placeholder="Височина, дължина, тегло ..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" id="description" defaultValue={article.description} placeholder="Описание на животното ..." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Хранене</Form.Label>
                    <Form.Control as="textarea" rows={3} name="food" id="food" defaultValue={article.food} placeholder="Описание ..." />
                </Form.Group>

                <Form.Group className="mb-3" id="canBreed">
                    <Form.Check
                        type="checkbox"
                        label="Подходящо за отглеждане"
                        name="canBreed"
                        className="text-left"
                        defaultChecked={article.canBreed ? "On" : null}                    
                        onChange={onSwitchBreed}
                    />
                </Form.Group>

                { (typeof(breed) == "undefined" ? true : breed) ?
                    <Form.Group className="mb-3">
                        <Form.Label>Отглеждане</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={article.breeding} name="breeding" id="breeding" placeholder="Описание ..." />
                    </Form.Group>
                    : null
                }

                <Form.Group className="mb-3">
                    <Form.Label>Любопитни факти</Form.Label>
                    <Form.Control as="textarea" rows={3} name="facts" id="facts" defaultValue={article.facts} placeholder="Описание ..." />
                </Form.Group>

                <Button variant="success" type="submit">
                    Запиши
                </Button>
            </Form>
        </section>
    );
}

export default EditArticle;