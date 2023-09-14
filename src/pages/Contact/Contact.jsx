import "./Contact.css"
import { useState, useRef } from "react"
import FadeUp from "../../utils/FadeUp"
// import FadeModal from "../../utils/FadeModal"
import emailjs from "@emailjs/browser"
import { ContactArt, InstagramIcon, TwitterIcon, FaceBookIcon, DiscordIcon, GmailIcon } from "../../assets"

const Contact = () => {
    const [msgStatus, setMsgStatus] = useState({ status: false, msg: "" })
    const [copyText, setCopyText] = useState("chiruchirag2001@gmail.com")

    const NameRef = useRef()
    const EmailRef = useRef()
    const MessageRef = useRef()

    const SendMail = async (e) => {
        e.preventDefault();

        const name = NameRef?.current?.value;
        const email = EmailRef?.current?.value;
        const message = MessageRef?.current?.value;

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

        if (mailRes.status !== 200) {
            setMsgStatus({ status: false, msg: "😵 Message not Sent" })
            return
        }

        setMsgStatus({ status: true, msg: "👍 Message Sent!" })
        NameRef.current.value = ""
        EmailRef.current.value = ""
        MessageRef.current.value = ""

        setTimeout(() => {
            setMsgStatus({ status: false, msg: "" })
        }, 5000);
    }

    const CopyMail = () => {
        navigator.clipboard.writeText("chiruchirag2001@gmail.com")
        setCopyText("Copied 👍🏻")
        setTimeout(() => {
            setCopyText("chiruchirag2001@gmail.com")
        }, 2000)
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

            <FadeUp width="100%" className="Contact-Intro flex col">
                <h2 className="gradientText contactGrad">Let's collaborate!</h2>
                <p>Contact me to discuss your web development needs</p>
                <p>or just to say hello. 😉</p>
            </FadeUp>

            <div className="Contact-Container flex">
                <FadeUp className="Contact-Left flex col">
                    <div className="Contact-Social flex">
                        <a href="https://www.facebook.com/ChiragChrg/" className="Contact-Icon facebook" title="Facebook" target="_blank" rel="noreferrer">
                            <img src={FaceBookIcon} alt="FaceBook" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/chiragchrg/" className="Contact-Icon instagram" title="Instagram" target="_blank" rel="noreferrer">
                            <img src={InstagramIcon} alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="mailto:chiruchirag2001@gmail.com" className="Contact-Icon gmail" title="Gmail" target="_blank" rel="noreferrer">
                            <img src={GmailIcon} alt="Gmail" width={30} height={30} />
                        </a>
                        <a href="https://twitter.com/ChrgChirag" className="Contact-Icon twitter" title="Twitter" target="_blank" rel="noreferrer">
                            <img src={TwitterIcon} alt="Twitter" width={30} height={30} />
                        </a>
                        <a href="https://discordapp.com/users/647359627461263390" className="Contact-Icon discord" title="Discord" target="_blank" rel="noreferrer">
                            <img src={DiscordIcon} alt="Discord" width={30} height={30} />
                        </a>
                    </div>
                    <img className="Contact-VectorArt" src={ContactArt} alt="ContactArt" width="400px" />
                    <div className="Contact-EmailId" onClick={CopyMail}>{copyText}</div>
                </FadeUp>

                <FadeUp width="100%" className="Contact-Form flex col">
                    <form onSubmit={SendMail}>
                        <FadeUp width="100%" className="Contact-Input flex col">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your Name" ref={NameRef} />
                            <span className="Contact-InputError">What's your name?</span>
                        </FadeUp>

                        <FadeUp width="100%" className="Contact-Input flex col">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="example@gmail.com" ref={EmailRef} />
                            <span className="Contact-InputError">Enter a valid Email ID</span>
                        </FadeUp>

                        <FadeUp width="100%" className="Contact-Input flex col">
                            <label htmlFor="message">Message</label>
                            <textarea rows={5} id="message" placeholder="Enter your Message" ref={MessageRef} />
                            <span className="Contact-InputError">Whoops! Say somthing.</span>
                        </FadeUp>

                        <FadeUp width="100%" className="Contact-Submit flex">
                            <button className="flex" type="submit">
                                <span>Submit</span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path></svg>
                            </button>

                            <div className={msgStatus.status ? "Contact-MsgStatus" : "Contact-MsgStatus err"}>{msgStatus.msg}</div>
                        </FadeUp>
                    </form>
                </FadeUp>
            </div >
        </section >
    )
}

export default Contact