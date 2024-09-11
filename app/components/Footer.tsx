import React from 'react'

function Footer() {
  return (
    <div className='mt-10 flex-col'>
      <h6 className='font-semibold'>Contact</h6>
      <p className='text-zinc-700 dark:text-slate-300 mt-1'>
        Questions or need more details? Ping me on any of my social media <a href='/links' className='underline'>links</a>
      </p>  
    </div>
  )
}

export default Footer