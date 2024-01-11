import React from "react";
import { StyleNameProduct, WrapperDiscountText, WrapperPriceText, WrapperReviewText, WrapperCardStyle } from "./style";
import { StarFilled } from '@ant-design/icons';

const CardComponent = () =>{
    return(
      <WrapperCardStyle
        hoverable
        headStyle={{width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <StyleNameProduct>Mercedes s680 almost real</StyleNameProduct>
        <WrapperReviewText>
          <span style={{marginRight: '6px'}}>
            4.9<StarFilled style={{fontSize: '12px', color: 'orange', marginLeft: '4px'}} /> 
          </span>
          <span> | Đã bán 8</span>
        </WrapperReviewText>
        <WrapperPriceText>
          <span style={{marginRight: '8px'}}>3.800.000 VNĐ</span>
          <WrapperDiscountText>
            -5%
          </WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    )
}

export default CardComponent