import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './Shared/LeftNav/LeftNav';
import RightNav from './Shared/RightNav/RightNav';
import Footer from './Shared/Footer/Footer';

function App() {

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            middle
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default App
