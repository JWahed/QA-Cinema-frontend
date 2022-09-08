import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import '../../contact.css'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rh704tq',
        'template_pyb7woj',
        form.current,
        '-pI6CaVWLH0eypBgF'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Email Sent!!!')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className='container'>
        <div className='contact-box'>
          <div className='contact'>
            <div className='c-heading'>
              <h2 className>Get In Contact</h2>
              <p>
                Call, Email or Submit the form and one of our team will be in
                touch shortly...
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
              <input
                type='text'
                placeholder='Full Name'
                name='user_name'
                className='contact-form-input'
                required
              />
              <input
                type='email'
                placeholder='Email'
                name='user_email'
                className='contact-form-input'
                required
              />
              <input
                type='text'
                placeholder='Subject'
                name='subject'
                className='contact-form-input'
                required
              />
              <textarea
                name='message'
                placeholder='Type message here...'
                className='contact-in-textarea'
              />
              <button type='submit' className='contact-from-btn'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
