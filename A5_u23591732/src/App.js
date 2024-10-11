import React from 'react'
import {StarWars} from './components/StarWars'

import { BrowserRouter, Routes , Route } from 'react-router-dom';

export class App extends React.Component{

    constructor(props)
    {
        super(props);
        
    }

   
    render()
    {
        return(
            <div>

                <div style={{textAlign : 'center',justifyContents : 'center'}}>
                <StarWars/>
                </div>
             
          
           </div>
           

        )
    }
}