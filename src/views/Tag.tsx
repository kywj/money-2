import { Button } from "components/Button";
import { Center } from "components/Center";
import { Icon } from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "../useTags";

type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const Wrapper = styled.div`
  background: white;
  margin-top: 8px;
  padding: 0 16px;
`;

const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <Wrapper>
        <Input
          type="text"
          label="标签名"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </Wrapper>
      <Center>
        <Space />
        <Button
          onClick={() => {
            deleteTag(tag.id);
          }}
        >
          删除标签
        </Button>
      </Center>
    </div>
  );
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>

      {tag ? tagContent(tag) : <Center>标签已删除</Center>}
    </Layout>
  );
};

export { Tag };
