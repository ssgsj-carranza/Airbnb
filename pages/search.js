import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
    return (
        <div>
            <Header />
            <main className="flex">
                <section>
                    <p className="text-xs">300+ Stays for ...</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Places</h1>
                    <div className="hidden lg:inline-flex">
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg">Cancellation Flexibility</p>
                    </div>
                </section>
            </main>
            <Footer />            
        </div>
    )
}

export default   Search
