import Service from "./Service"
import {ProductModel} from "../model/Product.model"
import {ProductAttributeTermsListModel} from "../model/ProductAttributesTermsList.mode"
import axios from "axios";

export default class ProductService extends Service {

    constructor() {
        super();
    }

    static getProductBySlug(slug: string, successCallback: Function, errorCallback?: Function): void {
        axios.get(`${this.getProductURL()}?slug=${slug}`, this.getDefaultHeaders)
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

    static getProductAttributeTerms(attributeId: number, successCallback: Function, errorCallback?: Function): void {
        axios.get(`${this.getProductAttributesTermsURL(attributeId)}?per_page=${999}`, this.getDefaultHeaders)
            .then((response)=> {
                console.log(`${this.getProductAttributesTermsURL(attributeId)}`);
                // * @DECLARED_MODEL => ProductAttributeTermsListModel
                let data : ProductAttributeTermsListModel = response.data;
                successCallback(data);
            })
            .catch((error) => {
                if(errorCallback)
                    errorCallback(error);
            });
    }

    static getProductAttributeTermsList(attributeListId: any, successCallback: Function, errorCallback?: Function): void {
        let ProductAttributeTermsList:ProductAttributeTermsListModel[] = new Array(attributeListId.length);
        for(let i=0; i<attributeListId.length; i++)
        {
            axios.get(`${this.getProductAttributesTermsURL(attributeListId[i])}?per_page=${100}`, this.getDefaultHeaders)
                .then((response)=> {
                    ProductAttributeTermsList[i] = response.data;
                    successCallback(ProductAttributeTermsList);
                })
                .catch((error) => {
                    console.error(`@URL: ${this.getProductAttributesTermsURL(attributeListId[i])}?per_page=${100}; @ERROR: ${error}; @ATTRIBUTES_LIST: ${attributeListId}`);
                    if(errorCallback)
                        errorCallback(error);
                });
        }
    }
}