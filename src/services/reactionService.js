const baseUrl = 'http://localhost:3030/jsonstore';   //free
//const baseUrl = 'http://localhost:3030/data';

export const addLike = async (likeData, token) => {
    let response = await fetch(`${baseUrl}/likes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify(likeData)
    });

    let result = await response.json();

    return result;
};

export const getArticleLikesCount = async (articleId) => {
    // const query = encodeURIComponent(`articleId="${articleId}"`);

    // return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
    //     .then(res => res.map(x => x.userId));

    let result = await fetch(`${baseUrl}/likes`).then(res => res.json());

    result = Object.values(result).filter(c => c.articleId == articleId);  

    return result.length;
};

export const getArticleLiked = async (articleId, userId) => {
    // const query = encodeURIComponent(`articleId="${articleId}"`);

    // return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
    //     .then(res => res.map(x => x.userId));

    let result = await fetch(`${baseUrl}/likes`).then(res => res.json());

    result = Object.values(result).filter(c => c.articleId == articleId && c.userId == userId);  

    return result.length;
};