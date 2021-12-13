import React from "react";
import Counter from "./Counter";
import CounterSmart from "./CounterSmart";

export default function TwoCountersSmart() {
  const startValue1 = 3;
  const startValue2 = -7;

  return (
    <div>
      {/* <Counter/>
        <Counter/> */}

      <CounterSmart startValue={startValue1} />
      <CounterSmart startValue={startValue2} />
    </div>
  );
}
