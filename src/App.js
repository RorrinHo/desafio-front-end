import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Container } from 'reactstrap';
import './App.css';
import Header from './views/header/Header';
import Catalogo from './views/catalogo/Catalogo';
import Producto from './views/producto/Producto';


class App extends React.Component {
    
  render() {

    return (          

      <Container>
          
        <Header/>
        <BrowserRouter>
          <Switch>            
            <Route exact path = "/catalogo" component = {Catalogo} />
            <Route path="/producto/:sku" component={Producto} />
            <Redirect from="/" to="/catalogo" />
          </Switch>   
        </BrowserRouter>
      </Container>

    );
  }

}

export default App;
