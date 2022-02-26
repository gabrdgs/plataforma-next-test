import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import {CustomForm} from './CustomForm.jsx'

const mailingUrl = `https://isemear.us5.list-manage.com/subscribe/post?u=46231f54d74102619596a143c&id=d4003037a6`

export default function LeadForm() {
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={mailingUrl}
        render={({subscribe, status, message}) => (
          <CustomForm
            message={message}
            onValidated={(formData) => subscribe(formData)}
            status={status}
          />
        )}
      />
    </div>
  )
}
