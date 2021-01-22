import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button, Form, Input, Select, Checkbox } from 'antd';

const ButtonForm = styled.button`
    display: inline-block;
    background: rgb(0, 50, 78);
    color: rgb(219, 212, 186);
    border: 2px solid rgb(0, 50, 78);
    font-weight: bold;
    padding: 0.8rem 2.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    margin-right: 0.5rem;
    margin-top: 1.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;

    :hover {
        opacity: 0.8;
    }
`;

const FormFill = () => {

    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }
      
    const plainOptions = ['< 18', '18 +', '65 +'];

    return (
        <>
            <ButtonForm onClick={showModal}>
                Fill the form
            </ButtonForm>
            <Modal 
                title="Fill in or choose required options" 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    layout="horizontal"
                >
                    <Form.Item label="Age">
                    <Checkbox.Group options={plainOptions} defaultValue={plainOptions[0]} onChange={onChange} />
                    </Form.Item>
                    <Form.Item label="Zip code" >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Preffered language">
                        <Select >
                            <Select.Option value="demo">language</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select categories">
                        <Select>
                            <Select.Option value="demo"> Category</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Category</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Category</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default FormFill;