import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogin from "../../assets/images/test.webp"
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../service/UserService"
import { useMutationHooks } from "../../hooks/usrMutationHook";
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message'
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";
import { jwtDecode } from "jwt-decode";

const SignUpPage = () =>{

    const navigate = useNavigate()
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmpassword, setConfirmpassword ] = useState('');
    const dispatch = useDispatch();

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    )
    const {data, isPending, isSuccess, isError} = mutation

    useEffect(() =>{
        if(isSuccess){
            navigate('/')
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            if(data?.access_token){
                const decoded = jwtDecode(data?.access_token)
                if(decoded?.id){
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
    }, [isSuccess])

    const handleGetDetailsUser = async (id, token) =>{
        const res = await UserService.getDetailsUser(id,token)
        dispatch(updateUser({...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) =>{
        setEmail(value)
    }

    const handleOnchangePassword = (value) =>{
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) =>{
        setConfirmpassword(value)
    }

    const handleNavigateSignIn = () =>{
        navigate('/sign-in')
    }

    const handleSignUp = () =>{
        mutation.mutate({
            email, 
            password, 
            confirmpassword 
        })
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
        <div style={{ width: '800px', height: '443px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
            <h1>Xin chào</h1>
            <p>Đăng ký</p>
            <div>
                <InputFormComponent style={{marginBottom: '10px'}} placeholder="Nhập username" value={email} onChange={handleOnchangeEmail}/>
                <InputFormComponent style={{marginBottom: '10px'}} placeholder="Nhập password" value={password} onChange={handleOnchangePassword}/>
                <InputFormComponent placeholder="Nhập lại password" value={confirmpassword} onChange={handleOnchangeConfirmPassword}/>
            </div>
            {data?.status === "ERR" && (<span style={{ color: "red" }}>{data?.message}</span>)}
            <Loading isLoading={isPending}> 
                <ButtonComponent
                    onClick={handleSignUp}
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '20px 0 10px'
                    }}
                    textbutton={'Đăng ký'}
                    styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
            </Loading>
            <p>Bạn đã có tài khoản ? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={imageLogin} preview={false} alt="image-logo" height="200px" width="280px" />
            <h4>Nhận nhiều ưu đãi mỗi ngày</h4>
        </WrapperContainerRight>
    </div>
    </div>
    )
}

export default SignUpPage