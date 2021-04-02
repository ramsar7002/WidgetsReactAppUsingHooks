import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = ()=>{
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(()=>{
        //way number 1
      const search = async ()=>{
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                  action: 'query',
                  list: 'search',
                  origin:'*',
                  format: 'json',
                  srsearch: term 
              }
          });

              setResults(data.query.search);
      }

      if(term && !results.length){
        search();
      }
      else{
      const timoutId = setTimeout(() => {
        if(term){
            search();
       }
      }, 500);;

      return()=>{
          clearTimeout(timoutId);
      }
    }
      

        //way number 2
    // (async() =>{
    //     await axios.get('blablabla');
    // })();

        //way number 3
    // axios.get('dfdf').then(response=>{
    //     console.log(response.data)
    // })

    }, [results.length, term]);

    const renderdResults =results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button" 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target='blank'
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className= "ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui relaxed divided list">
                {renderdResults}
            </div>
        </div>
    )
}

export default Search;