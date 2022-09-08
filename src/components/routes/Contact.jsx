import '../../contact.css'
import Header from '../Navigation/Header/Header'
import Footer from '../Navigation/Footer/Footer'
import ContactForm from '../contactComponents/ContactForm'
import ContactInfo from '../contactComponents/ContactInfo'

function Contact() {
  return (
    <>
      <Header />
      <br />
      <br />
      <h1>Contact</h1>
      <br />
      <br />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
