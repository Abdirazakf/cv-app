import SubmitButton from "./SubmitButton";
import '../styles/SubmitButton.css'

export default function Header() {
    return(
        <header>
            <h1>Create Your CV</h1>
            <div className="header-right">
                <SubmitButton text='Generate CV' section='header' />
            </div>
        </header>
    )
}