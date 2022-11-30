import { Button, Col, Row, Space, Table } from 'antd';
import React from 'react';
import LayoutAuthenticated from '../components/LayoutAuthenticated';
import { DeleteOutlined } from '@ant-design/icons'


const Apartment = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Type',
            dataIndex: 'type'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
        {
            title: 'Action',
            dataIndex: 'option',
            render: () => (
                <Space size="middle">
                    <Button>Information</Button>
                </Space>
            ),
        },
    ]

    const dataSource = [
        {
            key: '1',
            name: 'Room 304',
            price: '3000k/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'ready',
        },
        {
            key: '2',
            name: 'Room 304',
            price: '3000k/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'ready',
        },
        {
            key: '3',
            name: 'Room 304',
            price: '3000k/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'ready',
        },
        {
            key: '4',
            name: 'Room 304',
            price: '3000k/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'ready',
        },
    ]
    return (
        <LayoutAuthenticated>
            <Row>
                <Col span={8}>
                    <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Apartment List</h2>
                    <Table columns={columns} dataSource={dataSource} />
                </Col>
                <Col span={8}>

                </Col>
                <Col span={8}>

                </Col>
            </Row>
        </LayoutAuthenticated>
    )
}

export default Apartment