import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

import { useSelector, useDispatch } from 'react-redux';
import {
  getAllPost,
    postList,
  getPage
} from './postListSlice';
import styles from './PostList.module.css';

const getPretyDate = (modified: any) => {
  let date = new Date(modified);

  return `${date.toLocaleDateString()}`
}

export function PostList() {
  const list = useSelector(postList);
  const dispatch = useDispatch();

    window.onload = function() {dispatch(getAllPost())};
    window.onload = function() {dispatch(getPage())};

  return (
    <>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <div className={`${styles.CreateNewAppList} m-auto`}>
          {list!==null?(
              <>
                <CardColumns>
                  {list.map((PostList: {
                        title: any,
                        excerpt:  any,
                        link: string,
                        modified: any,
                  })  => (
                    <>

                      <a className={"text-dark"} href={PostList.link}>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <div dangerouslySetInnerHTML={{__html:  PostList.title.rendered}} />
                            </Card.Title>
                            <Card.Text>
                              <ResponsiveEmbed aspectRatio="21by9">
                                <div dangerouslySetInnerHTML={{__html:  PostList.excerpt.rendered}} />
                              </ResponsiveEmbed>
                            </Card.Text>
                            <Card.Text>
                              <Button variant="light">Читай дальше</Button>
                            </Card.Text>
                            <Card.Text>
                              <small className="text-muted text-left">Дата публикации: { getPretyDate(PostList.modified) }</small>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </a>

                    </>
                  ))}
                </CardColumns>
              </>
          ):(
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
      </div>
    </>
  );
}
