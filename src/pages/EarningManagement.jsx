import { FaArrowLeft } from 'react-icons/fa6'
import { Button, Card, Input, Space, Table } from 'antd'
import { useState } from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import EarningsChart from '../components/EarningsChart'
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
    description: 'Purchased Premium Plan',
    purchaseDate: '2025-01-01',
    transactionId: 'TXN12345',
    amount: '$100',
  },
  {
    key: '2',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    userName: 'Md Mojahid Islam',
    email: 'Mojahid@gmail.com',
    location: 'San Francisco, United States',
    joinAs: 'Client',
    userType: 'Free',
    description: 'Purchased Basic Plan',
    purchaseDate: '2025-01-02',
    transactionId: 'TXN12346',
    amount: '$50',
  },
  {
    key: '3',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Jane Doe',
    email: 'jane.doe@example.com',
    location: 'New York, United States',
    joinAs: 'Maid',
    userType: 'Premium',
    description: 'Purchased Premium Plan',
    purchaseDate: '2025-01-03',
    transactionId: 'TXN12347',
    amount: '$150',
  },
  {
    key: '4',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Jane Doe',
    email: 'jane.doe@example.com',
    location: 'New York, United States',
    joinAs: 'Maid',
    userType: 'Premium',
    description: 'Purchased Premium Plan',
    purchaseDate: '2025-01-03',
    transactionId: 'TXN12347',
    amount: '$150',
  },
  {
    key: '5',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    userName: 'Jane Doe',
    email: 'jane.doe@example.com',
    location: 'New York, United States',
    joinAs: 'Maid',
    userType: 'Premium',
    description: 'Purchased Premium Plan',
    purchaseDate: '2025-01-03',
    transactionId: 'TXN12347',
    amount: '$150',
  },

  // Add similar objects for other users...
]

const columns = [
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Purchase Date',
    dataIndex: 'purchaseDate',
    key: 'purchaseDate',
  },
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (_, record) => (
      <div className="flex items-center gap-2 font-bold">{record.amount}</div>
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record) => (
      <Button onClick={() => viewProfile(record.key)}>
        <IoDocumentTextOutline />
      </Button>
    ),
  },
]

const viewProfile = (key) => {
  console.log(`Viewing profile with key: ${key}`)
}

const EarningManagement = () => {
  const [filteredData, setFilteredData] = useState(data)
  const [showEarningsSection, setShowEarningsSection] = useState(true)
  const handleSeeAllHistory = () => {
    setShowEarningsSection(false)
  }

  const onSearch = (value) => {
    const filtered = data.filter(
      (user) =>
        user.userName.toLowerCase().includes(value.toLowerCase()) ||
        user.transactionId.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredData(filtered)
  }
  const handleGoBack = () => {
    window.history.back()
  }
  return (
    <div>
      <div className="bg-white flex items-center p-2 justify-between cursor-pointer">
        <div className="flex items-center gap-3 " onClick={handleGoBack}>
          <FaArrowLeft />
          <p className="text-xl">Earnings Management</p>
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
      {showEarningsSection && (
        <div className="flex items-center justify-between mt-5 gap-5">
          <div className="flex gap-5 items-center justify-center border p-2 bg-[#F1F1F1] w-[350px] h-[300px] rounded">
            <RiMoneyDollarCircleLine className="text-5xl" />
            <div>
              <p className="text-xl text-blue-800">Total Earnings</p>
              <p className="text-4xl text-red-500 font-bold">$ 1,000</p>
            </div>
          </div>
          <EarningsChart />
        </div>
      )}
      {showEarningsSection && (
        <div className="bg-white p-2 mt-3 flex justify-between items-center">
          <div className="flex items-center gap-3 ">
            <p className="text-xl">Transaction History</p>
          </div>
          <button
            className="text-xl border text-white bg-blue-600 rounded-3xl px-4 py-1"
            onClick={handleSeeAllHistory}
          >
            See All History
          </button>
        </div>
      )}

      <Card bordered={true} style={{ marginTop: 10 }}>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: showEarningsSection ? 3 : 9,
          }}
        />
      </Card>
    </div>
  )
}

export default EarningManagement
