import { Form, Input, Button } from "antd";

const SetNewPassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-2xl p-[60px] rounded-3xl mx-auto flex justify-center items-center border-black">
                <div>

                    <h1 className="text-2xl text-center mt-4">Set a new password</h1>
                    <p className="text-center mt-4 font-light w-[400px] mb-5">Create a new password. Ensure it differs from
                        previous ones for security</p>

                    <Form
                        name="login"
                        onFinish={onFinish}
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                    >
                        <Form.Item
                            name="password"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="...................." />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }), 
                            ]}
                        >
                            <Input.Password placeholder="...................." />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Reset Password
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
