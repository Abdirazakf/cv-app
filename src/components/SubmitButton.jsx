import '../styles/SubmitButton.css'

export default function SubmitButton({section}) {
    const classes = `submit-button ${section}-button`
    console.log(section)
    return(
        <button type='submit' className={classes}>
            Submit
        </button>
    )
}