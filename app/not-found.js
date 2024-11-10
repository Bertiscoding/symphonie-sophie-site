import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='h-[100vh] pt-10 flex flex-col justify-center items-center'>
      <Image src="/images/404error.svg" alt="404 error illustration" width={350} height={100} className='mb-10'/>
      <h1 className='text-ss-h1-sm mb-10'>Diese Seite konnte nicht gefunden werden!</h1>
      <Link
        href="/"
        className="bg-ss-green hover:bg-ss-green-mute block rounded w-fit min-w-40 py-2 px-4">
        <div className="flex justify-between text-ss-p-smbold text-ss-black">
          <span className="mr-6">Zurück zur Homepage</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  )
}
