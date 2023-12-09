import Logo from "../assets/images/hamzah_logo_transparent.png";

const Footer = () => {
    return (
        <footer class="w-full py-4 px-20 md:px-48 lg:px-62 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 bg-black text-white">
            <div class="flex items-center gap-1 font-bold">
                <div class="text-left"><div>Achraf</div><div>Mansari</div></div>
                <div><img class="w-10 h-10" src={Logo} /></div>
                <div class="text-right"><div>اشرف</div><div>منصاري</div></div>
            </div>
            <div class="flex gap-2">
                <a href="#" class="w-7 h-7"><img src="./icons/facebook.svg" /></a>
                <a href="#" class="w-7 h-7"><img src="./icons/instagram.svg" /></a>
                <a href="#" class="w-7 h-7"><img src="./icons/twitter.svg" /></a>
                <a href="#" class="w-7 h-7"><img src="./icons/linkedin.svg" /></a>
                <a href="#" class="w-7 h-7"><img src="./icons/youtube.svg" /></a>
            </div>
        </footer>
    );
}
 
export default Footer;