import React from 'react'
import { useCounter,useFetch } from '../hooks'
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const BreakinBadQuotes = () => {
    const {increment,Counter} =useCounter(1);
   
    const {data,isLoading,hasError}=useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`)
    
    const {quote,author}=!!data && data[0];


  return (
    <>
        <h1>BreakinBadQuotes</h1>

        {
            isLoading
            ? 
             <LoadingQuote/>
            : 
             <Quote quote={quote} author={author}/>
        }

        <button className='btn btn-primary' 
        onClick={event=>increment()}
        disabled={isLoading}>Next Quote</button>

        

        
    </>
  )
}
