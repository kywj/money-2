import styled from "styled-components";

const CategorySection = styled.section`
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

export { CategorySection };
