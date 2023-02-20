import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MyTable() {
    const [data ,setData]=useState('')
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo').then(res=>{
            // console.log(res)
            setData(res.data)
        })
    }
    const myData = Object.entries(data)
    console.log(myData)
  return (
    <div>
    {/* <ul>
          {data.map(data => (
        <li key={data.}></li>
          ))}
        </ul> */}
    </div>
  )
}
