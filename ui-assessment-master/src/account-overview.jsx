import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';
import AccountOverviewContent from './components/account-overview-content/account-overview-content-component';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <AccountOverviewContent data={data} />
    </div>
  )
}

AccountOverview.propTypes = {
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

export default AccountOverview;