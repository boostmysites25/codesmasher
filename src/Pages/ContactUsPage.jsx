import { useForm, Controller } from "react-hook-form";
import MapComponent from "../Components/MapComponent";
import { useState } from "react";
import { companyDetails } from "../util/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";

const ContactUsPage = () => {
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (spinner) return;

    // Validate phone number
    if (!values.phoneNumber || values.phoneNumber.length < 5) {
      setError("phoneNumber", {
        type: "manual",
        message: "Phone number is required",
      });
      return;
    }

    setSpinner(true);

    var emailBody = "Name: " + values.fullName + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: +" + values.phoneNumber + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: companyDetails.email,
      name: companyDetails?.name || "CodeSmasher",
      subject: values.subject,
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="min-h-screen dark:bg-darkblack text-white flex flex-col items-center justify-center pt-[10rem] px-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="main-title mb-8" data-aos="fade-right">
              Get in Touch
            </h1>
            <div className="space-y-4 desc" data-aos="fade-right">
              <p>Phone: {companyDetails.phone}</p>
              <p>Email: {companyDetails.email}</p>
              <p>Office Address: {companyDetails.address}</p>
            </div>
          </div>

          <MapComponent />
        </div>

        <div className="w-full max-w-2xl mx-auto paddingbottom">
          <h2 className="main-title mb-8 text-center" data-aos="fade-up">
            Schedule a Consultation
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <input
                  data-aos="fade-right"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  data-aos="fade-left"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div data-aos="fade-right" className="space-y-2">
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
                          "p-3 !pl-10 rounded-xl bg-slate-800 text-white border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
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
                <input
                  data-aos="fade-left"
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <textarea
                data-aos="fade-up"
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                rows="5"
                className="p-3 rounded-xl bg-slate-800 text-white border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={spinner}
              className={`w-full ${
                spinner ? "opacity-80 cursor-not-allowed" : ""
              } bg-primary hover:bg-sky-800 text-white py-3 rounded-xl transition-colors`}
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
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
