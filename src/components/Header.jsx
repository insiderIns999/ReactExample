import Button from './Button';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">SkyWords</div>
            <div className="header__actions">
                <Button>Сменить тему</Button>
                <Button>Выйти</Button>
            </div>
        </header>
    );
};

export default Header;
