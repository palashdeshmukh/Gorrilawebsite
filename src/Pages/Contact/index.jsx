import React from "react";
import { ContactMainWrapper,ContactUsInput,ContactLabel,ContactTitle,ContactSubmit,ContactLabelsForm,ContactPara,ContactWrapper,ContactItemOne,ContactItemTwo} from "../../Styles/Contact";
const ContactPage=()=>{
    return(
        <>
<ContactMainWrapper>
<ContactWrapper>
<ContactItemOne>
    <ContactTitle>Contact Us</ContactTitle>
    <ContactPara>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</ContactPara>
</ContactItemOne>
<ContactItemTwo>
    <ContactLabelsForm>
    <ContactLabel>Earnmanagement.com</ContactLabel>
<ContactUsInput type="text" placeholder="Your Name"/>
    </ContactLabelsForm>
    <ContactLabelsForm>
    <ContactLabel>US +1(872) 288 9283</ContactLabel>
    <ContactUsInput type="email" placeholder="Your Email Address"/>
    </ContactLabelsForm>
    <ContactLabelsForm>
    <ContactLabel>US +1(872) 288 9283</ContactLabel>
    <ContactUsInput type="text" placeholder="Describe your needs"/>
    </ContactLabelsForm>
    <ContactSubmit type="submit">Submit Request</ContactSubmit>
</ContactItemTwo>

</ContactWrapper>
</ContactMainWrapper>
        </>
    );
};
export default ContactPage;