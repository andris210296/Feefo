import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    ContactInfoBox,
    SecondaryTitle,
    ContactDetailBox,
    ContactImage,
    InfoBox,
    PhoneBox
} from './contact-details';


export const ContactDetails = ({ data }) => {
    console.log(data);

    return (
        <>

            <ContactInfoBox>
                <SecondaryTitle>
                    your feefo support contact
                </SecondaryTitle>
                <ContactDetailBox>
                    <ContactImage>{data.supportContact.name.charAt(0)}</ContactImage>
                    <InfoBox>
                        <div style={{ fontWeight: 'bold', fontSize: '1.0em', color: '#696969' }}>
                            {data.supportContact.name}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '7px', color: '#696969' }} />
                            <div>{data.supportContact.email}</div>
                            <PhoneBox>{data.supportContact.phone}</PhoneBox>
                        </div>
                    </InfoBox>
                </ContactDetailBox>
            </ContactInfoBox>

        </>
    )
}

export default ContactDetails;