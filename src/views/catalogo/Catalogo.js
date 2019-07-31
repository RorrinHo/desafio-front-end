import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Catalogo.css';

export default class Catalogo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      productos: [] 
    };
  }

  callAPI() {
    fetch("http://localhost:8181/catalogo")
      .then(response => response.json())
      .then(data => this.setState({ productos: data.productos }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }


  render () {

    const { productos } = this.state;

    return (

      <Container>
         <h1 className="Catalog-center">Catálogo de Juegos</h1>
        <Row> 
        {productos.map(p  =>             
            <Col md="3">            
								<Link to={`/producto/${p.partNumber}`}>     
                  <Col><img src={p.fullImage} className="Catalogo-image" alt="" /></Col>
                  <Col className="Catalog-center">{p.prices.formattedListPrice}</Col>
                  <Col className="Catalog-center">{p.name}</Col>
                </Link>   
            </Col>
            )}
        </Row>
      </Container>

    );
  }

}