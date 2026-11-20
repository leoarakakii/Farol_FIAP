import './css/style.css';
import { useLocation, useNavigate } from 'react-router-dom';

function SingleContentCardNum({ name, color, type, slug, isAnswered, isCurrent }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const className = [
        type,
        isAnswered && 'is-answered',
        isCurrent && 'is-current',
    ].filter(Boolean).join(' ');

    return (
        <div className={className}
        style={{ backgroundColor: color }} 
        onClick={() => {

        const cleanPath = pathname.replace(/\/$/, "");

        const endsWithNumber = /\/\d+$/.test(cleanPath);

        const newPath = endsWithNumber

        ? cleanPath.replace(/\/\d+$/, `/${slug}`)

        : `${cleanPath}/${slug}`;                 

        navigate(newPath);
        }}>
            {name}
        </div>
    )
}

export default SingleContentCardNum;