"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Result() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    return (
        <div className="flex justify-center min-h-screen bg-black">
            <div className="text-center">
            <h1 className="text-white text-3xl mb-8 mt-8">
                 Hello, {name}! Here&apos;s your match:
            </h1>

                <div className="relative w-64 h-64 flex  mx-auto">
                    <Image 
                        src="/meme.jpg" 
                        alt="Your match" 
                        fill 
                        layout="fill" className="full"
                    />
                </div>
                <div>
                    <p className="text-white mt-8 text-2xl">Instead, watch these videos 🤓:</p>
                    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-4 md:space-x-8 mt-4 items-center">
                        <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/thumbnail1.png" alt="Video Thumbnail 1" width={300} height={300} className="rounded-lg" />
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y" target="_blank" rel="noopener noreferrer">
                            <Image src="/thumbnail2.png" alt="Video Thumbnail 2" width={300} height={300} className="rounded-lg" />
                        </a>
                        <a href="https://youtube.com/playlist?list=PL0qfF8MrJ-jxMfirAdxDs9zIiBg2Wug0z&si=Es1PQIanuj7Swn1y" target="_blank" rel="noopener noreferrer">
                            <Image src="/thumbnail3.png" alt="Video Thumbnail 3" width={300} height={300} className="rounded-lg" />
                        </a>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white text-black px-4 py-1 rounded-lg font-bold hover:bg-gray-100 transition-colors mt-8">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}
