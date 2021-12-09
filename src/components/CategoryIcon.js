
export default function CategoryIcon(props) {
    let category = props.category;

    if (props.category == 'dogs') {
        return <i class="fas fa-dog"></i>;

    }

    if (category == 'cats') {
        return <i class="fas fa-cat"></i>;
    }

    if (category == 'birds') {
        return <i class="fas fa-dove"></i>;
    }

    if (category == 'water') {
        return <i class="fas fa-fish"></i>;
    }

    if (category == 'reptiles') {
        return <i class="fas fa-frog"></i>;
    }

    if (category == 'rodents') {
        return <i class="fas fa-otter"></i>;
    }

    return <i class="fas fa-paw"></i>;
}