'use client'
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {DataProduct} from "@/DataTypes/ProductData";
import useSWR from "swr";
import {URL_GET_PRODUCT_LIST} from "@/urls/urls";
import {useParams} from "next/navigation";
import Gallery from "@/components/tools/Gallery";
import itpro from "@/Hooks/itpro";
import CategoryList from "@/components/tools/CategoryList";
import {CategoryesData} from "@/DataTypes/CategoryesData";
import {number} from "prop-types";
import notFound from "@/app/not-found";

let getTime = (note) => {
    return new Date(note).toLocaleDateString()
}
let getCreate = (product:DataProduct) => {
    return new Date(product?.created).toLocaleDateString()
}

const ProductPage = () => {

    const productId = useParams().id



    const fetcherProduct = async (url:string) => {
        const response = await axios.get<DataProduct>(url)
        return response.data
    }

    const {data} = useSWR(`${URL_GET_PRODUCT_LIST}/${productId}`,fetcherProduct)

















    return (



<div className='pt-24'>

    {data?.id === Number(productId) ? (<div className='flex justify-center '>
        <div className='container w-full'>
            <div className="flex">
                <div className="basis-6/12">
                    {data?.product_images && (
                        <Gallery images={data?.product_images} product={data} />
                    )}
                </div>
                <div className="basis-6/12">
                    <div className="" style={{padding : '0 20px 0 20px'}}>
                        <h3 className='rtl text-2xl'>{data?.title}</h3>
                        <div className="text-zinc-500 ltr mb-4"> تاریخ آپدیت این محصول : {getTime(data?.updated)}</div>

                        <div  style={{cursor:"pointer" , borderBottom: '1px solid #d2d2d2', borderTop: '1px solid #d2d2d2', alignItems:'center'}} className="d-flex mb-4 mt-10 rtl p-2">
                            {/*<img src={iconWarning} style={{width:'35px', marginLeft:'15px'}} alt="cxv"/>*/}
                            <div style={{lineHeight:'2', fontWeight:'400px' , fontSize:"1rem"}}>زنگ خطر های قبل از معامله </div>

                        </div>


                        <div className="flex rtl mt-10" style={{justifyContent:'space-between' , alignItems:"center"}}>
                            <div className="rtl ">
                                <button className='bg-red-700 ml-2 shadow-md shadow-red-700/50  text-white w-36 p-2 px-4 inline-block align-middle rounded'>اطلاعات تماس</button>
                                <button className='bg-black-700 ml-2 shadow-md shadow-black-700/50 w-36 p-2 px-4 inline-block align-middle rounded' >چت</button>
                            </div>
                            <div className="flex">
                                <i><img width="25" src="https://img.icons8.com/ios/50/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1"/></i>
                                <i className='' style={{marginRight:'20px'}}><img width="25" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/></i>
                            </div>
                        </div>


                        <div className="flex mt-10">
                            <div className="basis-4/12 flex" style={{flexFlow:"column" , alignItems:"center" , justifyContent:"center"}}>
                                <div className="rtl text-dark-50 mb-2" style={{fontSize:'16px'}}>
                                    وضعیت :
                                </div>
                                <div className="" style={{fontSize:'18px', fontWeight:"bolder"}}>
                                    {data?.situation}
                                </div>
                            </div>
                            <div className="basis-4/12 flex" style={{flexFlow:"column" , alignItems:"center" , justifyContent:"center", borderLeft:'1px solid #d2d2d2',borderRight:'1px solid #d2d2d2'}}>
                                <div className="rtl text-dark-50 mb-2" style={{ fontSize:'16px'}}>
                                    قیمت :
                                </div>
                                <div className="rtl " style={{fontSize:'18px', fontWeight:"bolder"}}>
                                    {itpro(data?.price)} تومان
                                </div>
                            </div>
                            <div className="basis-4/12 flex" style={{flexFlow:"column" , alignItems:"center" , justifyContent:"center"}}>
                                <div className="rtl text-dark-50 mb-2" style={{ fontSize:'16px'}}>
                                    تاریخ ایجاد شده :
                                </div>
                                <div className="rtl" style={{fontSize:'18px', fontWeight:"bolder"}}>
                                    {getCreate(data)}
                                </div>
                            </div>
                        </div>



                        <div className="mt-4">
                            <p style={{fontSize: '20px' , direction:'rtl'}}>توضیحات :  </p>
                            <p className='text-dark-50'>{data?.description}</p>
                        </div>


                        <div className="mt-4">
                            دسته بندی ها

                            {data?.category && (
                                <CategoryList categoryes={data?.category} />
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>) : (
       <div>
           صفحه ای یافت نشد
       </div>
    ) }






</div>






        //
        // <div className='note'>
        //     <div className='note-header'>
        //         <h3>
        //             {/*<Link to='/note'>*/}
        //             {/*    <ArrowLeft/>*/}
        //             {/*</Link>*/}
        //         </h3>
        //     </div>
        //     <div className='note-header-page'>
        //         <h3>{product?.title}</h3>
        //     </div>
        //     <Link to='/note'>
        //         <button className='button-update' onClick={handeleSubmit}>Update Note</button>
        //     </Link>
        //     <button className='button-delete' to='/' onClick={handeleDeleteSubmit}>Delete Note</button>
        //     <textarea onChange={(e) => {
        //         setProduct({...product, 'title': e.target.value})
        //     }} defaultValue={product?.title}></textarea>
        // </div>
    )
}
export default ProductPage



// export async function getStaticProps({ params }) {
//     const {id} = params
//     if (postExist)
// }












