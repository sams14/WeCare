import React from 'react'
import mobileicon from '../../assets/img/mobile@2x.png';

const Econsult = () => {
    return (
        <>
            <div class="p-1 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-200 text-indigo-400 mb-2 flex-shrink-0">
                    <img src={mobileicon} alt="" />
                </div>
                <div class="flex-grow">
                    <h2 class="text-green-600 text-lg title-font font-medium mb-3">E Consult</h2>
                    <p class="leading-relaxed text-base">Consult instanly with verified doctors. No more waiting rooms. Get instant emergency medical consultation virtually.</p>
                    <a href="#" class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Econsult
