import Image from 'next/image';
import { StarRating } from './components/StarRating';

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#f5f5f5] flex items-center justify-center ">
      <div className="w-[300px] h-[300px] bg-white p-4 flex flex-col items-center justify-center gap-4">
        <h2 className="font-[18px] text-center">Please Rate</h2>
        <StarRating maxRatting={5} color={'#808080'} size={48} />
        <p className="text-[#767676] font-[15px] text-center">
          Your Feedback is Very Important To Us.
        </p>
        <Image src={'/VASS-logo.png'} alt="VASS logo" width={164} height={52} />
      </div>
    </main>
  );
}
