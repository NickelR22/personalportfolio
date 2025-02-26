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
              alert('Failed to send the message, please try again or email nranjit@scu.edu directly.')
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
                    <p>Currently open to work. Feel free to email if you have questions.</p>
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
                                <button type='submit'>
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                        </div>
                                    </div>
                                    <span>Send</span>
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
        </>
    )
}

export default Contact