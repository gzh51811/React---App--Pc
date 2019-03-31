import React from "react";
import axios from "axios";
axios.defaults.baseURL = "http://m.gjw.com"
export default (Com)=>{
    return function(props,context){
        return <Com axios={axios} {...props} {...context}></Com>
    }
}