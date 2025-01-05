import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Card, Input, Space, Table } from 'antd'
const { Search } = Input

const data = [
  {
    key: '1',
    clientImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    clientUserName: 'Md Ishak Islam',
    clientEmail: 'Mojahid@gmail.com',
    clientLocation: 'San Francisco, United States',
    maidImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    maidUserName: 'Mahbub',
    maidEmail: 'ahsan@gmail.com',
    bookedService: ['Cleaning', 'Laundry', 'Cooking'],
    status: 'completed',
    price: '$50',
    priceInTokens: '19900000',
    paymentMethod: 'Token',
  },
  {
    key: '2',
    clientImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    clientUserName: 'Md Tauhid Islam',
    clientEmail: 'Mojahid@gmail.com',
    clientLocation: 'San Francisco, United States',
    maidImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    maidUserName: 'Ahsan ',
    maidEmail: 'ahsan@gmail.com',
    bookedService: ['Cleaning', 'Laundry', 'Cooking'],
    status: 'completed',
    price: '$50',
    priceInTokens: '1000',
    paymentMethod: 'Dollar',
  },
  {
    key: '3',
    clientImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    clientUserName: 'Md Ripon Islam',
    clientEmail: 'Mojahid@gmail.com',
    clientLocation: 'San Francisco, United States',
    maidImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    maidUserName: ' Mahfuz',
    maidEmail: 'ahsan@gmail.com',
    bookedService: ['Cleaning', 'Laundry', 'Cooking'],
    status: 'Incomplete',
    price: '$50',
    priceInTokens: '1000',
    paymentMethod: 'Token',
  },
]

const columns = [
  {
    title: 'Client Details',
    key: 'clientDetails',
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <img
          src={record.clientImage}
          alt="Client"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">{record.clientUserName}</p>
          <p className="text-gray-500 text-sm">{record.clientEmail}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Client Location',
    dataIndex: 'clientLocation',
    key: 'clientLocation',
  },
  {
    title: 'Maid Details',
    key: 'maidDetails',
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <img
          src={record.maidImage}
          alt="Maid"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">{record.maidUserName}</p>
          <p className="text-gray-500 text-sm">{record.maidEmail}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Booked Service',
    dataIndex: 'bookedService',
    key: 'bookedService',
    render: (bookedService) => {
      const visibleServices = bookedService.slice(0, 2)
      const hiddenServices = bookedService.slice(2)

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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <span
        className={`px-2 py-1 rounded ${
          status === 'completed' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}
      >
        {status}
      </span>
    ),
  },
  {
    title: 'Price',
    key: 'price',
    render: (_, record) => (
      <div className="flex items-center">
        {record.paymentMethod === 'Dollar' ? (
          <p>{record.price}</p>
        ) : (
          <button className="flex items-center border border-gray-300 rounded-3xl pr-2 pl-1 py-1">
            <img src="/mrmd token icon.svg" alt="Token" className="w-7 mr-2" />
            <p>{record.priceInTokens}</p>
          </button>
        )}
      </div>
    ),
  },
]

const BookingManagement = () => {
  const [filteredData, setFilteredData] = useState(data)

  const onSearch = (value) => {
    const searchValue = value.toLowerCase()

    const filtered = data.filter(
      (d) =>
        d.clientUserName.toLowerCase().includes(searchValue) ||
        d.maidUserName.toLowerCase().includes(searchValue)
    )

    setFilteredData(filtered)
  }

  return (
    <div>
      <div className="bg-white flex items-center p-2 justify-between">
        <div className="flex items-center gap-3">
          <FaArrowLeft />
          <p className="text-xl">Booking Management</p>
        </div>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Search for Client or Maid"
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

export default BookingManagement
