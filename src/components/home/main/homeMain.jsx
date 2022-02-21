import {Col, Image} from 'react-bootstrap'

import './homeMain.css'

export const HomeMain = () => {
    return(
        <div>
            <div className="home-attention">
                <Col>
                    <Image style={{width: 200, height: 150, border: "1px solid black"}} src="https://i.pinimg.com/564x/fc/6b/aa/fc6baa8976f184e86785f22cd110cb8b.jpg"></Image>
                </Col>
                <Col>
                    <h1>Horarios de atención</h1>
                </Col>    
            </div>
            <div className="home-first">
            </div>
        </div>  
    )
}