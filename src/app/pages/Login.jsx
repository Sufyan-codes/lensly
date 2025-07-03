import React from 'react'
import login from "../../../public/images/Credit Card.svg"
import { Link } from 'react-router-dom'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 


export default function Login() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='text-white'>
          <img src={login} alt="" />
        </div>
        <div className='mt-20 items-center px-10 '>
          <Card color="transparent" shadow={false}>
          <h1 className="mt-10 text-blue-900 font-semibold text-xl lg:text-3xl">
        FinTech
      </h1>
      <h1 className='text-xl text-neutral-800 text-semibold'>
        Create an account
      </h1>
      <p  className="mt-1 font-normal text-neutral-800">
        Nice to meet you! Enter your details to register.
      </p>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <span className="-mb-1 text-neutral-800">
            Your Email
          </span>
          <input
            
            placeholder="name@mail.com"
            className=" border border-gray-200 p-4 rounded-lg"
            
          />
        <span className="-mb-1 text-neutral-800">
            password
          </span>
          <input
           
            placeholder="********"
            className=" border border-gray-200 p-4 rounded-lg"
           
          />
        </div>
       
        <Button className="mt-6 bg-blue-800 w-full p-4">
          <Link to='/dashboard'>Login</Link>
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
        </div>
      </div>
    </section>
  )
}


