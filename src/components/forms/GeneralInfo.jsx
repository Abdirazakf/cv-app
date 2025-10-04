export default function GeneralInfo({data, updateField}) {
    const handleChange = (event) => {
        const {name,value} = event.target
        updateField(name,value)
    }

    return (
        <section className="form-section general-info">
            <h3>General Information</h3>
            <div className="form-group">
                <label htmlFor="fullName">
                    Full Name
                    <br/>
                    <input 
                        type="text"
                        name='fullName'
                        id='fullName' 
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
                        id='email'
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
                        id='phoneNumber'
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
                        id='city'
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
                        id='state'
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
                    Linkedin (Optional)
                    <br/>
                    <input 
                        type="url"
                        name='linkedin'
                        id='linkedin'
                        value={data.linkedin}
                        placeholder='www.linkedin.com/john-doe/'
                        onChange={handleChange}
                    />
                </label>
            </div>
        </section>
    )
}