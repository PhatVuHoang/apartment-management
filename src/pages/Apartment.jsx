import { Button, Col, Row, Space, Table, Tag, message, Upload } from 'antd';
import React from 'react';
import LayoutAuthenticated from '../components/LayoutAuthenticated';
import { UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'


const Apartment = () => {
    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState();

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
            dataIndex: 'status',
            render: (_, { status }) => {
                console.log(status)
                if (status === 'Available')
                    return <Tag color='green' key={status}>
                        {status}
                    </Tag>
                else
                    return <Tag color='volcano' key={status}>
                        {status}
                    </Tag>
            }
        },
        {
            title: 'Action',
            dataIndex: 'option',
            render: () => (
                <Space size="middle">
                    <Button>Detail</Button>
                </Space>
            ),
        },
    ]

    const dataSource = [
        {
            key: '1',
            name: 'Room 304',
            price: '3mil/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'Available',
        },
        {
            key: '2',
            name: 'Room 304',
            price: '3mil/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'Available',
        },
        {
            key: '3',
            name: 'Room 304',
            price: '3mil/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'Available',
        },
        {
            key: '4',
            name: 'Room 304',
            price: '3mil/month',
            type: '2 bedrooms, 2 bathrooms',
            status: 'Unavailable',
        },
    ]

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    return (
        <LayoutAuthenticated>
            <Row>
                <Col span={8}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Apartment List</h2>
                    <Table columns={columns} dataSource={dataSource} />
                </Col>
                <Col span={8}>

                </Col>
                <Col span={8}>
                    <p style={{ textAlign: 'center', marginBottom: '20px' }}>Room 304's detail</p>
                    <div>
                        <p>Apartment Image</p>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </div>
                </Col>
            </Row>
        </LayoutAuthenticated>
    )
}

export default Apartment