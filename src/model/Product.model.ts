/*
* @AUTHOR:          Omelchenko Vladyslav
* @DATE_CREATE:     14.11.2020
* @ACTION_TYPE:     GET
* @REST_API_GET:    /wp-json/wc/v3/products
*/
export type ProductModel = {
    id: number;                     /* @DESCRIPTION - Unique identifier for the resource                              
                                       @ACTION TYPE  read_only */
    name: string;                   /* @DESCRIPTION - Product name                                                   
                                       @ACTION_TYPE  read_write */
    slug: string;                   /* @DESCRIPTION - Product slug                                                   
                                       @ACTION_TYPE  read_write */
    permalink: string;              /* @DESCRIPTION - Product URL                                                    
                                       @ACTION_TYPE  read_only */
    date_created: Date;             /* @DESCRIPTION - The date the product was created, in the site's timezone        
                                       @ACTION_TYPE  read_only */
    date_created_gmt: Date;         /* @DESCRIPTION - The date the product was created, as GMT                        
                                       @ACTION_TYPE  read_only */
    date_modified: Date;            /* @DESCRIPTION - The date the product was last modified, in the site's timezone  
                                       @ACTION_TYPE  read_only */
    date_modified_gmt: Date;        /* @DESCRIPTION - The date the product was last modified, as GMT                  
                                       @ACTION_TYPE  read_only */
    type: string;                   /* @DESCRIPTION - Product type. Options: simple, grouped, external and variable. Default is simple       
                                       @ACTION_TYPE  read_write */
    status: string;                 /* @DESCRIPTION - Product status (post status). Options: draft, pending, private 
                                       @ACTION_TYPE  read_write */
    featured: boolean;              /* @DESCRIPTION - Featured product. Default is false.                             
                                       @ACTION_TYPE  read_write */
    catalog_visibility: string;     /* @DESCRIPTION - Catalog visibility. Options: visible, catalog, search and hidden. Default is visible.                             
                                       @ACTION_TYPE  read_write */
    description: string;            /* @DESCRIPTION - Product description.                                           
                                       @ACTION_TYPE  read_write */
    short_description: string;      /* @DESCRIPTION - Product short description.                                      
                                       @ACTION_TYPE  read_write */
    sku: string;                    /* @DESCRIPTION - Unique identifier.                                             
                                       @ACTION_TYPE  read_write */
    price: string;                  /* @DESCRIPTION - Current product price.                                         
                                       @ACTION_TYPE  read_only */
    regular_price: string;          /* @DESCRIPTION - Product regular price                                          
                                       @ACTION_TYPE  read_write */
    sale_price: string;             /* @DESCRIPTION - Product sale price                                             
                                       @ACTION_TYPE  read_write */
    date_on_sale_from: Date;        /* @DESCRIPTION - Start date of sale price, in the site's timezone                
                                       @ACTION_TYPE  read_write */
    date_on_sale_from_gmt: Date;    /* @DESCRIPTION - Start date of sale price, as GMT.                               
                                       @ACTION_TYPE  read_write */
    date_on_sale_to: Date;          /* @DESCRIPTION - End date of sale price, in the site's timezone                  
                                       @ACTION_TYPE  read_write */
    date_on_sale_to_gmt: Date;      /* @DESCRIPTION - End date of sale price, as GMT                                  
                                       @ACTION_TYPE  read_write */
    price_html: string;             /* @DESCRIPTION - Price formatted in HTML                                        
                                       @ACTION_TYPE  read_only */
    on_sale: boolean;               /* @DESCRIPTION - Shows if the product is on sale                                 
                                       @ACTION_TYPE  read_only */
    purchasable: boolean;           /* @DESCRIPTION - Shows if the product can be bought                              
                                       @ACTION_TYPE  read_only */
    total_sales: number;            /* @DESCRIPTION - Amount of sales                                                
                                       @ACTION_TYPE  read_only */
    virtual: boolean;               /* @DESCRIPTION - If the product is virtual. Default is false                     
                                       @ACTION_TYPE  read_write */
    downloadable: boolean;          /* @DESCRIPTION - If the product is downloadable. Default is false                
                                       @ACTION_TYPE  read_write */
    downloads: any;                 /* @DESCRIPTION - List of downloadable files                                      
                                       @ACTION_TYPE  read_write */
    download_limit: number;         /* @DESCRIPTION - Number of times downloadable files can be downloaded after  purchase. Default is -1                                    
                                       @ACTION_TYPE  read_write */
    download_expiry: number;        /* @DESCRIPTION - Number of days until access to downloadable files expires. Default is -1                               
                                       @ACTION_TYPE  read_write */
    external_url: string;           /* @DESCRIPTION - Product external URL. Only for external products                
                                       @ACTION_TYPE  read_write */
    button_text: string;            /* @DESCRIPTION - Product external button text. Only for external products        
                                       @ACTION_TYPE  read_write */
    tax_status: string;             /* @DESCRIPTION - Tax status. Options: taxable, shipping and none. Default is taxable                                        
                                       @ACTION_TYPE  read_write */
    tax_class: string;              /* @DESCRIPTION - Tax class                                                      
                                       @ACTION_TYPE  read_write */
    manage_stock: boolean;          /* @DESCRIPTION - Stock management at product level. Default is false             
                                       @ACTION_TYPE  read_write */
    stock_quantity: number;         /* @DESCRIPTION - Stock quantity                                                 
                                       @ACTION_TYPE  read_write */
    stock_status: string;           /* @DESCRIPTION - Controls the stock status of the product. Options: instock, outofstock, onbackorder. Default is instock       
                                       @ACTION_TYPE  read_write */
    backorders: boolean;            /* @DESCRIPTION - If managing stock, this controls if backorders are allowed. Options: no, notify and yes. Default is no                 
                                       @ACTION_TYPE  read_write */
    backorders_allowed: boolean;    /* @DESCRIPTION - Shows if backorders are allowed                                 
                                       @ACTION_TYPE  read_only */
    backordered: boolean;           /* @DESCRIPTION - Shows if the product is on backordered                          
                                       @ACTION_TYPE  read_only */
    sold_individually: boolean;     /* @DESCRIPTION - Allow one item to be bought in a single order. Default is false 
                                       @ACTION_TYPE  read_write */
    weight: string;                 /* @DESCRIPTION - Product weight                                                 
                                       @ACTION_TYPE  read_write */
    dimensions: any;                /* @DESCRIPTION - Allow one item to be bought in a single order. Default is false 
                                       @ACTION_TYPE  read_write */
    shipping_required: boolean;     /* @DESCRIPTION - Shows if the product need to be shipped                         
                                       @ACTION_TYPE  read_only */
    shipping_taxable: boolean;      /* @DESCRIPTION - Shows whether or not the product shipping is taxable            
                                       @ACTION_TYPE  read_only */
    shipping_class: string;         /* @DESCRIPTION - Shipping class slug                                            
                                       @ACTION_TYPE  read_write */
    shipping_class_id: number;      /* @DESCRIPTION - Shipping class ID                                              
                                       @ACTION_TYPE  read_only */
    reviews_allowed: boolean;       /* @DESCRIPTION - Allow reviews. Default is true                                  
                                       @ACTION_TYPE  read_write */
    average_rating: string;         /* @DESCRIPTION - Reviews average rating                                         
                                       @ACTION_TYPE  read_only */
    rating_count: number;           /* @DESCRIPTION - Amount of reviews that the product have                         
                                       @ACTION_TYPE  read_only */
    related_ids: any;               /* @DESCRIPTION - List of related products IDs                                    
                                       @ACTION_TYPE  read_only */
    upsell_ids: any;                /* @DESCRIPTION - List of up-sell products IDs                                    
                                       @ACTION_TYPE  read_write */
    cross_sell_ids	: any;          /* @DESCRIPTION - List of cross-sell products IDs                                 
                                       @ACTION_TYPE  read_write */
    parent_id: boolean;             /* @DESCRIPTION - Product parent ID                                              
                                       @ACTION_TYPE  read_write */
    purchase_note: string;          /* @DESCRIPTION - Optional note to send the customer after purchase               
                                       @ACTION_TYPE  read_write */
    categories: any;                /* @DESCRIPTION - List of categories                                             
                                       @ACTION_TYPE  read_write */
    tags: any;                      /* @DESCRIPTION - List of tags                                                   
                                       @ACTION_TYPE  read_write */
    images: any;                    /* @DESCRIPTION - List of images                                                 
                                       @ACTION_TYPE  read_write */
    attributes: any;                /* @DESCRIPTION - List of attributes                                             
                                       @ACTION_TYPE  read_write */
    default_attributes: any;        /* @DESCRIPTION - Defaults variation attributes                                   
                                       @ACTION_TYPE  read_write */
    variations: any;                /* @DESCRIPTION - List of variations IDs                                         
                                       @ACTION_TYPE  read_only */
    grouped_products: any;          /* @DESCRIPTION - List of grouped products ID                                     
                                       @ACTION_TYPE  read_write */
    menu_order: number;             /* @DESCRIPTION - Menu order, used to custom sort products                        
                                       @ACTION_TYPE  read_write */
    meta_data: any;                 /* @DESCRIPTION - Meta data                                                      
                                       @ACTION_TYPE  read_write */
};