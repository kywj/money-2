import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import { TagsSection } from "./money/TagsSection";
import { NoteSection } from "./money/NoteSection";
import { CategorySection } from "./money/CategorySection";
import { NumberPadSection } from "./money/NumberPadSection";
import { useRecords } from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

type Category = "-" | "+";
const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("已保存");
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout scrollTop={9999}>
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => onChange({ category })}
        />
      </CategoryWrapper>

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      />
    </MyLayout>
  );
}

export default Money;
