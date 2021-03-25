import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 22px;
  > ul {
    display: flex;
    background: #c4c4c4;
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

const CategorySection = () => {
  const categoryMap = { "-": "支出", "+": "收入" };
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  const [category, setCategory] = useState("-"); // + 表示收入 - 表示支出
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? "selected" : ""}
            onClick={() => setCategory(c)}
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
