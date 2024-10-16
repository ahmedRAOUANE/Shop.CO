// imgs
import badge1 from "@/assets/Badge-1.png";
import badge2 from "@/assets/Badge-2.png";
import badge3 from "@/assets/Badge-3.png";
import badge4 from "@/assets/Badge-4.png";
import badge5 from "@/assets/Badge-5.png";
import Image from 'next/image';

const PaymentMethods = () => {
  return (
    <div className="payment box ai-end nowrap" style={{ gap: 0 }}>
      <Image src={badge1} alt='' />
      <Image src={badge2} alt='' />
      <Image src={badge3} alt='' />
      <Image src={badge4} alt='' />
      <Image src={badge5} alt='' />
    </div>
  )
}

export default PaymentMethods