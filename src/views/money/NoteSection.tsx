import { Input } from "components/Input";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <label>
        <Input
          label="备注"
          placeholder="请输入备注"
          value={note}
          onChange={onChange}
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };
