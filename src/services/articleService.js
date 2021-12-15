const baseUrl = 'http://localhost:3030/jsonstore';   //free
//const baseUrl = 'http://localhost:3030/data';

export const create = async (articleData, token) => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify(articleData)
    });

    let result = await response.json();

    return result;
};

export const getOne = (articleId) => {
    return fetch(`${baseUrl}/articles/${articleId}`)
        .then(res => res.json());
};

export const getAll = () => {
    return fetch(`${baseUrl}/articles/`)
        .then(res => res.json());
};

export const getLast = async () => {
    let result = await fetch(`${baseUrl}/articles/`)
        .then(res => res.json());
    return Object.values(result).slice(-2);
};


export const update = async (articleId, articleData, token) => {
    let response = await fetch(`${baseUrl}/articles/${articleId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify(articleData)
    });

    let result = await response.json();

    return result;
};

export const remove = (articleId, token) => {
    return fetch(`${baseUrl}/articles/${articleId}`, {
        method: 'DELETE',
        // headers: {
        //     'X-Authorization': token
        // }
    }).then(res => res.json());
};

// export const like = (articleId, article, token) => {
//     return fetch(`${baseUrl}/articles/${articleId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(article)
//     }).then(res => res.json());
// };