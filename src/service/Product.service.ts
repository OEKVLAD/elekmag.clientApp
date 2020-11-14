import Service from "./Service"
import {ProductModel} from "../model/Product.model"
import axios from "axios";

export default class ProductService extends Service {

    constructor() {
        super();
    }

    static getProductBySlug(slug: string, successCallback: Function, errorCallback?: Function): void {
        axios.get(`${this.getProductURL}?slug=${slug}`, this.getDefaultHeaders)
            .then((response)=> {
                // * @DECLARED_MODEL => ProductModel
                let data : ProductModel = response.data;
                successCallback(data);
            })
            .catch((error) => {
                if(errorCallback)
                    errorCallback(error);
            });
    }

}