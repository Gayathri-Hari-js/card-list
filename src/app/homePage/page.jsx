//This component display the product list
'use client'
import { useEffect, useState } from 'react';
import { Card, Col, Row, Layout, Spin } from 'antd';
import axios from 'axios';
import MainLayout from '../mainLayout/page';

const { Header, Content } = Layout;

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
  <MainLayout>
      <Layout>
        <Header className='home-page__header'>
          Product List
        </Header>
        <Content className='home-page__content'>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[16, 16]}>
              {products.map(product => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <Card title={product.title} cover={<img alt={product.title} src={product.image} className='home-page__card'/>}>
                    <p>Price: ${product.price}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Content>
      </Layout>
      </MainLayout>
  );
}
