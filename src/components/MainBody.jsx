import { useState } from 'react'
import GeneralInfo from './forms/GeneralInfo'
import Education from './forms/Education'
import Experience from './forms/Experience'
import CVPreview from "./CVPreview"

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
            responsibilities: '',
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

    const addEducation = () => {
        const newId = Math.max(...cvData.education.map(entry => entry.id)) + 1
        setData(prevData => ({
            ...prevData,
            education: [...prevData.education, {
                id: newId,
                school: '',
                field: '',
                degree: '',
                gradDate: ''
            }]
        }))
    }

    const removeEducation = (id) => {
        if (cvData.education.length > 1) {
            setData(prevData => ({
                ...prevData,
                education: prevData.education.filter(edu => edu.id !== id)
            }))
        }
    }

    const updateExperience = (name, value) => {
        setData(prevData => ({
            ...prevData,
            experience: [{
                ...prevData.experience[0],
                [name]: value
            }]
        }))
    } 

    const addExperience = () => {
        const newId = Math.max(...cvData.education.map(entry => entry.id)) + 1
        setData(prevData => ({
            ...prevData,
            experience: [...prevData.experience, {
                id: newId,
                company: '',
                position: '',
                responsibilities: '',
                startDate: '',
                endDate: ''
            }]
        }))
    }

    const removeExperience = (id) => {
        if (cvData.experience.length > 1) {
            setData(prevData => ({
                ...prevData,
                experience: prevData.experience.filter(exp => exp.id !== id)
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('CV data submitted: ', cvData)
    }

    return (
        <main>
            <h2>Enter Your Info</h2>
            <form onSubmit={handleSubmit} id="cv-form">
                <div className="cv-container">
                    <div className="form-column">
                        <div className="top-cv">
                            <GeneralInfo data={cvData.generalInfo} updateField={updateGeneralInfo}/>
                            <Education data={cvData.education[0]} updateField={updateEducation}/>
                        </div>
                        <Experience data={cvData.experience[0]} updateField={updateExperience}/>
                    </div>

                    <div className="preview-column">
                        <div className="cv-preview">
                            <h3>CV Preview</h3>
                            <CVPreview data={cvData} />
                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
}