import SingleContentCard from './SingleContentCard';
import './css/style.css';

function SingleContentCardWrapper({ items, className, type, page}) {
    return (
        <div className={`${className}`}>
            {items.map((item) => (
                <SingleContentCard key={item.id} name={item.name} color={item.color} type={`${type}`} slug={item.slug} page={page} />
            ))}
        </div>
    )
}

export default SingleContentCardWrapper;