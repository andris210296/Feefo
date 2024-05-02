import React from 'react';

import {
    AccountOverviewContentGrid,
    PrimaryTitle,
    GridHead,
    GridBody,
    GridHeadRightSide,
    GridHeadLeftSide
} from './account-overview';
import SalesInfo from '../sales-info/sales-info-component';
import ContactDetails from '../contact-details/contact-details-component';

export const AccountOverviewContent = ({ data }) => {
    console.log(data);

    return (
        <>
            <AccountOverviewContentGrid>
                <GridHead>
                    <GridHeadLeftSide>
                        <PrimaryTitle>Account Overview</PrimaryTitle>
                    </GridHeadLeftSide>
                    <GridHeadRightSide>
                        <ContactDetails data={data} />
                    </GridHeadRightSide>
                </GridHead>

                <GridBody>
                    <SalesInfo data={data} />
                </GridBody>

            </AccountOverviewContentGrid>

        </>
    )
}

export default AccountOverviewContent;