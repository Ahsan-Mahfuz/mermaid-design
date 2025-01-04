import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router";

const ForgetPassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-2xl p-[60px] rounded-3xl mx-auto flex justify-center items-center border-black">
                <div>

                    <h1 className="text-2xl text-center mt-4">Forget Password?</h1>
                    <p className="text-center mt-4 font-light">Please enter your email to get verification code</p>

                    <Form
                        name="login"
                        onFinish={onFinish}
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                    >
                        <div className="mt-5">
                            <div className="mb-1">Email address</div>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Please input a valid email!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="esteban_schiller@gmail.com"
                                />
                            </Form.Item>
                        </div>


                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Continue
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
