import { useGetBookingByIdQuery, useUpdateBookingMutation } from '@/redux/api/Api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';

const ConfirmationMail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();
  const id = router.query.id;

  // Fetch booking data by ID
  const { data, error, isLoading } = useGetBookingByIdQuery(id);

  // Populate form fields with the fetched data
  useEffect(() => {
    if (data) {
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setSubject(data.subject);
      setDate(data.date);
      setTime(data.time);
      setDescription(data.description);
    }
  }, [data]);

  // Update booking mutation
  const [updateBooking, { isLoading: updateLoading, isSuccess, isError }] = useUpdateBookingMutation();

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      name,
      email,
      phone,
      subject,
      date,
      time,
      description,
    };

    try {
      await updateBooking({ id, booking: updateData }).unwrap();
      router.push('/dashboard');  // Redirect after successful update
    } catch (error) {
      console.error('Update failed:', error);
      if (error.data && error.data.message) {
        alert(`Error: ${error.data.message}`);
      } else {
        alert('An unknown error occurred.');
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching booking details.</div>;

  return (
    <div className='w-full h-full'>
      <Container>
        <Link href={'/dashboard'}>Back to Dashboard</Link>
        <h1 className='text-center text-4xl text-tertiary py-8 font-bold'>
          Do you want to Change?
        </h1>
        <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center'>
          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Name */}
            <div className="w-full py-2">
              <input
                type="text"
                placeholder="Name"
                className="py-4 px-5 w-full border-b border-primary text-secondery"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled  
                required
              />
            </div>

            {/* Email */}
            <div className="w-full py-2">
              <input
                type="email"
                placeholder="E-mail"
                className="py-4 px-5 w-full border-b border-primary text-secondery"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Phone Number */}
            <div className="w-full py-2">
              <input
                type="text"
                placeholder="Phone Number"
                className="py-4 px-5 w-full border-b border-primary text-secondery"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                disabled
                required
              />
            </div>

            {/* Select Subject */}
            <div className="w-full py-2">
              <input
                className="py-4 px-5 w-full border-b border-primary outline-none text-secondery"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                disabled
                required
              />
                {/* <option value={subject}>{subject}</option> */}
              
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Date and Time picker */}
            <div className="w-full py-2">
              <input
                type="date"
                className="py-4 px-5 w-full border-b border-primary outline-none text-tertiary"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="w-full py-2">
              <input
                type="text"
                className="py-4 px-5 w-full border-b border-primary text-tertiary outline-none"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Text area */}
          <div className="py-2">
            <textarea
              className="py-4 px-5 w-full border-b border-primary text-secondary outline-none"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              // value={description}
              required
              placeholder="Drop a message for client..."
            ></textarea>
          </div>

          <button type="submit" className='bg-red-500 py-2 px-7'>
            Confirm
          </button>
        </form>
      </Container>
    </div>
  );
};

export default ConfirmationMail;
