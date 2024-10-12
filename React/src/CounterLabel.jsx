import React from "react";

export const CounterLabel = ({count}) => {
    const objeto = {nombre: "hola"};

    const{nombre}=objeto




    return <>{count >= 5 ? (<> mayor o igual a 5 </>): <>menor a 5</>}</>;
   
}
