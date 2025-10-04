import '../styles/resume.css'

export default function CVPreview({ data }) {
    const { generalInfo, education, experience } = data

    const formatDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    }

    const formatShortDate = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }

    return (
        <div className="resume-preview">
            <h1>{generalInfo.fullName || 'YOUR NAME'}</h1>
            
            <div className="headerInfo">
                <ul>
                    {(generalInfo.city || generalInfo.state) && (
                        <li>{generalInfo.city && generalInfo.state ? `${generalInfo.city}, ${generalInfo.state}` : 'City, State'}</li>
                    )}
                    {generalInfo.phoneNumber && <li>{generalInfo.phoneNumber}</li>}
                    {generalInfo.email && <li>{generalInfo.email}</li>}
                    {generalInfo.linkedin && (
                        <li>
                            <a href={`https://${generalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                                {generalInfo.linkedin}
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            <div className="vertical-spacer"></div>

            {education && education.length > 0 && education[0].school && (
                <>
                    <h2>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index}>
                            <h3>
                                <span>
                                    <strong>{edu.school}</strong> - {edu.field}, {edu.degree}
                                </span>
                                <span className="spacer"></span>
                                <span>{formatDate(edu.gradDate)}</span>
                            </h3>
                        </div>
                    ))}
                    <div className="vertical-spacer"></div>
                </>
            )}

            {experience && experience.length > 0 && experience[0].company && (
                <>
                    <h2>Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index}>
                            <h3>
                                <span>
                                    <strong>{exp.position}</strong> | {exp.company}
                                </span>
                                <span className="spacer"></span>
                                <span>
                                    {exp.startDate && exp.endDate && 
                                        `${formatShortDate(exp.startDate)} - ${formatShortDate(exp.endDate)}`
                                    }
                                </span>
                            </h3>
                            {exp.responsibilities && (
                                <ul>
                                    {exp.responsibilities.split('\n').filter(r => r.trim()).map((resp, idx) => (
                                        <li key={idx}><p>{resp}</p></li>
                                    ))}
                                </ul>
                            )}
                            {index < experience.length - 1 && <div className="vertical-spacer"></div>}
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}