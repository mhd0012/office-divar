'use client'
import React, {useState} from 'react';
import useSWR from "swr";
import {URL_GET_PRODUCT_LIST} from "@/urls/urls";
import axios from "axios";
import ListItem from "@/components/tools/listItem";
import {DataProduct} from "@/DataTypes/ProductData";
import {Pagination, Stack} from "@mui/material";
export const SCHOOL_PAGE_SIZE = 2

export interface TeacherSchoolQuery {
    sort?: string
    categories?: string
    search?: string
    page?: string
    page_size?: number
    darsup_suggestion?: boolean
}
interface ApiQueryParams {
    q?: string
    page?: string
    ordering?: string
    page_size?: number
    category_ids__contains?: string
    organization?: string
}

// export function buildUrl(query: TeacherSchoolQuery): string {
//     const {
//         search: q,
//         categories: category_ids__contains,
//         sort: ordering,
//         ...rest
//     } = query
//
//     let params: ApiQueryParams = {
//         q,
//         ordering,
//         page_size: SCHOOL_PAGE_SIZE,
//         category_ids__contains,
//         ...rest,
//     }
//     return addParamToUrl(GET_SCHOOL_TEACHERS_LIST, params)
// }


function Content() {
    const [current , setCurrent] = useState(1)

    // @ts-ignore
    const {data} = useSWR(`${URL_GET_PRODUCT_LIST}/?page=${current}`, async (url) => {
        const response = await axios.get(url)
        return response.data
    })
    console.log('data is : ' , data)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrent(value);
    };

    console.log(current)



    return (
        <div className='pt-20'>


            <div className="flex">
                <div className="basis-9/12">

                        <div className="flex flex-row rtl flex-wrap">
                            {data?.product?.map((product:DataProduct, index:number) => (
                                <ListItem product={product} key={index}/>
                            ))}
                        </div>

                    <div>
                        <Stack spacing={2}>
                            <Pagination count={data?.total_pages} page={current} onChange={handleChange} color={"secondary"} variant="outlined" />
                        </Stack>
                    </div>

                </div>
                <div className="basis-3/12" style={{borderLeft: '1px solid #eaeaea'}}>
                    دسته بندی ها
                    <div className="">
                        {/*<ListCategory categoryes={categoryes}/>*/}
                        {/*<li><ListMini /></li>*/}
                    </div>
                </div>
            </div>




        </div>

    );
}

export default Content;