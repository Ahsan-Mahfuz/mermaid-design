import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Button, Card, Input, Space, Table } from 'antd'
const { Search } = Input

const data = [
  {
    key: '1',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    userName: 'Md Mojahid Islam',
    email: 'Mojahid@gmail.com',
    location: 'San Francisco, United States',
    userRole: 'Maid',
    service: ['Cleaning', 'Laundry', 'Cooking'],
    verification: 'Verified',
    userType: 'Premium',
  },
  {
    key: '2',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    userName: 'Md Ahsan Islam',
    email: 'ahsan@gmail.com',
    location: 'San Francisco, United States',
    userRole: 'Maid',
    service: ['Cleaning', 'Laundry', 'Cooking', 'Home Cleaning'],
    verification: 'Incomplete',
    userType: 'Premium',
  },
]

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text) => (
      <img src={text} alt="User" className="w-10 h-10 rounded-full" />
    ),
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'User Role',
    dataIndex: 'userRole',
    key: 'userRole',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
    render: (services) => {
      const visibleServices = services.slice(0, 2)
      const hiddenServices = services.slice(2)

      return (
        <div>
          <div className="flex gap-2">
            {visibleServices.map((service, index) => (
              <button
                key={index}
                className="px-2 py-1 bg-gray-200 text-black rounded text-xs "
              >
                {service}
              </button>
            ))}
          </div>
          {hiddenServices.length > 0 && (
            <button className="px-2 py-1 bg-gray-200 text-black rounded text-xs mt-2">
              {`${hiddenServices.length}+ more`}
            </button>
          )}
        </div>
      )
    },
  },
  {
    title: 'Verification',
    dataIndex: 'verification',
    key: 'verification',
    render: (verification) => (
      <span
        className={`px-2 py-1 rounded ${
          verification === 'Verified' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
      >
        {verification}
      </span>
    ),
  },
  {
    title: 'User Type',
    dataIndex: 'userType',
    key: 'userType',
    render: (userType) => (
      <span
        className={`px-2 py-1 rounded ${
          userType === 'Premium' ? 'bg-yellow-500' : 'bg-green-500'
        } text-white`}
      >
        {userType}
      </span>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => (
      <div className="flex gap-2">
        <Button onClick={() => viewProfile(record.key)}>
          <img src="/profile.svg" alt="profile" />
        </Button>
        <Button type="danger" onClick={() => disableProfile(record.key)}>
          <img src="/disabled.svg" alt="disabled" />
        </Button>
      </div>
    ),
  },
]

const viewProfile = (key) => {
  console.log(`Viewing profile with key: ${key}`)
}

const disableProfile = (key) => {
  console.log(`Disabling profile with key: ${key}`)
}

const MaidManagement = () => {
  const [filteredData, setFilteredData] = useState(data)

  const onSearch = (value) => {
    const filtered = data.filter((user) =>
      user.userName.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  return (
    <div>
      <div className="bg-white flex items-center p-2 justify-between">
        <div className="flex items-center gap-3 ">
          <FaArrowLeft />
          <p className="text-xl">Maid Management</p>
        </div>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Search for Maid"
              allowClear
              onSearch={onSearch}
              style={{
                width: 300,
              }}
            />
          </Space>
        </div>
      </div>
      <Card bordered={true} style={{ marginTop: 16 }}>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: 7,
          }}
        />
      </Card>
    </div>
  )
}

export default MaidManagement
