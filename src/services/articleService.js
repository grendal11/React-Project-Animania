const baseFreeUrl = 'http://localhost:3030/jsonstore';
const baseUrl = 'http://localhost:3030/data';

export const create = async (articleData, token) => {
    let response = await fetch(`${baseFreeUrl}/articles`, {
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