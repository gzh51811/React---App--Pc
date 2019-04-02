import React from "react";
export default (props)=>{
    return (
        <div className="classify">
            {props.goodsClassifyImg.map((img,idx)=>(
                <div key={idx}>
                    <img src={img.Pic} alt={img.Name} />
                </div>
            ))}
        </div>
    )
}
