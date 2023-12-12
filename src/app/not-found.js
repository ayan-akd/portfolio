"use client"
import CustomContainer from '@/Components/CustomContainer'
import { Button } from '@nextui-org/react'
import Lottie from 'lottie-react'
import Link from 'next/link'
import lott from "./../assets/lottie.json"
import { Helmet } from 'react-helmet-async'
export default function NotFound() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen text-white">
      <Helmet>
        <title>404 | Ayan Kumar Das</title>
        <meta name="description" content="404 Page of Ayan Kumar Das" />
      </Helmet>
     <CustomContainer>
     <div className=" text-center">
          <div className="mb-5">
            <div className="md:w-96 mx-auto mt-12">
              <Lottie animationData={lott} />
            </div>
            <h2 className="md:text-6xl text-3xl font-bold">
              WHOOPS… PAGE NOT FOUND
            </h2>
            <p className="font-semibold my-3">
              Page does not exist or some other error occurred. Go to{" "}
              <span className="text-rose">
                <Link href={"/"}>Main page</Link>
              </span>
            </p>
            <Link href={"/"}>
              <Button color='primary'>Back to Main</Button>
            </Link>
          </div>
        </div>
     </CustomContainer>
    </div>
  )
}