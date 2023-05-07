import axios from "axios";
import { useEffect, useState } from "react";
export default function CatFact() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    if (!fact) {
      axios("https://catfact.ninja/fact").then(({ data }) =>
        setFact(data.fact)
      );
    }
  }, [fact]);

  return <div>{fact ?? "Loading..."}</div>;
}
