import React from "react";
// function Hello(){
//     return <h1>Hello UMDP</h1>
// }



function Hello(props){
    const {nama, pesan} = props;
    return (
        <h1>
            Hello {nama} , {pesan}
        </h1>
    );
}

Hello.defaultProps ={
    nama : "Chindri Giniwin",
    pesan : "Silimit diting di PW2 IF31",
}

  export default Hello;