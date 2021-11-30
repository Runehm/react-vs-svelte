import React, {useState} from 'react'
import './form.scss'

export const Form = () => {

  const initState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }

  const [formState, setFormState] = useState(initState)

  const handleOnChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    alert(`Form submitted!! firstName: ${formState.firstName}, lastName: ${formState.lastName}, email: ${formState.email}, message: ${formState.message}` )
  }

  return (
    <div className="form__wrapper">

      <form className="form">
      <h1>Form</h1>
        <div className="form__section">
          <div className="form__field">
            <label className="form__label">First Name</label>
            <input
              className="form__input"
              id="firstName"
              name="firstName"
              type="text"
              value={formState.firstName}
              onChange={handleOnChange}
            />
          </div>
          <div className="form__field">
            <label className="form__label">Last Name</label>
            <input
              className="form__input"
              id="lastName"
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="form__section">
          <div className="form__field--fullWidth">
            <label className="form__label">Email</label>
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="form__section">
          <div className="form__field--fullWidth">
            <label className="form__label">Message</label>
            <textarea
              className="form__input form__textarea"
              id="message"
              name="message"
              value={formState.message}
              onChange={handleOnChange}
            />
          </div>
        </div>


        <button
          className='button button__ghost button--extraPadding'
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  )
}