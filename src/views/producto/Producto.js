import React, { Component } from 'react';
import { Container, Row, Col, Button  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Producto extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      producto: {}
    };
  }

  callAPISku(sku) {
    
    const urlBack = process.env.REACT_APP_URL_BACK_END;
    
    fetch(`${urlBack}/catalogo/${sku}`)
      .then(response => response.json())
      .then(data => this.setState({ producto: data.producto }))
      .catch(err => err);
  }

  componentDidMount() {
    const sku  = this.props.match.params.sku;
    this.callAPISku(sku);
  }

    render() {

      console.log(this.state.producto.prices);

      const { producto } = this.state;

        return(          
        
          <Container>
            
            <Row>
              <Link to="/catalogo">
                <Button color="link">
                  Volver a Catalogo
                </Button>
              </Link>
            </Row>

            <Row>
              <h2>{producto.name}</h2>
            </Row>

            <Row>
              <Col xs="8"><img src={producto.fullImage} alt="" /></Col>              
              <Col><span>SKU: {producto.partNumber}</span> </Col>
              <Col><span>{producto.shortDescription}</span> </Col>
            </Row>

            <Row>
              <Col dangerouslySetInnerHTML = {{__html: producto.longDescription }}></Col>
            </Row>

          </Container>

        );
    }
}                   
