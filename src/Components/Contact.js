import React, { useState } from "react";

const FORM_ENDPOINT = ""; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div class="form-style-6">
<h1>Contact Me</h1>
<form>
<input type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />
<textarea name="field3" placeholder="Type your Message"></textarea>
<input type="submit" value="Send" />
</form>
</div>
  );
};

export default ContactForm;