import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(resp => {
            return resp.data.message
        });
}

export default fetchDogs;