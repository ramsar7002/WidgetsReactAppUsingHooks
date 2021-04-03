import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';;

const options =[
    {
        label: 'Hebrew',
        value: 'he'
    },
    {
        label: 'Spain',
        value: 'es'
    },
    {
        label: 'France',
        value: 'fr'
    }
]
const label = "Select a language:"
const Translate = ()=>{
    const [inputText, setInputText]= useState('');
    const [selected, onSelectedChange] = useState(options[0]);
    const [translated, setTranslated] = useState('');

    const translateText = async()=>{
        // console.log(inputText);
        // console.log(selected.value);
        const response =  await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            
           params:{ 
            "q": `${inputText}`,
            "target": `${selected.value}`,
            "key": "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            }
        })
        console.log(response);
        setTranslated(response.data.data.translations[0].translatedText)

        return(
            <div dangerouslySetInnerHTML={{__html: translated}} />

        )
    }
    return(
        <div>
            <label>Enter a text:</label>
            <div className="ui fluid action input">
            <input 
            value ={inputText} 
            type="text" 
            placeholder="Search..."
            onChange = {(e)=>setInputText(e.target.value)}
            />
            <div 
            onClick={translateText}
            className="ui button">Search
            </div>
            </div>

            <Dropdown 
            selected={selected}
            onSelectedChange={onSelectedChange}
            options={options}
            label={label}
            />
            <div className="translation-area">
                <label>Result</label>
                <p>{translated}</p>
            </div>
        </div>
    )
}

export default Translate