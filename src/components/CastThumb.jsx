
const CastThumb = ({ name, image }) => (
  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white ring-2 ring-black/40">
    {image ? (
      <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
    ) : (
      <span>{name.charAt(0)}</span>
    )}
  </div>
);

export default CastThumb;
