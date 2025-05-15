import { useEffect } from "react";

export default function CorpusLoader({ onLoad }) {
  useEffect(() => {
    fetch("corpus/texts/corpusIndex.json")
      .then((res) => res.json())
      .then((data) => onLoad(data))
      .catch((err) => console.error("Error loading corpus JSON:", err));
  }, [onLoad]);

  return null;
}
