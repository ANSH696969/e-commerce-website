import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo velit voluptatibus quod asperiores sit esse nostrum doloremque consectetur maxime vitae. Ducimus accusantium modi, similique incidunt, nemo ipsum, tenetur sunt veniam dignissimos odit temporibus. Rerum?</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>
                      GET IN TOUCH
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-8109845741</li>
                        <li>anshsahuji1493@gmail.com</li>

                    </ul>
                </div>

            </div>

           <div>
               <hr />
               <p className='py-5 text-sm text-center font-bold'>
                Copyright 2024@ Ansh Sahu.com - All Rights Reserved.

               </p>
            </div> 

        </div>
    )
}

export default Footer
