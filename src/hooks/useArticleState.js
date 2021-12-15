import { useState, useEffect } from 'react';

import * as articleService from '../services/articleService';

const useArticleState = (articleId) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        articleService.getOne(articleId)
            .then(articleResult => {
                setArticle(articleResult);
            })
    }, [articleId]);

    return [
        article,
        setArticle
    ]
};

export default useArticleState;