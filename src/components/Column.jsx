import { words } from '../mock/Data.js'
import Card from './Card'
import CardLoader from './CardLoader'

const Column = ({ title, loading }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {words
                    .filter((item) => item.status === title)
                    .map((item, i) =>
                        loading ? (
                            <CardLoader />
                        ) : (
                            <Card item={item} key={i} />
                        )
                    )}
            </div>
        </div>
    )
}

export default Column
