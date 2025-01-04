import { Layout, Avatar, Menu, Dropdown } from 'antd'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { UserOutlined, DownOutlined, DollarOutlined } from '@ant-design/icons'
import { LuLayoutDashboard } from 'react-icons/lu'
import { RiAdminFill } from 'react-icons/ri'
import { TbBrandBooking } from 'react-icons/tb'
import { MdCategory } from 'react-icons/md'
import { GrUserWorker } from 'react-icons/gr'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import ClientManagement from './ClientManagement'
import MaidManagement from './MaidManagement'
import BookingManagement from './BookingManagement'
import CategoryManagement from './CategoryManagement'
import EarningManagement from './EarningManagement'
import AdminProfile from './AdminProfile'

const { Header, Sider, Content } = Layout

const headerStyle = {
  textAlign: 'center',
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#fff',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}

const siderStyle = {
  backgroundColor: '#fff',
  height: '100vh',
  paddingTop: 64,
  borderRight: '1px solid #f0f0f0',
}

const contentStyle = {
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: '#9DBFF9',
  padding: '16px',
  marginTop: '64px',
}

const dropdownItems = [
  {
    key: '1',
    label: 'Profile Settings',
  },
  {
    key: '2',
    label: 'Sign out',
  },
]

const menuItems = [
  {
    key: '/mermaids',
    icon: <LuLayoutDashboard />,
    label: <Link to="/mermaids">Admin Dashboard</Link>,
  },
  {
    key: '/mermaids/client-management',
    icon: <UserOutlined />,
    label: <Link to="/mermaids/client-management">Client Management</Link>,
  },
  {
    key: '/mermaids/maid-management',
    icon: <GrUserWorker />,
    label: <Link to="/mermaids/maid-management">Maid Management</Link>,
  },
  {
    key: '/mermaids/booking-management',
    icon: <TbBrandBooking />,
    label: <Link to="/mermaids/booking-management">Booking Management</Link>,
  },
  {
    key: '/mermaids/category-management',
    icon: <MdCategory />,
    label: <Link to="/mermaids/category-management">Category Management</Link>,
  },
  {
    key: '/mermaids/earning-management',
    icon: <DollarOutlined />,
    label: <Link to="/mermaids/earning-management">Earning Management</Link>,
  },
  {
    key: '/mermaids/admin-profile',
    icon: <RiAdminFill />,
    label: <Link to="/mermaids/admin-profile">Admin Profile</Link>,
  },
]

const HeroSectionPage = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Header
        style={headerStyle}
        className="flex items-center justify-between px-4"
      >
        <img src="/logo.svg" alt="Logo" className="w-[180px] p-1" />
        <div className="flex items-center gap-4 p-6">
          <IoMdNotificationsOutline className="text-2xl cursor-pointer hover:text-blue-500" />
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
          <Dropdown
            menu={{
              items: dropdownItems,
            }}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-1 cursor-pointer"
            >
              Md Mojahid Islam <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </Header>

      <Layout>
        <Sider width="250px" style={siderStyle}>
          <Menu
            theme="light"
            mode="inline"
            items={menuItems}
            onClick={(item) => navigate(item.key)}
          />
        </Sider>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/client-management" element={<ClientManagement />} />
            <Route path="/maid-management" element={<MaidManagement />} />
            <Route path="/booking-management" element={<BookingManagement />} />
            <Route
              path="/category-management"
              element={<CategoryManagement />}
            />
            <Route path="/earning-management" element={<EarningManagement />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default HeroSectionPage
