import * as React from 'react'
import { PokemonApp } from './components/PokemonApp';



export class App extends React.Component<any, any>{

    constructor(props)
    {
        super(props);
        
    }

   
    render()
    {
        return(
            
           <div style={{textAlign:'center',justifyContent:'center'}}>
            <PokemonApp/>
           </div>

             

        )
    }
}