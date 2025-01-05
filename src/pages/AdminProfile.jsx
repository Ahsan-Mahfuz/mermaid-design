import { FaArrowLeft } from 'react-icons/fa6'
import { useState } from 'react'
import { Form, Input, Button, Typography, Avatar, Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Route, Routes } from 'react-router'

const { Title, Link } = Typography

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const AdminProfile = () => {
  const [form] = Form.useForm()
  const [profile, setProfile] = useState({
    firstName: 'Asadujjaman',
    lastName: 'Kabir',
    email: 'Asadujjaman@gmail.com',
    contactNo: '+99007007007',
  })

  const handleSaveChanges = (values) => {
    setProfile(values)
    console.log('Profile updated:', values)
  }

  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }

  const handleChange = async ({ fileList: newFileList }) => {
    const newFile = newFileList[newFileList.length - 1]
    if (newFile && newFile.originFileObj) {
      newFile.preview = await getBase64(newFile.originFileObj)
    }
    newFileList = newFileList.map((file, index) => ({
      ...file,
      key: `${file.uid}-${index}`,
    }))
    setFileList(newFileList)
  }

  const handleCancel = () => setPreviewVisible(false)

  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-2 cursor-pointer">
        <FaArrowLeft />
        <p className="text-xl">Admin Profile</p>
      </div>
      <div className="mt-5 bg-white h-[80vh]">
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false}
              showUploadList={false}
            >
              <Avatar
                size={100}
                src={
                  fileList.length
                    ? fileList[0].url || fileList[0].preview
                    : 'https://randomuser.me/api/portraits/men/4.jpg'
                }
              >
                <PlusOutlined />
              </Avatar>
            </Upload>
            <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
            <Title level={3}>Md Mojahid Islam</Title>
            <Link to="/mermaids/admin-profile">Edit Profile</Link> |{' '}
            <Link to="/mermaids/admin">Change Password</Link>
          </div>
          <div className="text-center my-5 text-2xl">Edit Your Profile</div>
          <Form
            form={form}
            layout="vertical"
            initialValues={profile}
            onFinish={handleSaveChanges}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'Please input your first name!' },
              ]}
            >
              <Input style={{ height: '45px' }} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Please input your last name!' },
              ]}
            >
              <Input style={{ height: '45px' }} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input style={{ height: '45px' }} />
            </Form.Item>
            <Form.Item
              label="Contact no"
              name="contactNo"
              rules={[
                {
                  required: true,
                  message: 'Please input your contact number!',
                },
              ]}
            >
              <Input style={{ height: '45px' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block className="p-5">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
