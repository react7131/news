import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {data} from '../data';
import Card from './NewsItem';


const NewsList = () => {
  
  // const [news, setNews] = useState([]);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const getNews = async () => {
  //       try{
  //         const res = await axios.get('https://feeds.npr.org/1004/feed.json', {
  //           headers: {
  //             'Access-Control-Allow-Origin': '*',
  //             'Content-Type': 'application/json',
  //           },
  //         });
  //         setNews(res.data);
  //       } catch(err) {
  //         console.log(err);
  //       }
  //     }
  //     getNews();
  //   }, 30000);
    
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])
  
  // const sortedData = news.sort((a,b) => new Date(b.date_published) - new Date(a.date_published)).splice(0,5);

  const sortedData = data.sort((a,b) => new Date(b.date_published) - new Date(a.date_published)).splice(0,5);

  return (
    <div className='row py-5'>
      {
        sortedData.map( item => <Card key={item.id} item={item} />)
      }
    </div>
  )
}

export default NewsList