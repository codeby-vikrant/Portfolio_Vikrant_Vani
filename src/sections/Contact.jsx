import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const serviceKey = import.meta.env.EMAIL_JS_SERVICE_KEY;
  const templateKey = import.meta.env.EMAIL_JS_TEMPLATE_KEY;
  const publicKey = import.meta.env.EMAIL_JS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        { serviceKey },
        { templateKey },
        {
          from_name: formData.name,
          to_name: "Vikrant",
          from_email: formData.email,
          to_email: "workwithvikrant0111@gmail.com",
          message: formData.message,
        },
        { publicKey }
      );
      setIsLoading(false);
      showAlertMessage(
        "success",
        "Thank you. I will get back to you as soon as possible."
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      showAlertMessage(
        "danger",
        "Ahh, something went wrong. Please try again."
      );
      console.log(error);
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            You can reach out to me anytime for a collaboration of mobile/web
            applications or softwares
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Enter your name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="Enter your email address"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              required
              autoComplete="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            type="submit"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
