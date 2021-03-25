import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState("");
  console.log(note);

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="请输入备注"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };