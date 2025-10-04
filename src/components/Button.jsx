import '../styles/Button.css'

export default function Button({type, text, section, formId, onClick, variant = 'primary', title}) {
    const className = variant === 'remove' ? 'remove-button' : 
                      variant === 'add' ? 'add-button' : 
                      'submit-button'
    
    return(
        <button 
            type={type} 
            className={className} 
            id={section} 
            form={formId}
            onClick={onClick}
            title={title}
        >
            {text}
        </button>
    )
}