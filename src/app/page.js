import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <div className='flex w-full h-auto flex-row items-center justify-start p-2 text-black font-bold text-xl'>
        Dolphin Project
      </div>
      <div className="flex w-full h-full flex-row justify-start items-center ">
        <div className="flex w-1/2 h-full flex-col items-center justify-center ">
          <Image src="/books.png" width={500} height={500} alt="dolphin" />
        </div>
        <div className='flex w-1/2 h-[300px] flex-col items-center justify-center px-4 gap-4'>
            <div className='font-semibold text-lg'>
              Accessible learning resources and exercises for free!
            </div>
            <div className='bg-indigo-300 text-white rounded-md p-2'>
              Learning Resources
            </div>
        </div>
      </div>
      <div className='w-full bg-black text-white p-2'>
        Footer
      </div>
    </div>
  )
}
