import '../styles/SubmitButton.css'

export default function SubmitButton({text, section}) {
    return(
        <button type='submit' className='submit-button' id={section}>
            {text}
        </button>
    )
}