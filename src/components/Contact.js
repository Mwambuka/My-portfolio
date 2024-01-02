import './Contact.css'

export const Contact = () => {
    return (
        <div className="contact-wrapper" id='contact'>
            <div className="contact__header">
                <h2 className="contact__title">Contact</h2>
            </div>
            <div className="contact-me">
                <div className="contact__body">
                    <div className="phone">
                        <h3>Email:</h3>
                        <p className="contact__text">bertinmwambuka@gmail.com</p>
                    </div>
                    <div className="phone">
                        <h3>Phone:</h3>
                        <p className="contact__text">+91 81254 72153</p>
                        <p className="contact__text">+250 798 904 755</p>
                    </div>
                </div>
            </div>
        </div>
)}
