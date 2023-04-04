import {
    Col, Row, 
    Card, CardTitle, CardText
  } from "reactstrap"

function Presenter(props){
    return(
        <Row>
        <Col sm="3"></Col>
    <Col sm="6">
      <Card body>
        <CardTitle tag="h1">
          {props.name}
        </CardTitle>
        <CardText>  
            {props.children}      
        </CardText>
        {/* <Button>
          Go somewhere
        </Button> */}
      </Card>
    </Col>
    <Col sm="3"></Col>
  </Row>
    )
}

export default Presenter;