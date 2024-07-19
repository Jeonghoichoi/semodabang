import Image from 'next/image';
import { Class } from '../model/types';

type Props = {
  classItem: Class;
};

export function ClassCard({ classItem }: Props) {
  return (
    <div className="relative w-full h-[375px] rounded-2xl overflow-hidden mb-6">
      <Image
        src={classItem.image}
        alt={classItem.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-5 right-5">
        <div className="flex space-x-2 mb-2">
          {classItem.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-[#316392] rounded text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold text-white mb-2">{classItem.title}</h2>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[#F71C50] font-bold mr-1">{classItem.discountPercentage}%</span>
            <span className="text-white font-bold">{classItem.price.toLocaleString()}원~</span>
          </div>
          <div className="flex items-center">
            <span className="text-white text-xs ml-1">
              {classItem.rating} <span className="opacity-70">({classItem.reviewCount})</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
