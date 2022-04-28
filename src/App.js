import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Menu, PageBody } from "./AppStyled";

import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";

export default () => {
  const name = useSelector(state => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>...</Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
      </Container>
    </BrowserRouter>
  );
};
