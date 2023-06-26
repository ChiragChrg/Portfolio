import "./Contact.css"
import { useState, useRef } from "react"
import FadeUp from "../../utils/FadeUp"
import emailjs from "@emailjs/browser"
import { ContactArt, InstagramIcon, TwitterIcon, FaceBookIcon, DiscordIcon, GmailIcon } from "../../assets"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const NameRef = useRef()
    const EmailRef = useRef()
    const MessageRef = useRef()

    const SendMail = async (e) => {
        e.preventDefault();

        const emailValidatorRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailValidatorRegex.test(email);

        if (name.length <= 0) {
            NameRef.current.nextSibling.classList.add("isError")
            return
        } else NameRef.current.nextSibling.classList.remove("isError")

        if (email.length <= 0 || !isValidEmail) {
            EmailRef.current.nextSibling.classList.add("isError")
            return
        } else EmailRef.current.nextSibling.classList.remove("isError")

        if (message.length <= 0) {
            MessageRef.current.nextSibling.classList.add("isError")
            return
        } else MessageRef.current.nextSibling.classList.remove("isError")

        let templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        }

        const mailRes = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
    }

    return (
        <section id="contact" className="Contact-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening flex">
                    <span>{"<"}</span>
                    <p>Contact</p>
                    <span>{"/>"}</span>
                </h1>
            </FadeUp>

            <h2 className="flex col">
                <p className="gradientText contactGrad">Let's collaborate!</p>
                <p>Contact me to discuss your web development needs</p>
                <p>or just to say hello.</p>
            </h2>

            <div className="Contact-Container flex">
                <div className="Contact-Left flex col">
                    <div className="Contact-Social flex">
                        <a href="https://www.facebook.com/ChiragChrg/" className="Contact-Icon facebook" title="Facebook" target="_blank" rel="noreferrer">
                            <img src={FaceBookIcon} alt="FaceBook" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/chiragchrg/" className="Contact-Icon instagram" title="Instagram" target="_blank" rel="noreferrer">
                            <img src={InstagramIcon} alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="mailto:chiruchirag2001@gmail.com" className="Contact-Icon Gmail" title="Gmail" target="_blank" rel="noreferrer">
                            <img src={GmailIcon} alt="Gmail" width={30} height={30} />
                        </a>
                        <a href="https://twitter.com/ChrgChirag" className="Contact-Icon twitter" title="Twitter" target="_blank" rel="noreferrer">
                            <img src={TwitterIcon} alt="Twitter" width={30} height={30} />
                        </a>
                        <a href="https://discordapp.com/users/647359627461263390" className="Contact-Icon discord" title="Discord" target="_blank" rel="noreferrer">
                            <img src={DiscordIcon} alt="Discord" width={30} height={30} />
                        </a>
                    </div>
                    <img src={ContactArt} alt="ContactArt" width="400px" />
                </div>

                <form className="Contact-Form flex col" onSubmit={SendMail}>
                    <div className="Contact-Input flex col">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} ref={NameRef} />
                        <span className="Contact-InputError">What's your name?</span>
                    </div>

                    <div className="Contact-Input flex col">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} ref={EmailRef} />
                        <span className="Contact-InputError">Enter a valid Email ID</span>
                    </div>

                    <div className="Contact-Input flex col">
                        <label htmlFor="message">Your Message</label>
                        <textarea rows={5} id="message" onChange={(e) => setMessage(e.target.value)} ref={MessageRef} />
                        <span className="Contact-InputError">Whoops! Say somthing.</span>
                    </div>

                    <button className="Contact-Submit flex" type="submit">
                        <span>Submit</span>
                    </button>
                </form >
            </div >

            <div id="Contact-Vector">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="visual" version="1.1" viewBox="0 321.18 960 219.82">
                    <path d="M0 389L26.7 371.8C53.3 354.7 106.7 320.3 160 321.2C213.3 322 266.7 358 320 386C373.3 414 426.7 434 480 419.5C533.3 405 586.7 356 640 339.7C693.3 323.3 746.7 339.7 800 362.3C853.3 385 906.7 414 933.3 428.5L960 443L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="transparent" />
                    <path d="M0 355L26.7 350C53.3 345 106.7 335 160 347.8C213.3 360.7 266.7 396.3 320 421.2C373.3 446 426.7 460 480 466.2C533.3 472.3 586.7 470.7 640 453.2C693.3 435.7 746.7 402.3 800 400.7C853.3 399 906.7 429 933.3 444L960 459L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#0B0619" />
                    <path d="M0 505L26.7 502.2C53.3 499.3 106.7 493.7 160 484.5C213.3 475.3 266.7 462.7 320 444.2C373.3 425.7 426.7 401.3 480 409C533.3 416.7 586.7 456.3 640 475C693.3 493.7 746.7 491.3 800 479.3C853.3 467.3 906.7 445.7 933.3 434.8L960 424L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#140731" />
                    <path d="M0 501L26.7 498C53.3 495 106.7 489 160 490C213.3 491 266.7 499 320 501.3C373.3 503.7 426.7 500.3 480 491.3C533.3 482.3 586.7 467.7 640 464.7C693.3 461.7 746.7 470.3 800 469.3C853.3 468.3 906.7 457.7 933.3 452.3L960 447L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z" fill="#1E004C" />
                </svg>
            </div>
        </section >
    )
}

export default Contact