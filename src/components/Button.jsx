import '../styles/SubmitButton.css'

export default function SubmitButton({type, text, section, formId}) {
    return(
        <button type={type} className='submit-button' id={section} form={formId}>
            {text}
        </button>
    )
}