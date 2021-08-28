import React, { useState } from "react";
import FormManager from "../../../helper/FormManager";
import Navbar from "../../navbar/Navbar";
import usePost from "../../../services/usePost";
import styles from "./Contact.module.scss";

function Contact() {
  const [_message, set_message] = useState("");
  const [doPost] = usePost();

  const handleSubmit = (values: any) => {
    console.log("Register handleSubmit");
    console.log(values);

    doPost("contact", values, (data: string) => {
      if (data === "new") {
        set_message("Submission successful. Thank you for your interest!");
      } else {
        set_message("Your email is already in the database.");
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className={`banner`}>
        <h1>Fixing Wealth Inequality</h1>
        <h2>Contact Page</h2>
      </div>

      <div className={`${styles.preword}`}>
        <p>
          Thank you for reading or listening to the Prosperity Manifesto. If you
          would like to show your support or interest for my endeavour against
          the wealth gap, and receive news of my next milestone, please leave
          your contact information below.
        </p>
        <p>
          If there is any issue with the form below, you can also email me at
          sean@theprosperitymanifesto.com.
        </p>
        <p>Your data will not be shared, or used for spamming purpose.</p>

        <p>~ Sean</p>
      </div>

      <FormManager
        initialValues={{ name: "", email: "", message: "", hdyh: "" }}
      >
        {({ values, setValue, clearValue }: any) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(values);
              clearValue();
            }}
          >
            <div className={`flex_center ${styles.boxes}`}>
              <label htmlFor="name">Name</label>
              <input
                required
                name="name"
                placeholder="50 character max"
                value={values.name}
                type="text"
                maxLength={50}
                onChange={(e) => {
                  setValue("name", e.target.value);
                }}
              />
              <label htmlFor="email">Email</label>
              <input
                required
                name="email"
                placeholder="100 character max"
                maxLength={100}
                value={values.email}
                type="email"
                onChange={(e) => {
                  setValue("email", e.target.value);
                }}
              />
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                name="message"
                placeholder="500 character max"
                maxLength={500}
                value={values.message}
                onChange={(e) => {
                  setValue("message", e.target.value);
                }}
              />

              <label htmlFor="hdyh">
                How did you hear about this? (Optional)
              </label>
              <input
                name="hdyh"
                value={values.hdyh}
                placeholder="50 character max"
                type="text"
                maxLength={50}
                onChange={(e) => {
                  setValue("hdyh", e.target.value);
                }}
              />

              {_message && (
                <div className={`${styles.success}`}>
                  <h3>{_message}</h3>{" "}
                  <p>
                    If you left a message, I may not always reply due to being
                    very busy with school, but I will make sure to read it.
                  </p>
                </div>
              )}

              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </FormManager>
    </>
  );
}

export default Contact;
