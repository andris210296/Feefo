import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';
import AccountOverviewContent from './components/account-overview-content-component/account-overview-content';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <AccountOverviewContent data={data} />
    </div>
  )
}

export default AccountOverview;