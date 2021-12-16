const baseUrl = 'http://localhost:3030/jsonstore';   //free
//const baseUrl = 'http://localhost:3030/data';

export const create = async (commentData, token) => {
    let response = await fetch(`${baseUrl}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify(commentData)
    });

    let result = await response.json();

    return result;
};

export const getCountByArticle = async (articleId) => {
    // return fetch(`${baseUrl}/comments?where=articleId%3D%22{articleId}%22&distinct=_id&count`)
    //     .then(res => res.json());
    let result = await fetch(`${baseUrl}/comments`).then(res => res.json());

    result = Object.values(result).filter(c => c.articleId == articleId);    

    return result.length;
};

export const getComments = (articleId) => {
    // return fetch(`${baseUrl}/comments?where=articleId%3D%22{articleId}%22`)
    //     .then(res => res.json());
    return fetch(`${baseUrl}/comments`)
        .then(res => res.json())
        .then(res => Object.values(res))
        .then(res => res.filter(c => c.articleId == articleId));    
};


export const remove = (commentId, token) => {
    return fetch(`${baseUrl}/comments/${commentId}`, {
        method: 'DELETE',
        // headers: {
        //     'X-Authorization': token
        // }
    }).then(res => res.json());
};
