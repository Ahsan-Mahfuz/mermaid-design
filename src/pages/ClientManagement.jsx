import { FaArrowLeft } from 'react-icons/fa6'
import { Button, Card, Input, Space, Table } from 'antd'
import { useState } from 'react'
const { Search } = Input


const data = [
  {
    key: '1',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    userName: 'Md Mojahid Islam',
    email: 'Mojahid@gmail.com',
    location: 'San Francisco, United States',
    joinAs: 'Client',
    userType: 'Premium',
  },
  {
    key: '2',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    userName: 'Md Mojahid Islam',
    email: 'Mojahid@gmail.com',
    location: 'San Francisco, United States',
    joinAs: 'Client',
    userType: 'Free',
  },
  {
    key: '3',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Jane Doe',
    email: 'jane.doe@example.com',
    location: 'New York, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '4',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    userName: 'John Smith',
    email: 'john.smith@example.com',
    location: 'Los Angeles, United States',
    joinAs: 'Client',
    userType: 'Free',
  },
  {
    key: '5',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '6',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '7',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '8',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '9',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '10',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
  {
    key: '11',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    userName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Chicago, United States',
    joinAs: 'Maid',
    userType: 'Premium',
  },
]

const columns = [
  {
    title: 'Profile',
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
    title: 'Join As A',
    dataIndex: 'joinAs',
    key: 'joinAs',
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
const ClientManagement = () => {
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
          <p className="text-xl">Client Management</p>
        </div>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Search for clients"
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

export default ClientManagement
