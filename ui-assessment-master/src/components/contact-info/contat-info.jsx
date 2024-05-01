import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GridContainer, BigBox, SmallBox, NameBox, InfoBox, PhoneBox } from './contact-info';
import SalesInfo from '../sales/sales-info-component';
export const ContactInfo = ({ data }) => {
    console.log(data);

    return (
        <>
            <GridContainer>

                <BigBox>Account Overview</BigBox>

                <SmallBox>
                    <div style={{
                        display: 'flex', marginTop: '10px', color: '#a9a9a9', fontSize: '1.0em',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                        your feefo support contact
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <NameBox>{data.supportContact.name.charAt(0)}</NameBox>
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
                    </div>
                </SmallBox>

                <SalesInfo data={data} />

            </GridContainer>
        </>
    )
}

export default ContactInfo;