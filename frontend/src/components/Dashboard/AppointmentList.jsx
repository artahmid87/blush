import { useBookingListQuery, useDeleteBookingMutation } from '@/redux/api/Api'
import { Space, Table } from 'antd/dist/antd';
import { Button, Popconfirm } from 'antd/dist/antd';
const { Column } = Table;

const AppointmentList = () => {

  const { data, isLoading, isError } = useBookingListQuery()
  const [deleteBooking] = useDeleteBookingMutation();

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id).unwrap()
    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  };

  return (
    <div className='ml-60'>
      <div className='w-full h-16 bg-green-600 py-4'>
        <h1 className='text-2xl font-bold text-center text-white'> {data?.length} Client Remain...</h1>
      </div>

      <div className='w-full flex items-center'>
        <Table dataSource={data}  >
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="Email" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Time" dataIndex="time" key="time" />
          <Column title="Subject" dataIndex="subject" key="subject" />
          <Column title="Description" dataIndex="description" key="description" />

          <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <Popconfirm
                  title="Delete the Booking"
                  description="Are you sure to delete this Booking?"
                  onConfirm={() => handleDelete(record.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                    className='px-4 py-1 bg-rose-500 rounded-3xl text-white hover:bg-white hover:text-red-500 transition-all'
                  >
                    Delete
                  </Button>
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  )
}

export default AppointmentList

