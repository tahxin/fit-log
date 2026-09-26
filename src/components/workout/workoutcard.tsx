import Image from 'next/image';






interface WorkoutCardTypes {
  image: string;
  tags: string[];
  title: string;
  equipment: string;
  duration: string;
  calories: string;
  rating: string | number;
}

function WorkOutCard(props: WorkoutCardTypes) {
  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
      <div className="relative w-full h-48">
        <Image src={props.image} alt={props.title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {props.tags.map((tag, index) => (
            <span key={index} className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-white text-lg font-bold">{props.title}</h3>
        <p className="text-neutral-400 text-sm">{props.equipment}</p>

        <hr className="border-neutral-800 my-3" />

        <div className="flex gap-4 text-neutral-300 text-sm">
          <span>⏱ {props.duration}</span>
          <span>🔥 {props.calories}</span>
          <span>⭐ {props.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default WorkOutCard;