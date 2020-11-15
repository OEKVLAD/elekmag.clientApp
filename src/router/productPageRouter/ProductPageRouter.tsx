import React from 'react';
import {ProductModel} from './../../model/Product.model';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import { useSelector } from 'react-redux';
import {
  router
} from '../routerSlice';
import styles from './ProductPageRouter.module.css';
import Container from "react-bootstrap/cjs/Container";

import {ProductAttributeTermsList} from "../../component/product/ProductAttributeTermsList/ProductAttributeTermsList";

export function ProductPageRouter() {
  const ROUTER = useSelector(router);
  let content = ROUTER.content;

  return (
    <>
      {content.map((contentPage: ProductModel)  => (
        <>
          <ProductAttributeTermsList arrayProductAttributeTermsList={[270]}/>
          <div className={styles.productPageContainer}>
            <div className={styles.firstContainer}>
              <Container>
                <Row>
                  <Col>
                    <h1>{contentPage.name}</h1>
                  </Col>
                </Row>
                <Row className={"mb-5"}>
                  <Col>
                    <AwesomeSlider cssModule={styles}>
                      {contentPage.images.map((image: {
                        name: string,
                        alt:  string,
                        src: string,
                      })  => (
                          <div data-src={image.src} />
                      ))}
                    </AwesomeSlider>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" block>Купить</Button>
                    <Button variant="info" block>Позвонить</Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className={styles.secondContainer}>
              <div dangerouslySetInnerHTML={{__html: contentPage.short_description}}/>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="#">Описание</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Детали</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">График Работы</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Доставка</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Отзывы</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Оплата</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Возврат</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Контакт</Nav.Link>
                </Nav.Item>
              </Nav>
              <div dangerouslySetInnerHTML={{__html: contentPage.description}}/>
            </div>
            <div className={styles.thirdContainer}>

            </div>
          </div>
        </>
      ))}
    </>
  );
}
