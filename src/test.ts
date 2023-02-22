import axios from 'axios';

let postData: any[] = [];

const getData = async () : Promise<any> => {
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        //console.log(data);
        
        return data;
    } catch(error) {
        console.error(error);
        return null;
    }
}

const addToDataArray = async () => {
    try {
      const response = await getData();
      postData.push(response);
      console.log(postData);
    } catch (error) {
      console.error(error);
    }
  }
  
  addToDataArray();

