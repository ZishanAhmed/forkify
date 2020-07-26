import axios from 'axios';
import { endpoint_url } from '../config';

// https://forkify-api.herokuapp.com/api/search
export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults() {
        try{
            const res = await axios(`${endpoint_url}search?q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        }
        catch(error){
            alert(error);
        }
    }

}


