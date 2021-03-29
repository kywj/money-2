import styled from "styled-components";
import React from "react";
import { useTags } from "views/useTags";

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  button {
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      // 如果 tag 被选中，那就复制所有没被选中的tag，作为新的 selectedTags
      props.onChange(selectedTags.filter((t) => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) =>
    selectedTags.indexOf(tag) >= 0 ? "selected" : "";
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={getClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
