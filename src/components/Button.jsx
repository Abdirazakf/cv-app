import '../styles/Button.css'

export default function Button({type = 'button', text, section, formId, onClick, variant = 'submit'}) {
    const className = variant === 'submit' ? 'submit-button' : 
                      variant === 'add' ? 'add-button' : 
                      variant === 'remove' ? 'remove-button' : 'submit-button'
    
    return(
        <button 
            type={type} 
            className={className} 
            id={section} 
            form={formId}
            onClick={onClick}
        >
            {text}
        </button>
    )
}