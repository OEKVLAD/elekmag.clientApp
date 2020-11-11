import React  from 'react';
import 'react-awesome-slider/src/styles';

import { useSelector } from 'react-redux';
import {
  router
} from '../routerSlice';


export function PostsRouter() {
  const ROUTER = useSelector(router);
  let content = ROUTER.content;

  return (
    <>
      {content.map((contentPage: {
        title: {
          rendered: string
        },
        content: {
          rendered: string
        },
      })  => (
          <>
            <h1>{contentPage.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: contentPage.content.rendered}}/>
          </>
      ))}
    </>
  );
}
