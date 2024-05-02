import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
    SalesGrid,
    GridHead,
    GridBody,
    SalesTitle,
    BoldText,
    PercentageResult,
    SecondaryTitle,
    Grid,
    GridItem
} from './sales-info';

export const SalesInfo = ({ salesOverview }) => {
    const percentageSuccessfulUploads = (salesOverview.successfulUploads / salesOverview.uploads) * 100;
    const percentageSuccessfulLinesSaved = (salesOverview.linesSaved / salesOverview.linesAttempted) * 100;

    return (
        <>
            <SalesGrid >
                <GridHead>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                        <FontAwesomeIcon icon={faInbox} color="#0AC9F0" />
                        <SalesTitle>Sales</SalesTitle>
                    </div>
                    <div style={{ marginRight: "10px" }}>
                        <FontAwesomeIcon icon={faInfoCircle} color="gray" />
                    </div>
                </GridHead>
                <GridBody>
                    You had <BoldText> {salesOverview.uploads} uploads </BoldText> and <BoldText>{salesOverview.linesSaved}</BoldText> lines added.
                </GridBody>
            </SalesGrid >

            <Grid>
                <GridItem>
                    <PercentageResult>
                        {(percentageSuccessfulUploads.toFixed(0))}%
                    </PercentageResult>
                    <SecondaryTitle>upload success</SecondaryTitle>

                </GridItem>
                <GridItem>
                    <PercentageResult>
                        {(percentageSuccessfulLinesSaved.toFixed(0))}%
                    </PercentageResult>
                    <SecondaryTitle>lines saved</SecondaryTitle>

                </GridItem>
            </Grid>


        </>
    )
}

SalesInfo.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
        lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
};

export default SalesInfo;