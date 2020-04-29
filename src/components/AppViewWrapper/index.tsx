import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../../views/Navigation';
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn,
} from '../../components/designSystem/layout';

const AppViewWrapper: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <ViewGrid>
        <TwoColumnGrid>
          <FirstColumn>
            <Route path="/:projectSlug" component={Navigation} />
          </FirstColumn>
          <SecondColumn>{children}</SecondColumn>
        </TwoColumnGrid>
      </ViewGrid>
    </React.Fragment>
  );
};

export default AppViewWrapper;
