import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { companyDetails } from "../util/constant";

const PopupContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown") === "true";

    if (!popupShown) {
      // First time visitor - show after 1 minute
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("popupShown", "true");
      }, 60000);

      return () => clearTimeout(timer);
    } else {
      // Returning visitor - show every 2 minutes after closing
      const interval = setInterval(() => {
        setIsOpen(true);
      }, 120000);

      return () => clearInterval(interval);
    }
  }, []);

  const onSubmit = async (values) => {
    if (spinner) return;

    if (!values.phoneNumber || values.phoneNumber.length < 5) {
      setError("phoneNumber", {
        type: "manual",
        message: "Phone number is required",
      });
      return;
    }

    setSpinner(true);

    try {
      const emailBody = `Name: ${values.fullName}\n\nEmail: ${values.email}\n\nPhone: +${values.phoneNumber}\n\nMessage:\n${values.message}`;

      const payload = {
        to: companyDetails.email,
        name: companyDetails.name,
        subject: "Contact Form Submission",
        body: emailBody,
      };

      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const res = await response.json();

      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Thank you! We'll contact you soon.");
        reset();
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-h-[98vh] max-w-md overflow-scroll">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Let's Talk About Your Project
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                {...register("fullName", { required: "Full Name is required" })}
                className="p-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field: { ref, ...field } }) => (
                  <PhoneInput
                    {...field}
                    inputRef={ref}
                    placeholder="Enter your phone number"
                    country="in"
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      className:
                        "p-3 !pl-10 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
                    }}
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your project or needs..."
                rows="4"
                {...register("message", { required: "Message is required" })}
                className="p-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={spinner}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
                spinner ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {spinner ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Get Free Consultation"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupContactForm;
