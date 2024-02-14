import axios from 'axios';

const upload = axios.create({
    baseURL: 'https://graceful-hose-boa.cyclic.app/'
    
});

export default upload;