'use client'

import useDownloader from "react-use-downloader";

const Nav = () => {
    const { download } = useDownloader();

    const fileUrl = "./Profesional_CV_Rafa.pdf";
    const filename = "Profesional_CV_Rafa.pdf";
    return (
        <nav class="fixed bg-white w-full z-30 border-b top-0">
            <div class="flex flex-wrap items-center justify-between py-4 px-4 md:px-8 font-semibold">
                <span class="text-sm md:text-lg">Rafa Azka Ulinnuha</span>
                <button onClick={() => download(fileUrl, filename)} class="text-white bg-[#F7D060] rounded-lg text-xs md:text-sm px-2 py-1.5 md:px-4 md:py-2 text-center transition ease-in-out delay-150 hover:scale-110 duration-300">Download CV</button>
            </div>
        </nav>
    )
}

export default Nav;