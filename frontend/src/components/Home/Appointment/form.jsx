import React, { useState, useRef } from 'react'
import { DatePicker } from 'antd/dist/antd';
import { BookingTime, scheduleValue } from '@/components/ui/data';
import moment from 'moment';
import { useCreateBookingMutation } from '@/redux/api/Api';
import { LoadingButton, BookingButton } from './BookingButton';
import { toast } from 'react-toastify';

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const formRef = useRef()
  
  //Date collector
  const dateColllect = (_, dateString) => {
    setDate(dateString)
  };

  // booking mutaion form redux
  const [booking, { isLoading, isSuccess, isError, error }] = useCreateBookingMutation();

 // handleAppoinment
  const handleAppoinment = async (e) => {
    try {
      e.preventDefault();
      await booking({ name, email, phone, subject, date, time, description }).unwrap();
      formRef.current.reset()
    } catch (error) {
      console.error('Booking failed', error);
    }
  };
  return (
    <form ref={formRef} onSubmit={handleAppoinment}>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">

        {/* Name */}
        <div className="w-full py-2">
          <input type="text" placeholder="Name"
            className="py-4 px-5 w-full border-b border-primary"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="w-full py-2">
          <input type="email" placeholder="E-mail"
            className="py-4 px-5 w-full border-b border-primary"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">

        {/* Phone Number */}
        <div className="w-full py-2">
          <input type="text" placeholder="Phone Number"
            className="py-4 px-5 w-full border-b border-primary"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/*select Subject */}
        <div className="w-full py-2">
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            onChange={(e) => setSubject(e.target.value)}
            required>
            {scheduleValue?.map((item) => (

                <option key={item.id} value={item.value}

                >{item.title}</option>
              ))}

          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Date and Time picker */}
        <div className="w-full py-2">
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={(current) => {
              return moment().add(-1, 'days') >= current;
            }}
            className="py-4 px-5 w-full border-b border-primary outline-none"
            onChange={dateColllect}
            required />
        </div>

        <div className="w-full py-2">
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            onChange={(e) => setTime(e.target.value)}
            required
            placeholder="Phone Number">
            {
              BookingTime?.map((time) => (

                <option key={time} value={time}

                >{time}</option>
              ))
            }
          </select>
        </div>
      </div>

      {/* text area */}
      <div className="py-2">
        <textarea className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
          rows="4" cols="50"
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Please! provide details about the service you're looking for..."
        ></textarea>
      </div>
      <div>

        {/* Appontment Button */}
        {isLoading ?
          (<LoadingButton />)
          : (<BookingButton />)}
        {isSuccess && (
          toast.success('You will receive a confirmation Email!', {
            toastId: '',
            position: "bottom-left",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          }))}

        {isError && (
          toast.error('Something went wrong! please try again!', {
            toastId: '',
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          }))}
      </div>
    </form>
  )
}

export default Form