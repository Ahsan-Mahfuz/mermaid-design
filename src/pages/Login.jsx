import { Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router'

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-2xl p-[60px] rounded-3xl mx-auto flex justify-center items-center border-black">
        <div>
          <div className="flex items-center justify-center">
            <img src="logo.svg" alt="logo" className="w-[150px]" />
          </div>
          <h1 className="text-2xl text-center mt-4">Login to Account</h1>
          <p className="text-center mt-4 font-light">
            Please enter your email and password to continue
          </p>

          <Form
            name="login"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
            layout="vertical"
          >
            <div className="mt-2">
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

            <div>
              <div className="mb-1">Password</div>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="...................."
                  prefix={<LockOutlined />}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember Password</Checkbox>
                </Form.Item>
                <Link to="/forgetPassword">Forgot password?</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
