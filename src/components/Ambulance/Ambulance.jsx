import React from "react";
import './Ambulance.scss';
import DoctorImg from "../../images/imageDoctor.png";
import Barg from '../../images/Group1.png';
import Logo from '../../images/online1.png';
import { Container, Row, Col } from "reactstrap";
import Global from "../GlobalBtn/GlobalBtn";

export default function Ambulance() {
    
    return (
        <>
            <Container className="container">
                <img className="background" src={Barg} />
                <Row className="box boxSize">
                    <Col className="textBox" md="5">
                        <h3>Shoshilinch onlayn yordam</h3>
                        <p>Bizga shoshilinch sog'liq bo'yicha maslahatchini ayting
                         va biz 60 soniya ichida eng yaxshi shifokorni tayinlaymiz.</p>
                         <Global text="Onlayn uchrashuv belgilash" width={'306px'}/>
                    </Col>
                    <Col className="imgBox" md="5">
                        <div className="logodiv">
                            <div className="logoImg">
                                <img src={Logo} />
                                <h5>Onlayn shifokorlar</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. Ut ullamcorper in et amet.</p>
                        </div>
                        <img className="doctorImg" src={DoctorImg} alt="doctor" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}