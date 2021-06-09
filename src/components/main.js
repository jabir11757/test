import React from 'react';
import Slider from 'react-slick';
import Navbar from './nav'
import MyTable from './table'
import Hook from './state'

const Main = () => {
    return ( 

        <div>
            <Navbar/>
            <MyTable/>
            <Hook/>
        </div>
     );
}
 
export default Main;