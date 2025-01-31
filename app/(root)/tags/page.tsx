import { getTags } from "@/lib/actions/tag.action";
import React from "react";

async function Tags() {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "test",
  });

  const { tags } = data || {};
  return <div>Tags</div>;
}

export default Tags;
