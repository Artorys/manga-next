import Button from "../Button";
import style from "./style.module.css"

export default function Navbar(){
    return (
        <header>
            <div>

            </div>
            <nav>
                <ul className={style.navbar__list}>
                    <li>
                        <Button text="Log in"></Button>
                    </li>
                    <li>
                        <Button text="Sign Up"></Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}