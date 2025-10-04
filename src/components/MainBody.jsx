import { useState } from 'react'
import SubmitButton from './SubmitButton'
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

    const updateGeneralInfo = (name, value) => {
        setData(prevData => ({
            ...prevData,
            generalInfo: {
                ...prevData.generalInfo,
                [name]: value
            }
        }))
    }

    const updateEducation = (name, value) => {
        setData(prevData => ({
            ...prevData,
            education: [{
                ...prevData.education[0],
                [name]: value
            }]
        }))
    }

    return (
        <main>
            <h2>Enter Your Info</h2>
            <div className="cv-container">
                <div className="top-cv">
                <GeneralInfo data={cvData.generalInfo} updateField={updateGeneralInfo}/>
                <Education data={cvData.education[0]} updateField={updateEducation}/>
                </div>
                <Experience data={cvData.experience}/>
            </div>
        </main>
    )
}