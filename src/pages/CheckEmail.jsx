import React from "react";
import { Form, Input, Button, Checkbox, Flex, Typography } from "antd";
import { Link } from "react-router";
const { Title } = Typography;



const CheckEmail = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-2xl p-[60px] rounded-3xl mx-auto flex justify-center items-center border-black">
                <div>

                    <h1 className="text-2xl text-center mt-4">Check your email</h1>
                    <p className="text-center mt-4 font-light w-[433px] mb-5">We sent a reset link to contact@dscode...com enter 5 digit code that mentioned in the email</p>

                    <Form
                        name="login"
                        onFinish={onFinish}
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                    >
                        <Flex gap="middle" align="center" vertical>
                            <Input.OTP length={5} {...sharedProps} />
                        </Flex>




                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="mt-10">
                                Verify
                            </Button>
                        </Form.Item>
                    </Form>
                    <p className="font-light text-center text-xs">You have not received the email?  <Link className="underline font-bold">Resend</Link></p>
                </div>
            </div>
        </div>
    );
};

export default CheckEmail;
