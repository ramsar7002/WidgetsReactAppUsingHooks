import React, {useState, useEffect, useRef} from 'react';
import Accordion from './Accordion';
import Search from './Search'
import DropDown from './Dropdown'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS among engineers'
    },
    {
        title: 'How do you use React??',
        content: 'You use react by creating component'
    }
]
const options =[
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A Shade of blue',
        value: 'blue'
    }
]

 const App = () =>{
    const [selected, setSelected] = useState(options[0])
    return(
        <div>
            <DropDown 
            selected = {selected}
            onSelectedChange = {setSelected}
            options={options}/>

        </div>
    )
    
};

export default App;