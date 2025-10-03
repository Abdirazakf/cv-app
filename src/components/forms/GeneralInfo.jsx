import SubmitButton from '../SubmitButton'

export default function GeneralInfo({data, updateField}) {
    const handleChange = (event) => {
        const {name,value} = event.target
        updateField(name,value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('General info submitted', data)
    }

    return (
        <section className="form-section general-info">
            <h3>General Information</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">
                        Full Name
                        <br/>
                        <input 
                            type="text"
                            name='fullName' 
                            placeholder='John Doe'
                            value={data.fullName}
                            onChange={handleChange}
                            required    
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email
                        <br/>
                        <input 
                            type="email" 
                            name="email"
                            value={data.email}
                            placeholder='johndoe@example.com'
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">
                        Phone Number
                        <br/>
                        <input 
                            type="tel" 
                            name="phoneNumber"
                            value={data.phoneNumber}
                            placeholder='xxx-xxx-xxxx'
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="city">
                        City
                        <br/>
                        <input 
                            type="text"
                            name="city"
                            value={data.city}
                            placeholder='Atlanta'
                            onChange={handleChange}
                            required
                            />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="state">
                        State
                        <br/>
                        <input 
                            type="text" 
                            name='state'
                            value={data.state}
                            placeholder='GA'
                            minLength={2}
                            maxLength={2}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">
                        Linkedin
                        <br/>
                        <input 
                            type="url"
                            name='linkedin'
                            value={data.linkedin}
                            placeholder='www.linkedin.com/john-doe/'
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <SubmitButton text='Submit' section='general-info' />
            </form>
        </section>
    )
}