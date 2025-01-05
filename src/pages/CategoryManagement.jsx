import { FaArrowLeft } from 'react-icons/fa6'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload, Modal, Input } from 'antd'
import { useState } from 'react'
import { Table } from 'antd'

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}
const columns = [
  {
    title: 'Serial No.',
    dataIndex: 'key',
    key: 'name',
  },
  {
    title: 'Service Name',
    dataIndex: 'serviceName',
    key: 'serviceName',
  },
  {
    title: 'Total Provides',
    dataIndex: 'totalProvider',
    key: 'totalProvider',
  },
]
const data = [
  {
    key: '1',
    serviceName: 'House Cleaning',
    totalProvider: 200,
  },
  {
    key: '2',
    serviceName: 'House Cleaning',
    totalProvider: 200,
  },
  {
    key: '3',
    serviceName: 'Sweeping',
    totalProvider: 200,
  },
  {
    key: '4',
    serviceName: 'House Cleaning',
    totalProvider: 500,
  },
]

const uploadUrl =
  'https://cors-anywhere.herokuapp.com/https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'

const CategoryManagement = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [categoryName, setCategoryName] = useState('')
  const [serviceName, setServiceName] = useState('') // New state for service name
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false) // New state for service modal

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const handleAddCategory = () => {
    console.log('Category Name:', categoryName)
    console.log('Category Image URL:', imageUrl)
    setIsModalVisible(false)
    setCategoryName('')
    setImageUrl(null)
  }

  const handleAddService = () => {
    console.log('Service Name:', serviceName)
    setIsServiceModalVisible(false)
    setServiceName('')
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const showModalService = () => {
    setIsServiceModalVisible(true)
  }

  const handleCancelService = () => {
    setIsServiceModalVisible(false)
  }

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Add Category Image
      </div>
    </button>
  )

  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-2">
        <FaArrowLeft />
        <p className="text-xl">Category Management</p>
      </div>

      <div className="bg-white p-2 mt-5">
        <p className="text-xl font-bold mb-4">Total Category</p>
        <div className="flex gap-9 flex-wrap items-center justify-start ">
          {/* Button to open the category modal */}
          <div
            onClick={showModal}
            type="primary"
            className="border border-black border-dashed w-[200px] h-[200px] flex items-center justify-center cursor-pointer rounded-lg flex-col"
          >
            <p className="text-3xl">+</p>
            <p>Add a new category</p>
          </div>

          {/* Modal for adding a new category */}
          <Modal
            title="Add a New Category"
            open={isModalVisible}
            onOk={handleAddCategory}
            onCancel={handleCancel}
            okText="Save"
            cancelText="Cancel"
          >
            <div>
              <Input
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                style={{ marginBottom: 10 }}
              />
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                action={uploadUrl}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </Modal>
        </div>
      </div>

      {/* Button for adding new service */}
      <div className="bg-white flex items-center gap-3 p-2 mt-5 justify-between">
        <p className="text-xl font-bold">Total Service</p>
        <button
          className="text-3xl font-bold border-2 h-10 w-10 text-blue-800 flex items-center justify-center border-blue-700 rounded "
          onClick={showModalService}
        >
          +
        </button>
      </div>

      {/* Modal for adding a new service */}
      <Modal
        title="Add a New Service"
        open={isServiceModalVisible}
        onOk={handleAddService}
        onCancel={handleCancelService}
        okText="Save"
        cancelText="Cancel"
      >
        <div>
          <Input
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            style={{ marginBottom: 10 }}
          />
        </div>
      </Modal>
      <Table
        columns={columns}
        pagination={{ pageSize: 3 }}
        dataSource={data}
        className="mt-5"
      />
    </div>
  )
}

export default CategoryManagement
