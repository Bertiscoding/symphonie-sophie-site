import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import BackgroundImgWithText from "./components/BackgroundImages/BackgroundImgWithText";

const MessageForm = dynamic(() => import("./components/Forms/MessageForm"), { ssr: false });

const Footer = () => {
  return (
    <>
      <div id="kontakt-und-anfragen" className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="p-4 md:p-14 bg-ss-seashell w-full h-[inherit]">
            <div className="border-t border-white pb-8 md:hidden"></div>
            <h3 className="text-ss-h1 mb-8 md:mb-12 text-ss-bordeaux">Kontakt</h3>
            <p className="flex text-ss-p-med mb-6">
              <span className="fill-ss-bordeaux w-5 h-5 mr-4 mt-[2.5px]">
                <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <path className="cls-1" d="m22.57,119.62s0,0,0,0c.31.21.68.27,1.04.15,2.24-.74,7.6-2.68,9.01-4.71,1.78-2.56,1.14-6.09-1.42-7.87-2.56-1.78-6.09-1.14-7.87,1.42-1.41,2.03-1.35,7.73-1.26,10.09.02.37.2.7.51.92Z"/>
                  <path className="cls-1" d="m5.72,109.67c-2.34,2.06-2.58,5.64-.52,7.98,1.63,1.86,7.17,3.18,9.49,3.66.36.07.73-.02,1.01-.27,0,0,0,0,0,0,.28-.24.42-.6.4-.97-.18-2.35-.76-8.02-2.39-9.88-2.06-2.35-5.64-2.58-7.98-.52Z"/>
                  <path className="cls-1" d="m24.74,124.79c-.36.11-.64.37-.77.71,0,0,0,0,0,0-.13.35-.09.73.11,1.04,1.26,1.99,4.43,6.72,6.75,7.6,2.92,1.11,6.19-.37,7.29-3.29,1.11-2.92-.37-6.19-3.28-7.29-2.31-.88-7.83.56-10.1,1.22Z"/>
                  <path className="cls-1" d="m184.3,100.17c-7.89-9.79-21.11-17.57-39.33-23.14l-16.94-4.89c-12.41-4.22-21.91-8.86-28.21-13.81-6.15-4.82-9.26-11.43-9.26-19.64s3.56-14.95,10.89-19.59c7.37-4.66,15.32-7.02,23.65-7.02,9.06,0,15.92,1.65,20.39,4.91,4.52,3.3,9.19,9.1,13.89,17.25l13.47,23.87h5.2l2.34-42.22-.53-.28c-8.08-4.29-16.6-7.56-25.3-9.7-8.73-2.15-18.13-3.23-27.95-3.23-24.52,0-43.64,5.92-56.83,17.59-13.23,11.7-19.93,26.15-19.93,42.95,0,14.02,4.53,26.04,13.45,35.72,8.87,9.64,21.2,16.83,36.63,21.39l15.86,4.91c14.12,4.21,23.89,8.96,29.04,14.1,5.08,5.08,7.65,11.71,7.65,19.71,0,8.7-3.62,15.74-10.75,20.94-7.22,5.26-16.87,7.93-28.69,7.93-10.06,0-18.45-2.41-24.91-7.17-6.53-4.81-12.6-12.26-18.04-22.16l-13.1-23.11h-5.24l-.37,44.45c-17.54-11.48-27.91-29.46-31.74-54.43-.08-.51-.55-.87-1.06-.78-.51.08-.86.55-.78,1.06,6.24,40.62,29.29,63.16,71.81,69.59,7.15,1.29,14.87,1.95,23.07,1.95.8,0,1.57-.02,2.36-.03.9.01,1.78.03,2.7.03.14,0,.27-.04.39-.09,23.67-.74,42.51-6.34,56.06-16.7,14.64-11.2,22.06-26.3,22.06-44.89,0-13.73-4-25.67-11.9-35.48Z"/>
                </svg>
              </span>
              <span>Sophie Schmidt</span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-bordeaux mr-4 mt-[2.5px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              </span>
              <span>12049 Berlin</span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-bordeaux mr-4 mt-[2.5px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              </span>
              <span className="border-b border-b-ss-bordeaux"><Link href="mailto:hallo@symphonie-sophie.com">hallo@symphonie-sophie.com</Link></span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-bordeaux mr-4 mt-[2.5px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              </span>
              <span className="border-b border-b-ss-bordeaux"><Link href="https://www.instagram.com/_symphonie_sophie/" target="_blank">instagram.com/_symphonie_sophie/</Link></span>
            </p>
          </div>
        </div>

        <BackgroundImgWithText
          bgImgUrl="https://res.cloudinary.com/dxon4wo2t/image/upload/v1725812699/samples/cup-on-a-table.jpg"
          bgWidth="w-auto"
          bgWtClassNames="p-4 md:p-10"
        >
          <div className="w-full md:w-[500px] md:min-h-[520px]">
            <h3 className="text-ss-h1-md md:text-ss-h1 mb-8 text-ss-seashell text-center md:text-left">Allgemeine Anfragen</h3>
            <MessageForm />
          </div>
        </BackgroundImgWithText>

      </div>
      <div className="bg-ss-black p-4 md:p-10">
        <div className="container flex justify-between">
          <div className="text-white text-xs font-semibold flex flex-col w-fit">
            <Link className="mb-6" href='/impressum'>Impressum</Link>
            <Link className="mb-6" href='/datenschutz'>Datenschutz</Link>
            <Link className="mb-6" href='/haeufige-fragen'>Häufige Fragen</Link>
            <Link className="mb-6" href='/preise'>Preise</Link>
          </div>
          <div className="flex flex-col justify-between items-end  w-fit">
            <span className="fill-ss-champagne w-14 h-14 my-2">
              <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path className="cls-1" d="m22.57,119.62s0,0,0,0c.31.21.68.27,1.04.15,2.24-.74,7.6-2.68,9.01-4.71,1.78-2.56,1.14-6.09-1.42-7.87-2.56-1.78-6.09-1.14-7.87,1.42-1.41,2.03-1.35,7.73-1.26,10.09.02.37.2.7.51.92Z"/>
                <path className="cls-1" d="m5.72,109.67c-2.34,2.06-2.58,5.64-.52,7.98,1.63,1.86,7.17,3.18,9.49,3.66.36.07.73-.02,1.01-.27,0,0,0,0,0,0,.28-.24.42-.6.4-.97-.18-2.35-.76-8.02-2.39-9.88-2.06-2.35-5.64-2.58-7.98-.52Z"/>
                <path className="cls-1" d="m24.74,124.79c-.36.11-.64.37-.77.71,0,0,0,0,0,0-.13.35-.09.73.11,1.04,1.26,1.99,4.43,6.72,6.75,7.6,2.92,1.11,6.19-.37,7.29-3.29,1.11-2.92-.37-6.19-3.28-7.29-2.31-.88-7.83.56-10.1,1.22Z"/>
                <path className="cls-1" d="m184.3,100.17c-7.89-9.79-21.11-17.57-39.33-23.14l-16.94-4.89c-12.41-4.22-21.91-8.86-28.21-13.81-6.15-4.82-9.26-11.43-9.26-19.64s3.56-14.95,10.89-19.59c7.37-4.66,15.32-7.02,23.65-7.02,9.06,0,15.92,1.65,20.39,4.91,4.52,3.3,9.19,9.1,13.89,17.25l13.47,23.87h5.2l2.34-42.22-.53-.28c-8.08-4.29-16.6-7.56-25.3-9.7-8.73-2.15-18.13-3.23-27.95-3.23-24.52,0-43.64,5.92-56.83,17.59-13.23,11.7-19.93,26.15-19.93,42.95,0,14.02,4.53,26.04,13.45,35.72,8.87,9.64,21.2,16.83,36.63,21.39l15.86,4.91c14.12,4.21,23.89,8.96,29.04,14.1,5.08,5.08,7.65,11.71,7.65,19.71,0,8.7-3.62,15.74-10.75,20.94-7.22,5.26-16.87,7.93-28.69,7.93-10.06,0-18.45-2.41-24.91-7.17-6.53-4.81-12.6-12.26-18.04-22.16l-13.1-23.11h-5.24l-.37,44.45c-17.54-11.48-27.91-29.46-31.74-54.43-.08-.51-.55-.87-1.06-.78-.51.08-.86.55-.78,1.06,6.24,40.62,29.29,63.16,71.81,69.59,7.15,1.29,14.87,1.95,23.07,1.95.8,0,1.57-.02,2.36-.03.9.01,1.78.03,2.7.03.14,0,.27-.04.39-.09,23.67-.74,42.51-6.34,56.06-16.7,14.64-11.2,22.06-26.3,22.06-44.89,0-13.73-4-25.67-11.9-35.48Z"/>
              </svg>
            </span>
            <Link href="#">
              <Image
                src="https://res.cloudinary.com/dxon4wo2t/image/upload/v1726299705/wellness-advocate-plural-colour-600x900_fnt0fa.jpg"
                alt="sophie schmidt doterra logo"
                className="my-2 h-16 w-auto"
                width={128}
                height={56}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
