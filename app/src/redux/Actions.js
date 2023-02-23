export const SET_CARS='SET_CARS';
export const SET_CARS_ID='SET_CARS_ID';


export const setCars =cars=> dispatch=>{
 dispatch({
    type:SET_CARS,
    payload:cars,
 });

};

export const setcarID =carID=> dispatch=>{

    dispatch({
       type:SET_CARS_ID,
       payload:carID,
    });
   
   };