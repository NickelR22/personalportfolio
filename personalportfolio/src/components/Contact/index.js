import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    emailjs.init('dKQiEcMpdn6Eoubpl')
    const form = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault()
    
        if (isSubmitting) {
            alert("Please wait 30 seconds before submitting again.")
            return
        }

        setIsSubmitting(true)

        emailjs
          .sendForm('service_4l5jwdc','template_bskgt6p', form.current)
          .then(
            () => {
              alert('Message successfully sent!')
              e.preventDefault()
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
          .finally(() => {
            setTimeout(() => {
                setIsSubmitting(false)
            }, 30000)
        })
      }

    return(
        <>
            <div className="container contact-page">
                <div className = 'text-zone'>
                    <h1>Contact Me</h1>
                </div>
                <div className = 'note-zone'>
                    <p>Currently open to work. Feel free to email if you have questions.
                        If form does not work please directly email nranjit@scu.edu</p>
                </div>
            </div>
            <div className = 'contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
        </>
    )
}

export default Contact