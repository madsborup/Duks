import React, { Component } from "react";
import { Route } from "react-router-dom";
import { StyledAppViewWrapper } from "./style";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";

const AppViewWrapper: React.FC = ({children}) => {

  return (
    <React.Fragment>
      <StyledAppViewWrapper>
        <Navbar />
        <ViewGrid>
          <TwoColumnGrid>
            <FirstColumn>
              <Route path="/:projectSlug" component={Sidebar} />
            </FirstColumn>
            <SecondColumn>{children}</SecondColumn>
          </TwoColumnGrid>
        </ViewGrid>
      </StyledAppViewWrapper>
    </React.Fragment>
  );
};

export default AppViewWrapper;
