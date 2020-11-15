/*
* @AUTHOR:          Omelchenko Vladyslav
* @DATE_CREATE:     14.11.2020
* @REST_API_GET:    /wp-json/wc/v3/products/attributes
*/
export type ProductAttributeModel = {
    id: number;                       // * @DESCRIPTION - Unique identifier for the resource                            // @ACTION TYPE  read_only
    name: string;                     // * @DESCRIPTION - Attribute name                                                // @ACTION TYPE  mandatory
    slug: string;                     // * @DESCRIPTION - An alphanumeric identifier for the resource unique to
                                           // * its type                                                                // @ACTION TYPE  read_write
    type: string;                     // * @DESCRIPTION - Type of attribute. By default only select is supported        // @ACTION TYPE  read_write
    order_by: string;                 // * @DESCRIPTION - Default sort order. Options: menu_order, name,
                                            // * name_num and id. Default is menu_order                                 // @ACTION TYPE  read_write
    has_archives: boolean;            // * @DESCRIPTION - Enable/Disable attribute archives. Default is false           // @ACTION TYPE  read_write
}