import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export default function Card(props: {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}) {
  return (
    <Link
      href={props.link}
      className="bg-white rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl"
    >
      <div className="p-6">
        {/* card title */}
        <h3 className="mb-4 font-semibold text-blue-900 text-2xl">
          {props.title}
        </h3>
        {/* end card title */}

        {/* card desc */}
        <p className="text-sky-800 text-sm mb-0">{props.description}</p>
        {/* end card desc */}
      </div>
      <div className="mt-auto">
        {/* card image */}
        <Image
          src={props.image}
          alt=""
          width={0}
          height={0}
          className="w-full object-fill h-48"
        />
        {/* end card image */}
      </div>
    </Link>
  );
}
