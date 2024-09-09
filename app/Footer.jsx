import Image from "next/image"
import Link from "next/link"
import RequestForm from "./components/RequestForm"

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center p-14">
          <div>
            <h3 className="text-ss-h1 mb-12 text-ss-bordeaux">Kontakt</h3>
            <p className="flex text-ss-p-med mb-6">
              <span className="mr-4">
                <Image
                  src="https://res.cloudinary.com/dxon4wo2t/image/upload/v1725900446/symphonie-sophie-logo-sm_peach_xfgdxb.svg"
                  alt="Symphonie Sophie Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </span>
              <span>Sophie Schmidt</span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-peach mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              </span>
              <span>12049 Berlin</span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-peach mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              </span>
              <span className="border-b border-b-ss-peach"><Link href="mailto:hallo@symphonie-sophie.de">hallo@symphonie-sophie.de</Link></span>
            </p>
            <p className="flex text-ss-p-med mb-6">
              <span className="text-ss-peach mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              </span>
              <span className="border-b border-b-ss-peach"><Link href="https://www.instagram.com/_symphonie_sophie/" target="_blank">instagram.com/_symphonie_sophie/</Link></span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center p-10 bg-cover bg-center bg-no-repeat h-full w-auto"
          style={{backgroundImage: "linear-gradient( rgba(248, 237, 235, 0.5), rgba(248, 237, 235, 0.5) ), url('https://res.cloudinary.com/dxon4wo2t/image/upload/v1725813034/gutscheine-pinkflowers-min_bjkbpk.jpg')"}}
        >
          <div className="w-full md:w-[500px] min-h-[520px]">
            <h3 className="text-ss-h1 mb-8 text-ss-bordeaux">Terminanfragen</h3>
            <RequestForm />
          </div>
        </div>
      </div>
      <div className="bg-ss-black p-10">
        <div className="container md:flex md:justify-between">
          <div className="text-white text-xs text-bold flex flex-col">
            <Link className="mb-6" href='/impressum'>Impressum</Link>
            <Link className="mb-6" href='/datenschutz'>Datenschutz</Link>
            <Link className="mb-6" href='/haeufige-fragen'>Häufige Fragen</Link>
            <Link className="mb-6" href='/preise'>Preise</Link>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="https://res.cloudinary.com/dxon4wo2t/image/upload/v1725905321/symphonie-sophie-logo-sm_white_mahkuj.svg"
              alt="symphonie sophie logo"
              className="my-2"
              width={0}
              height={70}
            />
            <Image
              src="https://res.cloudinary.com/dxon4wo2t/image/upload/v1725905531/doterra-wellness-advocate-colors_wb7qd8.png"
              alt="sophie schmidt doterra logo"
              className="my-2"
              width={0}
              height={70}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer
