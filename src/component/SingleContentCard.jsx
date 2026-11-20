import './css/style.css';

function SingleContentCard({ name, color, type, slug, page}) {

    return (
        <div className= {`${type}`} 
        style={color ? { '--subject-color': color } : undefined}
        onClick={() => window.location.href = `${page}/${slug}`}>
            <span className="Single-content-card-label">{name}</span>
        </div>
    )
}

export default SingleContentCard;