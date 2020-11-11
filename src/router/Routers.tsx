import React from 'react';

import {
  getRouter,
  router
} from './routerSlice';
import {useDispatch, useSelector} from "react-redux";

import { ProductPageRouter } from './productPageRouter/ProductPageRouter';
import { CategoriesRouter } from './categoriesRouter/CategoriesRouter';
import { PagesRouter } from './pagesRouter/PagesRouter';
import { PostsRouter } from './postsRouter/PostsRouter';




export function Routers() {
  const pageType = useSelector(router);
  const dispatch = useDispatch();

  window.onload = function() {dispatch(getRouter(window.location.pathname))};

  const ROUTER = (type: string) => {
    switch(type) {
      case "posts":   return <PostsRouter/>;
      case "pages":   return <PagesRouter/>;
      case "categories": return <CategoriesRouter/>;
      case "products":  return <ProductPageRouter/>;
      default:      return null
    }
  }

  return (
    <>

      {pageType!==null?(
          <>
              { ROUTER(pageType.type) }
          </>
      ): (
          <>
            <div className="jumbotron jumbotron-fluid mb-0">
              <div className="container">
                <h1 className="display-4">
                  <div className="d-flex align-items-center">
                    <strong className="d-flex ml-auto">Loading...</strong>
                    <div className="spinner-border d-flex mr-auto" role="status" aria-hidden="true"></div>
                  </div>
                </h1>
              </div>
            </div>
          </>
      )}
    </>
  );
}
