'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import anonymous from './assets/anonymous.png'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState("")

  const handleProfileClick = () => {
    console.log(post)
    if (post.creator._id === session?.user.id) return router.push("/profile")
    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  }

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(false), 3000)
  }

  const truncateEmail = (email) => {
    if (!email) return "-";

    const maxLength = 4; // Maximum length for the visible part of the email
  
    return email.length <= maxLength
      ? email
      : `${email.slice(0, maxLength)}${'*'.repeat(email.length - (maxLength * 2))}${email.slice(-maxLength)}`;
  };

  const truncatedEmail = truncateEmail(post.creator?.email)

  return (
    <div className="prompt_card">
      <div className='flex justify-between items-start gap-5'>
        <div 
          className={post.creator ? 'flex-1 flex justify-start items-center gap-3 cursor-pointer' : 'flex-1 flex justify-start items-center gap-3'}
          onClick={post.creator ? handleProfileClick : null}
        >
          <Image 
            src={post.creator?.image ? post.creator.image : anonymous}
            alt="anon"
            width={40}
            height={40}
            className='rounded-full object-contain'
          />
        </div>
        <div className="flex flex-col">
          <h3 className='font-satoshi font-semibold text-gray-900'>
            {post.creator?.username ? post.creator.username : "Anonymous"}
          </h3>
          <p className='font-inter text-sm text-gray-500'>
            {truncatedEmail}
          </p>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width = {12}
            height = {12}
          />
        </div>
      </div>
      
      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
      <p 
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag.split(" ").map((tag, index) => {
          const cleanedTag = tag.trim()
          const tagWithoutHash = cleanedTag.replace("#", "")
          return (
            <span key={index} className='font-inter text-sm blue_gradient'>
              #{tagWithoutHash}{" "}
            </span>
          )     
        })}
      </p>

      {session?.user.id === post.creator?._id && pathName === '/profile' && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard