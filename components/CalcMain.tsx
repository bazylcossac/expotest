import React from "react";

interface CalcMainProps {
  numbers: string[];
}

function CalcMain({ numbers }: CalcMainProps) {
  return <div>{numbers.map((item) => item)}</div>;
}

export default CalcMain;
