import React from 'react';

import PropTypes from 'prop-types';

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


export const ContactDetails = ({ supportContact }) => {

    return (
        <>

            <ContactInfoBox>
                <SecondaryTitle aria-level="2">
                    your feefo support contact
                </SecondaryTitle>
                <ContactDetailBox role="group" aria-labelledby="contact-details-label">
                    <ContactImage>{supportContact.name.charAt(0)}</ContactImage>
                    <InfoBox>
                        <div style={{ fontWeight: 'bold', fontSize: '1.0em', color: '#696969' }}>
                            {supportContact.name}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '7px', color: '#696969' }} aria-hidden="true" />
                            <div>{supportContact.email}</div>
                            <PhoneBox>{supportContact.phone}</PhoneBox>
                        </div>
                    </InfoBox>
                </ContactDetailBox>
            </ContactInfoBox>

        </>
    )
}

ContactDetails.propTypes = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default ContactDetails;