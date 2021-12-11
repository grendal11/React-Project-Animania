export const getColor = (category) => {
    let color = "success";
    switch (category) {
        case 'water':
        case 'birds':
            color = "primary";
            break;

        case 'reptiles':
        case 'rodents':
            color = "secondary";
            break;

        case 'others':
            color = "danger";
            break;
    }

    return color;
};