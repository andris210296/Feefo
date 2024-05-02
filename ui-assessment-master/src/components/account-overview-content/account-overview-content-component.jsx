import React from 'react';
import PropTypes from 'prop-types';

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

    return (
        <>
            <AccountOverviewContentGrid>
                <GridHead>
                    <GridHeadLeftSide>
                        <PrimaryTitle>Account Overview</PrimaryTitle>
                    </GridHeadLeftSide>
                    <GridHeadRightSide>
                        <ContactDetails supportContact={data.supportContact} />
                    </GridHeadRightSide>
                </GridHead>

                <GridBody>
                    <SalesInfo salesOverview={data.salesOverview} />
                </GridBody>

            </AccountOverviewContentGrid>

        </>
    )
}

AccountOverviewContent.propTypes = {
    data: PropTypes.shape({
        supportContact: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired,
        salesOverview: PropTypes.shape({
            uploads: PropTypes.number.isRequired,
            successfulUploads: PropTypes.number.isRequired,
            linesAttempted: PropTypes.number.isRequired,
            linesSaved: PropTypes.number.isRequired,
            lastUploadDate: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default AccountOverviewContent;