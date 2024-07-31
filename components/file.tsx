import React from 'react'

const File = () => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <FileIcon className="h-8 w-8 text-primary mr-4" />
      <div>
        <h3 className="text-lg font-medium">Annual Report 2023</h3>
        <p className="text-muted-foreground text-sm">PDF, 5.2 MB</p>
      </div>
    </div>
    <div className="flex justify-end">
      <button className='sm' >
        Download
      </button>
    </div>
  </div>
  )
}
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>
    )
  }
  

export default File