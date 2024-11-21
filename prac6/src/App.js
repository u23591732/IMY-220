import React from 'react'

import {Posts} from './pages/Posts'
import { Home } from './pages/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
export class App extends React.Component{

    constructor(props)
    {
        super(props);
        
    }

   
    render()
    {
        return(
            
           <BrowserRouter>
           <Routes>

             <Route path="/" element={<Home/>}/>
             <Route path="/posts/:id" element={<Posts/>}/>
             
           </Routes>
           </BrowserRouter>

        )
    }
}