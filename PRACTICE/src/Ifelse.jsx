import { useState } from "react";

export default function Ifelse() {
  const [ifelse, setIfelse] = useState(true);

  if (ifelse === true) {
    return (
      <>
        <button onClick={() => setIfelse(!ifelse)}>Change</button>
        <h1>Topivali</h1>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setIfelse(!ifelse)}>Change</button>
        <h1>Waseem</h1>
      </>
    );
  }
}
