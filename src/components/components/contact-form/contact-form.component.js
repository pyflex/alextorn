import React from 'react'

// businessLocation {lon, lat}, businessName, email, phoneNumber

const ContactForm = ({ data }) => {
  return (
    <div>
      <h3>This is a contact form.</h3>
      <p>{data.businessName}</p>
    </div>
  )
}

export default ContactForm
