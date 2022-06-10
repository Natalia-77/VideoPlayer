import request from '../service/getweather';


export const GetList=()=>async()=>{
   
    try {
       
        const result = await request.getdata(); 
        console.log("Result weather-->>:",result.data);         
       
    }
    catch(error) {
        console.log("Problem !",error);

    }

}