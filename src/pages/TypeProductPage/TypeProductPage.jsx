import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Pagination, Row, Col } from "antd";
import { WrapperProducts, WrapperNavbar, WrapperTypeProduct } from "./style";
import TypeProduct from "../../components/TypeProduct/TypeProduct";

const TypeProductPage = () =>{
    const onChange= () =>{}
    const arr = ['TV','Tu Lanh','Dien Thoai']
    return(
        <>
            <div style={{padding: '0 120px'}}>
                <WrapperTypeProduct>
                    {arr.map((item) =>{
                    return (
                        <TypeProduct name={item} key={item}/>
                    )
                    })}
                </WrapperTypeProduct>
            </div>
            <div style={{padding: '0 120px', background: '#efefef'}}>
                <Row style={{flexWrap:'nowrap', paddingTop: '10px'}}>
                    <WrapperNavbar span={4}>
                    <   NavbarComponent/>
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                        </WrapperProducts>
                        <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{marginTop: '15px', textAlign: 'center'}} />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default TypeProductPage