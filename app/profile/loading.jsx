import Image from 'next/image'

const loading = () => {
  return (
    <div className="w-full flex-center">
        <Image 
            src='assets/icons/loader.svg'
            width={50}
            height={50}
            alt="loader"
            className='object-contain'
        />
    </div>
  )
}

export default loading