
const baseUrl = 'http://localhost:3030/jsonstore';   //free
//const baseUrl = 'http://localhost:3030/data';


export const create = async (jokeData, token) => {
    let response = await fetch(`${baseUrl}/jokes`, {
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

export const getOne = (jokeId) => {
    return fetch(`${baseUrl}/jokes/${jokeId}`)
        .then(res => res.json());
}

export const getAll = () => {
    return fetch(`${baseUrl}/jokes/`)
        .then(res => res.json());
};

export const getLast = async () => {
    let result = await fetch(`${baseUrl}/jokes/`)
        .then(res => res.json());
    return Object.values(result).slice(-1);
};


export const remove = (jokeId, token) => {
    return fetch(`${baseUrl}/jokes/${jokeId}`, {
        method: 'DELETE',
        // headers: {
        //     'X-Authorization': token
        // }
    }).then(res => res.json());
};

// export const like = (jokeId, joke, token) => {
//     return fetch(`${baseUrl}/jokes/${jokeId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(joke)
//     }).then(res => res.json());
// };