import React, { useEffect, useState } from "react";
import { WrapperHeader } from "../AdminUser/style";
import { Button, Form, Modal } from 'antd'
import {PlusOutlined} from '@ant-design/icons';
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import { UploadOutlined } from '@ant-design/icons';
import { getBase64 } from "../../utils";
import { WrapperUploadFile } from "./style";
import * as ProductService from "../../service/ProductService"
import Loading from "../../components/LoadingComponent/Loading";
import { useMutationHooks } from "../../hooks/usrMutationHook";
import * as message from '../../components/Message/Message'     
import { useQuery } from "@tanstack/react-query";

const AdminProduct = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInStock: '',
    })

    const [form] = Form.useForm();

    const mutation = useMutationHooks(
        (data) => {
          const { name,
            price,
            description,
            rating,
            image,
            type,
            countInStock } = data
          const res = ProductService.createProduct({
            name,
            price,
            description,
            rating,
            image,
            type,
            countInStock
          })
          return res
        }
      )

    const getAllProduct = async() =>{
        const res = await ProductService.getAllProduct()
        return res
    }

    const {data, isLoading, isSuccess, isError} = mutation  

    const { isLoading: isLoadingProducts, data: products } = useQuery({queryKey:['products'], queryFn:getAllProduct})

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text) => <a>{text}</a>,
        },
    ];
    const dataTable = products?.data.length && products?.data.map((product) =>{
        return {...product, key: product._id}
    })

    useEffect(() =>{
        if(isSuccess && data.status === 'OK'){
            message.success()
            handleCancel()
        }else if(isError){
            message.error()
        }
    }, [isSuccess])

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInStock: '',
        })
        form.resetFields()
      };
    
    const onFinish = () =>{
        mutation.mutate(stateProduct)
        console.log('finish', stateProduct)
    }

    const handleOnChange = (e) =>{
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    }
    const handleOnchangeAvatar = async({fileList}) =>{
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        })
    }
    return(
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{ marginTop: '10px'}}>
                <Button style={{height: '100px', width: '100px', borderRadius: '6px', borderStyle: 'dashed'}} onClick={() => setIsModalOpen(true)}><PlusOutlined /></Button>
            </div>
            <div style={{ marginTop: '20px'}}>
                <TableComponent columns={columns} isLoading={isLoadingProducts} data={dataTable}/>
            </div>
            <Modal title="Thêm mới sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Loading isLoading={isLoading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item
                            label="Product Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your product name!' }]}
                        >
                            <InputComponent value={stateProduct.name} onChange={handleOnChange} name="name" />
                        </Form.Item>
                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[{ required: true, message: 'Please input your type!' }]}
                        >
                            <InputComponent value={stateProduct.type} onChange={handleOnChange} name="type" />
                        </Form.Item>
                        <Form.Item
                            label="Count In Stcok"
                            name="countInStock"
                            rules={[{ required: true, message: 'Please input your count in stcok!' }]}
                        >
                            <InputComponent value={stateProduct.countInStock} onChange={handleOnChange} name="countInStock" />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: 'Please input your price!' }]}
                        >
                            <InputComponent value={stateProduct.price} onChange={handleOnChange} name="price" />
                        </Form.Item>
                        <Form.Item
                            label="Rating"
                            name="rating"
                            rules={[{ required: true, message: 'Please input your rating!' }]}
                        >
                            <InputComponent value={stateProduct.rating} onChange={handleOnChange} name="rating" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: false, message: 'Please input your count in description!' }]}
                        >
                            <InputComponent value={stateProduct.description} onChange={handleOnChange} name="description" />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[{ required: false, message: 'Please input your image!' }]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button icon={<UploadOutlined />}>Upload</Button>
                                {stateProduct?.image && (
                                    <img src={stateProduct?.image} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '20px'
                                    }} alt="ảnh đại diện"/>
                                )}
                            </WrapperUploadFile>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </Modal>
        </div>
    )
}

export default AdminProduct