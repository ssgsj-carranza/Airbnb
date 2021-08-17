import React from 'react'
import Image from 'next/image'; 

function LargeCard({img, title, description, buttonText}) {
    return (
        <section>
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout='fill' objectFit='cover'/>
            </div>
            <div>

            </div>
        </section>
    )
}

export default LargeCard
