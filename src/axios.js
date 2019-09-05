import axios from 'axios';

export default axios.create({
    baseURL:'https://pixabay.com/api/',
    params:{
        key:'11525184-035ebb262c24427c42044aa74',
        orientaion:'horizontal'
    },
})