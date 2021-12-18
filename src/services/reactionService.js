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

export const getArticleLikes = async (articleId) => {
    // const query = encodeURIComponent(`articleId="${articleId}"`);

    // return request.get(`${baseUrl}/articleLikes?select=userId&where=${query}`)
    //     .then(res => res.map(x => x.userId));

    let result = await fetch(`${baseUrl}/likes`).then(res => res.json());
    result = Object.values(result).filter(x=>x.articleId == articleId);

    return result;
};