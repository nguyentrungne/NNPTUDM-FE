import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import slider1 from '../../assets/images/slide1.webp'
import slider2 from '../../assets/images/slide2.webp'
import slider3 from '../../assets/images/slide3.webp'
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from '../../service/ProductService'

const HomePage = () =>{
    const arr = []
    const fetchProductAll = async () =>{
       const res =  await ProductService.getAllProduct()
       console.log('res', res)
       return res
    }
    const {isLoading, data: products} = useQuery(['products'], fetchProductAll, {retry: 3, retryDelay: 1000 } )
    console.log('data', products)
    return(
        <>
        <div style={{padding: '0 120px', margin: '0 auto'}}>
            <WrapperTypeProduct>
                {arr.map((item) =>{
                return (
                    <TypeProduct name={item} key={item}/>
                )
                })}
            </WrapperTypeProduct>
        </div>
        <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
            <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}> 
                <SlideComponent arrImages = {[slider3]}/>
                <WrapperProducts>
                    {products?.data?.map((product) =>{
                        return(
                            <CardComponent 
                                key={product._id} 
                                countInStock={product.countInStock} 
                                description={product.description} 
                                image={product.image} 
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                type={product.type}
                                discount={product.discount}
                                selled={product.selled}/>
                        )
                    })}
                </WrapperProducts>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                    <WrapperButtonMore textbutton="Xem thêm" type="outline" styleButton={{
                        border: '1px solid #ee4d2d', color: '#ee4d2d',
                        width: '240px', height: '38px', borderRadius: '20px'
                    }}
                    styleTextButton={{fontWeight: 500}}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage