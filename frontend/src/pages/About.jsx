import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed sint doloremque numquam distinctio et eum doloribus, laudantium fugiat placeat modi deleniti! Repudiandae esse, cumque ipsam vero ea sit officiis laboriosam eos nulla consectetur!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eius veniam ipsam enim esse facere eaque cupiditate asperiores autem culpa distinctio ipsum dolor quae iure accusamus nobis recusandae sed repudiandae nam repellendus, voluptate assumenda!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut ea possimus, quidem totam soluta a dicta? Reiciendis totam similique at laudantium, nihil quae. Consequuntur repellendus ea rem fugit fugiat numquam dolore dolorem eaque?</p>

        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis a consequuntur dolore architecto minima sapiente? Delectus animi reiciendis labore repellendus, non beatae sequi fugiat quos exercitationem. Voluptatem a dolores qui placeat nulla cum.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis a consequuntur dolore architecto minima sapiente? Delectus animi reiciendis labore repellendus, non beatae sequi fugiat quos exercitationem. Voluptatem a dolores qui placeat nulla cum.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis a consequuntur dolore architecto minima sapiente? Delectus animi reiciendis labore repellendus, non beatae sequi fugiat quos exercitationem. Voluptatem a dolores qui placeat nulla cum.</p>

        </div>

      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
