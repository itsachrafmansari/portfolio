import LinkButton from "./Button";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header class="h-screen flex flex-col">
            <Navbar/>
            <div className="px-10 py-5 mx-auto max-w-screen-2xl grow flex flex-col-reverse lg:flex-row justify-center items-center gap-5 lg:gap-10">
                <div className="lg:w-1/2 space-y-2 text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-cyan-300">ACHRAF MANSARI</h1>
                    <h6 className="pb-4 text-xl font-medium text-cyan-200">3D Modeler | Computer Scientist</h6>
                    <p className="pb-4 text-cyan-100">I am a Computer Science student with a passion for coding and robotics. I have extensive experience in Python and its frameworks Flask and Django, having done multiple projects using them. My expertise in robotics involves the use of Arduino and Raspberry Pi microcomputer, allowing me to create innovative solutions for a variety of problems. In addition to coding, I also do 3D modeling in general, with a focus on architectural design. My goal is to combine my knowledge of coding and robotics to create groundbreaking solutions that can revolutionize the way we interact with technology. I am always looking for new challenges and opportunities to expand my skillset and push the boundaries of what is possible.</p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <LinkButton path={'https://www.google.com/'} isLocal={false} text={'Button #1'}/>
                        <LinkButton path={'https://www.google.com/'} isLocal={false} text={'Button #2'}/>
                    </div>
                </div>
                <div className="h-1/2 lg:h-auto lg:w-1/2 lg:max-w-lg aspect-square bg-black">

                </div>
            </div>
        </header>
    );
}

export default Header;