import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams } from "react-router-dom";
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

const InputWrapper = styled.div`
  background: white;
  margin-top: 8px;
  padding: 0 16px;
`;

const Tag: React.FC = () => {
  const { findTag, updateTag } = useTags();
  let { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        <Input
          type="text"
          label="标签名"
          placeholder="标签名"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
