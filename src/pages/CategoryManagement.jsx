import { FaArrowLeft } from 'react-icons/fa6'

const CategoryManagement = () => {
  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-2">
        <FaArrowLeft />
        <p className="text-xl">Category Dashboard</p>
      </div>
      <div className="bg-white flex items-center gap-3 p-2 mt-5">
        <p className="text-xl font-bold">Total Category</p>
      </div>
    </div>
  )
}

export default CategoryManagement
