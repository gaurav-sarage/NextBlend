import Navbar from '@/app/components/Navbar'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const SectionHeaderComponents = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className='text-center'>
                SectionHeaderComponents
            </div>
        </>
    )
}

export default SectionHeaderComponents
