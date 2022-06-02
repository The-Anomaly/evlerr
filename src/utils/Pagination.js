import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'

const Pagination = ({ paginationObj, paginator }) => {

    const numSiblings = 2

    const pagesNumbering = [...Array(paginationObj.totalPages)].map((val, index) =>  {
        // skip jump to first and last page numbring if first or last page numbering is already showing 
        if (index+1 > paginationObj.page+numSiblings || index+1 < paginationObj.page-numSiblings) {
            return false
        }
        return <div onClick={() => {paginator(index+1)}} className={paginationObj.page === index+1 ? "paginateBtn active" : "paginateBtn"} style={{ marginBottom: '10px' }} key={index+1}>{index+1}</div>
    })

    return (
        <>
            <section className='pagination flex justifyCenter' style={{ flexWrap: 'wrap' }}>
                {paginationObj.hasPrevPage && <div onClick={() => {paginator(paginationObj.page-1)}} className="paginateBtn"><BsArrowLeft /></div>}
                {paginationObj.page > numSiblings+1 ? 
                <>
                    <div onClick={() => {paginator(1)}} className='paginateBtn' style={{ marginBottom: '10px' }}>1</div> 
                    <span style={{ display: 'flex', alignItems: 'center' }}><FiMoreHorizontal /></span>
                </> :
                ''}
                {pagesNumbering}
                {paginationObj.page < paginationObj.totalPages-numSiblings ? 
                <>
                    <span style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}><FiMoreHorizontal /></span>
                    <div onClick={() => {paginator(paginationObj.totalPages)}} className='paginateBtn' style={{ marginBottom: '10px', marginLeft: 0 }}>{paginationObj.totalPages}</div>
                </> :
                ''}
                {paginationObj.hasNextPage && <div onClick={() => {paginator(paginationObj.page+1)}} className="paginateBtn"><BsArrowRight /></div>}
            </section>
            
        </>
    )
}

export default Pagination