export default function Card(props: {
  title: string;
  description: string;
  link?: string;
}) {
  // Calculate the width of the card container based on the length of the title text
  const titleLength = props.title.length;
  const containerWidth = Math.max(80 + titleLength * 10, 120); // Adjust the factor (10) as needed

  return (
    <a
      href={props.link && props.link}
      className={`mx-auto w-${containerWidth} group rounded-lg border border-transparent px-5 py-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transform hover:scale-105`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {props.title}{" "}
        {props.link && (
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        )}
      </h2>
      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        {props.description}
      </p>
    </a>
  );
}
