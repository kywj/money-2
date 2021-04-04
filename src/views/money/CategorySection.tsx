import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 22px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        background: #333;
        height: 3px;
        display: block;
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

type Props = {
  value: "-" | "+";
  onChange: (value: "-" | "+") => void;
};

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { "-": "支出", "+": "收入" };
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? "selected" : ""}
            onClick={() => {
              props.onChange(c);
            }}
            key={c}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
