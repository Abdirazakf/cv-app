import Button from "./Button";
import '../styles/Button.css'

export default function Header() {
    return(
        <header>
            <h1>Create Your CV</h1>
            <div className="header-right">
                <Button type='submit' text='Generate CV' section='header' formId='cv-form' />
            </div>
        </header>
    )
}