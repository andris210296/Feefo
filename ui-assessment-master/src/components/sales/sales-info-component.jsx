import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faInfo } from '@fortawesome/free-solid-svg-icons';
import { SalesInfoDrawer, SalesContainer, SalesTitle, InfoContainer } from './sales-info';
export const SalesInfo = ({ data }) => {
    console.log(data);

    return (
        <>
            <SalesInfoDrawer >
                <SalesContainer>
                    <FontAwesomeIcon icon={faInbox} color="blue" />
                    <SalesTitle>Sales</SalesTitle>
                </SalesContainer>
                <InfoContainer>
                    <FontAwesomeIcon icon={faInfo} />
                </InfoContainer>
                <div style={{ backgroundColor: 'white' }}>
                    You had {data.salesOverview.uploads} uploads and {data.salesOverview.linesSaved} lines added
                </div>
            </SalesInfoDrawer >

        </>
    )
}

export default SalesInfo;