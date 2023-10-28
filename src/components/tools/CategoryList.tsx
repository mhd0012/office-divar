import React from 'react';
import useSWR from 'swr'
import {URL_GET_CATEGORYES, URL_MAIM} from "@/urls/urls";
import axios from "axios";
import {CategoryesData} from "@/DataTypes/CategoryesData";

const ListCategory = ({categoryes}:{categoryes:CategoryesData[]}) => {

    const fetchCategories = async (url:string) => {
        const response = await axios.get<CategoryesData[]>(url)
        return response.data
    }
    const {data} = useSWR<CategoryesData[]>(URL_GET_CATEGORYES , fetchCategories)
    return (
            <div className='rtl mt-2 flex'>

                {categoryes.map((category, index:number) => (
                    <div className='mx-2' style={{justifyContent:"start"}}>
                        <div style={{borderRadius: '5px', marginTop:'10px', backgroundColor:'#ececec'}}>
                            <div className="p-2" key={index}>{category.title}</div>
                        </div>
                    </div>
                ))}

            </div>

    );
};

export default ListCategory;