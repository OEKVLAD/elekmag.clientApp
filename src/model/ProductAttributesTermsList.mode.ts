/*
* @AUTHOR:          Omelchenko Vladyslav
* @DATE_CREATE:     15.11.2020
* @ACTION_TYPE:     GET
* @REST_API_GET:    /wp-json/wc/v3/products/attributes/<attribute_id>/terms
*/
export type ProductAttributeTermsListModel = {
    id: number;                      /* @DESCRIPTION - Unique identifier for the resource
                                        @ACTION TYPE  read_only */
    name: string;                    /* @DESCRIPTION - Attributes name
                                        @ACTION_TYPE  read_only */
    description: string;             /* @DESCRIPTION - Attributes Description
                                        @ACTION_TYPE  read_only */
    menu_order: string;              /* @DESCRIPTION - Order of Description
                                        @ACTION_TYPE  read_only */
    count: string;                   /* @DESCRIPTION - Attributes count
                                        @ACTION_TYPE  read_only */
}