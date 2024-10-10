import cls from "./Header.module.scss"
import Nav from "@/widgets/Header/ui/Nav/ui/Nav";

const Header = () => {
    return (
        <header className={cls.header}>
            <Nav/>
        </header>
    );
};

export default Header;