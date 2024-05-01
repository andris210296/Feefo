import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { SalesGrid, GridHead, GridHeadLeftSide, GridHeadRightSide, GridBody, SalesTitle, BoldText } from './sales-info';
export const SalesInfoComponent = ({ data }) => {
    console.log(data);

    return (
        <>
            <SalesGrid >
                <GridHead>
                    <GridHeadLeftSide>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                            <FontAwesomeIcon icon={faInbox} color="#0AC9F0" />
                            <SalesTitle>Sales</SalesTitle>
                        </div>
                    </GridHeadLeftSide>

                    <GridHeadRightSide>
                        <FontAwesomeIcon icon={faInfoCircle} color="gray" />
                    </GridHeadRightSide>
                </GridHead>
                <GridBody>
                    You had <BoldText> {data.salesOverview.uploads} uploads </BoldText> and <BoldText>{data.salesOverview.linesSaved}</BoldText> lines added.
                </GridBody>



            </SalesGrid >

        </>
    )
}

export default SalesInfoComponent;