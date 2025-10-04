import '../styles/resume.css'

export default function CVPreview({data}) {
    const {generalInfo, education, experience} = data

    return(
        <div className="resume-preview">
            <h1>{generalInfo.fullName || 'Your Name'}</h1>

            <div className="header-info">
                <ul>
                    <li>{generalInfo.city && generalInfo.state ? `${generalInfo.city}, ${generalInfo.state}` : 'City, State'}</li>
                    <li>{generalInfo.phoneNumber || '(555) 123-4567'}</li>
                    <li>{generalInfo.email || 'email@example.com '}</li>
                    {generalInfo.linkedin && (
                        <li>
                            <a href={`https://${generalInfo.linkedin}`} target='_blank' rel='noreferrer noopener'>
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
                                <span>{edu.gradDate ? new Date(edu.gradeDate).toLocaleDateString('en-US', {month:'long', year: 'numeric'}) : ''} </span>
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
                                <span><strong>{exp.position}</strong> | {exp.company}</span>
                                <span>
                                    {exp.startDate && exp.endDate ?
                                        `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`
                                        : ''
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
                            <div className="vertical-spacer"></div>
                        </div>
                    ))}
                
                </>
            )}
        </div>
    )
}