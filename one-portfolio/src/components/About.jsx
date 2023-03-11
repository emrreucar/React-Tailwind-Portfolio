import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vel nam quo optio natus a eos, quia praesentium eaque cum hic culpa impedit ducimus ipsa nemo quis aperiam eligendi molestiae maxime iusto voluptates nulla libero error excepturi. Nostrum necessitatibus mollitia, quisquam impedit commodi quibusdam reiciendis odio deserunt nam autem quae!
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam nemo cum atque, dolore quaerat vel ad omnis velit ex laudantium. Obcaecati dolor accusantium officiis maxime quidem assumenda aliquid atque culpa nulla cum sequi officia pariatur architecto quas quo aperiam, in beatae aliquam neque! Quod aliquid aperiam excepturi labore quo.
            </p>
        </div>
    </div>
  )
}

export default About