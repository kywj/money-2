import React from "react";
import Layout from "components/Layout";
import { useTags } from "useTags";
import styled from "styled-components";
import { Icon } from "components/Icon";
import { Link } from "react-router-dom";
import { Center } from "components/Center";
import { Space } from "components/Space";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4ppx;
  color: white;
`;

function Tag() {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tag;
