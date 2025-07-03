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
 


export default function CreateAccount() {
  return (
    <section>
      <div className='grid grid-cols grid-cols-2 min-h-screen'>
        <div className=' text-white'>
          <img src={login} alt="" />
        </div>
        <div className='mt-20 px-10'>
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
            Your Name
          </span>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <span className="-mb-1 text-neutral-800">
            Your Email
          </span>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 bg-blue-800" fullWidth>
         <Link to='/dashboard'> Create Account</Link>
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900">
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


