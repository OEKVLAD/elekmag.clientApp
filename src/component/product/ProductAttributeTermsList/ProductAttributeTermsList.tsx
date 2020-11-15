import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {getProductAttributesTermsList, productAttributesTermsList} from "./productAttributeTermsListSlice";
import {ProductAttributeTermsListModel} from "../../../model/ProductAttributesTermsList.mode";

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

type ProductAttributeTermsListProps = {
  arrayProductAttributeTermsList: number[];
}



export function ProductAttributeTermsList({ arrayProductAttributeTermsList }:ProductAttributeTermsListProps) {
  const ProductAttributesTermsListArray = useSelector(productAttributesTermsList);
  const dispatch = useDispatch();
  if(ProductAttributesTermsListArray==null)
  dispatch(getProductAttributesTermsList([270, 271, 265]))

  console.log(ProductAttributesTermsListArray);

  return (
    <>
    <Row>
      {ProductAttributesTermsListArray!==null?(
          <>
            {Object.keys(ProductAttributesTermsListArray).map((kej, index)  => (
                <>
                  {ProductAttributesTermsListArray[index]?(
                      <>
                        {ProductAttributesTermsListArray[index].map((ProductAttributesTermsList: ProductAttributeTermsListModel)  => (
                            <>
                              <Col xs={12}>
                                <h6>
                                  {ProductAttributesTermsList.name}
                                </h6>
                                <span>
                                  {ProductAttributesTermsList.description}
                                </span>
                              </Col>
                            </>
                        ))}
                      </>
                  ):(null)}
                </>
            ))}
          </>



      ):(null)}

      {/*// <>*/}
      {/*//   {Object.entries(ProductAttributesTermsListArray).map((objectConnectedGroup: any[], indexGroup: number) => (*/}
      {/*//       <>*/}
      {/*//         {ProductAttributesTermsListArray[0].map((contentPage: ProductAttributeTermsListModel) =>{*/}
      {/*//           <>*/}
      {/*//             <h1>{contentPage.id}</h1>*/}
      {/*//           </>*/}
      {/*//         })}*/}
      {/*//       </>*/}
      {/*//   ))}*/}
      {/*// </>*/}

    </Row>

    </>
  );
}
