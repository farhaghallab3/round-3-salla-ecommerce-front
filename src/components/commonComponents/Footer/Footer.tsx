import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import FooterTop from "./FooterTop";


export default function Footer() {
  return (
    <div className="w-full ">
        <footer className="mt-5xl">
          <FooterTop/>
          <FooterCenter/>
          <FooterBottom/>
      </footer>
    </div>
  )
}
