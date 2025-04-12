import React from "react";
import PageHeaderComponent from "../components/PageHeaderComponent";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div>
      <PageHeaderComponent title="Contact Us" name="Contact" />
      <ContactDetails />
    </div>
  );
};

export default Contact;
