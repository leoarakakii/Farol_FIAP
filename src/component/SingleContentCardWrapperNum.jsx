import SingleContentCardNum from './SingleContentCardNum';
import './css/style.css';

function SingleContentCardWrapperNum({
    items,
    className,
    type,
    page,
    answeredIds = [],
    currentId,
}) {
    return (
        <div className={`${className}`}>
            {items.map((item) => (
                <SingleContentCardNum
                    key={item.id}
                    name={item.name}
                    color={item.color}
                    type={`${type}`}
                    slug={item.slug}
                    page={page}
                    isAnswered={answeredIds.includes(item.id)}
                    isCurrent={item.id === currentId}
                />
            ))}
        </div>
    )
}

export default SingleContentCardWrapperNum;