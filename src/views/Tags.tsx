import React from "react";
import Layout from "components/Layout";
import { useTags } from "./useTags";

function Tag() {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <ol>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    </Layout>
  );
}

export default Tag;
