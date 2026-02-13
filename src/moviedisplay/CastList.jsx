import React from "react";
import CastThumb from "../components/CastThumb.jsx";

export default function CastList({ cast }) {
  return (
    <div className="mt-6">
      <div className="text-sm text-gray-300 mb-2">Cast</div>
      <div className="flex flex-wrap items-center gap-3">
        {cast.map((p) => (
          <div key={p.id} className="flex items-center gap-2">
            <CastThumb name={p.name} image={p.image} />
            <span className="text-xs text-gray-300">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
