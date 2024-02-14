import { useState, useRef } from 'preact/hooks'
import emailjs from "@emailjs/browser"
import { Loader2Icon, SendHorizonalIcon } from 'lucide-preact'

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: any) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef?.current?.value as string;
        const email = EmailRef?.current?.value as string;
        const message = MessageRef?.current?.value as string;

        let templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        }

        try {
            setisLoading(true)
            const mailRes = await emailjs.send(
                import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
                import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
            );

            if (mailRes.status !== 200) {
                throw new Error("😵 Message not Sent")
            }

            setMailStatus({ status: true, message: "👍 Message Sent!" })
            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""

        } catch (error: any) {
            setMailStatus({ status: false, message: error.message })
        } finally {
            setTimeout(() => {
                setisLoading(false)
                setMailStatus({ status: false, message: "" })
            }, 3000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:min-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 lg:px-20 rounded-md"
                    type="submit"
                >
                    {
                        isLoading ? (
                            <>
                                <span>Sending</span>
                                <Loader2Icon className="animate-spin" />
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <SendHorizonalIcon />
                            </>
                        )
                    }
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm