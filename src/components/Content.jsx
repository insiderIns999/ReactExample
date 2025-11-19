import Button from './Button'
import Column from './Column'
import Loader from './Loader'

const Content = ({ loading }) => {
    return (
        <div className="container">
            <div>
                {['Новое', 'В процессе', 'Выучено'].map((title, i) => (
                    <Column loading={loading} title={title} key={i} />
                ))}
                <div id="card-wrapper"></div>
            </div>
            <div>
                <div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <Button type="secondary" text="Добавить слово" />
                    )}

                    {loading ? (
                        <Loader />
                    ) : (
                        <Button type="secondary" text="Добавить тему" />
                    )}
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <Button text="Начать тренировку" />
                )}
            </div>
        </div>
    )
}

export default Content
