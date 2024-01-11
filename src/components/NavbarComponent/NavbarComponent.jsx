import React from "react"
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from "./style"
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () =>{
    const onChange = () =>{}
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return(
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }} onChange={onChange}>
                        {options.map((option) =>{
                            return(
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }}>
                            <Rate style={{ fontSize: '14px' }} disabled defaultValue={option} />
                            <span> {`tu ${option}  sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
            }
        }
    return (
        <div>
            <WrapperLabelText>Danh mục sản phẩm</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Tu Lanh', 'TV', 'Dien Thoai'])}     
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    {value: 'a', label: 'A'},
                    {value: 'b', label: 'B'}
                ])}   
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}   
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Dưới 40.000 VNĐ','Trên 60.000 VNĐ' ])}   
            </WrapperContent>
        </div>

    )
}
export default NavbarComponent