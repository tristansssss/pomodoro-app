import styled from "@emotion/styled";
import Image from "next/image";
import { useState, useEffect } from "react";

const TimeInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 40px;
  padding: 15px;
  background-color: #eff1fa;
  border-radius: 10px;
  > div:first-of-type {
    font-size: 14px;
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 17px;
    width: 12px;
    color: #1e213f;
    cursor: pointer;
  }
`;
const Timeinput = ({ name, defaultValue, currentValue, onChange }) => {
  const [value, setValue] = useState(
    currentValue ? currentValue : defaultValue ? defaultValue : 25
  );

  const handleChange = (v) => {
    if (v > 0) setValue(v);
  };
  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <TimeInputContainer>
      <div data-testid={`${name}-settings-val`}>{value}</div>
      <div>
        <Image
          data-testid={`increase-${name}`}
          onClick={() => handleChange(value + 1)}
          width={12}
          height={5}
          src="/assets/icon-arrow-up.svg"
        />
        <Image
          data-testid={`decrease-${name}`}
          onClick={() => handleChange(value - 1)}
          width={12}
          height={5}
          src="/assets/icon-arrow-down.svg"
        />
      </div>
    </TimeInputContainer>
  );
};

export default Timeinput;
