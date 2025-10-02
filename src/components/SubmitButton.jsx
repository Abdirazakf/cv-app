import '../styles/SubmitButton.css'

export default function SubmitButton({text, section}) {
    const classes = `submit-button ${section}-button`

    return(
        <button type='submit' className={classes}>
            {text}
        </button>
    )
}