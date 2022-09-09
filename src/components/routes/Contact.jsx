import '../contactComponents/contact.css'
import Header from '../Navigation/header/Header'
import Footer from '../Navigation/footer/Footer'
import ContactForm from '../contactComponents/ContactForm'
import ContactInfo from '../contactComponents/ContactInfo'

function Contact() {
  return (
    <>
      <Header />
      <br />
      <br />
      <h1>Contact</h1>
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
