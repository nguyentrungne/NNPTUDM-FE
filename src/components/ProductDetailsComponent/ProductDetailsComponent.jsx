import React from "react";
import { Col, Image, Row } from 'antd'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/test2.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailsComponent = () =>{
    const onChange = () => {}
    return(
        <Row style={{padding:'10px', background:'#fff', borderRadius: '14px'}}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={imageProduct} alt="image product" />
                <Row style={{paddingTop:'10px', justifyContent: 'space-between'}}>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                    <Col span={4}>
                        <Image src={imageProductSmall} alt="image small"/>
                    </Col>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '12px', borderRight: '1px solid #e5e5e5', paddingRight: '8px'}} >
                <WrapperStyleNameProduct>Mercedes-benz s680 Almost Real 1/18</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
                    <StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
                    <StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
                    <StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
                    <StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
                    <WrapperStyleTextSell> | Đã bán 8</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>3.800.000 VNĐ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span> 
                    <span className="address">20 đường 54, phường Bình Trưng Đông</span> - 
                    <span className="change-address"> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{margin: '5px 0 5px'}}>Số lượng: </div>
                    <WrapperQualityProduct>
                        <button style={{border: 'none', background: 'transparent'}}>
                            <MinusOutlined style={{ color: '#000' , fontSize: '20px'}} />   
                        </button>

                        <WrapperInputNumber min={1} max={10} defaultValue={1} onChange={onChange} size="small" />

                        <button style={{border: 'none', background: 'transparent'}}>
                            <PlusOutlined style={{ color: '#000' , fontSize: '20px'}} />                     
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', aliggItems: 'center', gap: '12px', marginTop: '10px' }}>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textbutton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textbutton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent