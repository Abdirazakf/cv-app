import { useState } from 'react'
import GeneralInfo from './forms/GeneralInfo'
import Education from './forms/Education'
import Experience from './forms/Experience'

export default function Main() {
    const [cvData, setData] = useState({
        generalInfo: {
            fullName: '',
            email: '',
            phoneNumber: '',
            city: '',
            state: '',
            linkedin: ''
        },
        education: [{
            id: 1,
            school: '',
            field: '',
            degree: '',
            gradDate: ''
        }],
        experience: [{
            id: 1,
            company: '',
            position: '',
            responsibilities: [],
            startDate: '',
            endDate: ''
        }]
    })

    return (
        <main>
            <h2>Enter Your Info</h2>
            <div className="cv-container">
                <div className="top-cv">
                <GeneralInfo data={cvData.generalInfo}/>
                <Education data={cvData.education}/>
                </div>
                <Experience data={cvData.experience}/>
            </div>
        </main>
    )
}