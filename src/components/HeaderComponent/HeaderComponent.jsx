import React, { useEffect, useState } from "react"
import { Badge, Button, Col, Popover } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperAccountHeader, WrapperCartHeader, WrapperTextHeaderSmall, WrapperContentPopup }  from './style'
import { UserOutlined, ShoppingCartOutlined, CaretDownOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../service/UserService"
import { resetUser } from "../../redux/slides/userSlide";

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) =>{

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch
    
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        await UserService.logoutUser();
        dispatch(resetUser());
    };

    useEffect(() =>{
        setLoading(true)
        setUserName(user?.name)
        setLoading(false)
    }, [user?.name])

    const content = (
    <div>
        <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
        {user?.isAdmin &&(
            <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản lý hệ thống</WrapperContentPopup>
        )}
        <WrapperContentPopup>Đăng xuất</WrapperContentPopup>
    </div>
    );
    return(
        <diV style={{  heiht: '100%', width: '100%', background: '#9255FD', justifyContent: 'center' }} >
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={4}>
                    <WrapperTextHeader>SHOP</WrapperTextHeader>
                </Col>
                {!isHiddenSearch &&(
                    <Col span={16}>
                        <ButtonInputSearch
                            size= "large"
                            textButton = "Tìm kiếm"
                            placeholder="input search text"
                            // onSearch={onSearch}
                        />
                    </Col>
                )}
                <Col span={4} style={{ display: "flex", gap: "15px", marginLeft: '25px'}}>
                    <WrapperAccountHeader>
                    <UserOutlined style={{fontSize: '25px', color: "#fff"}} />
                    {user?.access_token ? (
                        <>
                        <Popover content={content}  trigger="click">
                            <div style={{cursor: 'pointer'}}>{userName?.length ? userName : user?.email}</div>
                        </Popover>
                        </>
                    ): (
                        <div onClick={handleNavigateLogin} style={{ cursor: 'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    )}
                    </WrapperAccountHeader>
                    {!isHiddenCart && (
                        <WrapperCartHeader>
                            <Badge count={4} size="small">
                                <ShoppingCartOutlined style={{fontSize: '25px', color: "#fff"}}/>  
                            </Badge>
                        </WrapperCartHeader>
                    )}
                </Col>
            </WrapperHeader>
        </diV>
    )
}

export default HeaderComponent