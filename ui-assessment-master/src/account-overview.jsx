import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';
import ContactInfo from './components/contact-info/contat-info';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <ContactInfo data={data} />
    </div>
  )
}

export default AccountOverview;