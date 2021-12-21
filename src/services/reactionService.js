const baseUrl = 'http://localhost:3030/jsonstore';   //free
//const baseUrl = 'http://localhost:3030/data';

export const addLike = async (likeData, token) => {
    let response = await fetch(`${baseUrl}/articleLikes`, {
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

    let result = await fetch(`${baseUrl}/articleLikes`).then(res => res.json());

    result = Object.values(result).filter(c => c.articleId == articleId);  

    return result.length;
};

export const getArticleLiked = async (articleId, userId) => {
    // const query = encodeURIComponent(`articleId="${articleId}"`);

    // return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
    //     .then(res => res.map(x => x.userId));

    let result = await fetch(`${baseUrl}/articleLikes`).then(res => res.json());

    result = Object.values(result).filter(c => c.articleId == articleId && c.userId == userId);  

    return result.length;
};

export const addReaction = async (jokeData, token) => {
    let response = await fetch(`${baseUrl}/jokeReactions`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify(jokeData)
    });

    let result = await response.json();

    return result;
};

export const getJokeReacted = async (jokeId, userId) => {
   
    let result = await fetch(`${baseUrl}/jokeReactions`).then(res => res.json());

    result = Object.values(result).filter(x => x.jokeId == jokeId && x.userId == userId);  

    return result.length;
};

export const getJokeReactions = async (jokeId) => {
   
    let result = await fetch(`${baseUrl}/jokeReactions`).then(res => res.json());

    result = Object.values(result).filter(x => x.jokeId == jokeId);  

    let likes = result.filter(x => x.reactionType == "like").length;
    let laughs = result.filter(x => x.reactionType == "laugh").length;
    let dislikes = result.filter(x => x.reactionType == "dislike").length;

    return {likes, laughs, dislikes};
};