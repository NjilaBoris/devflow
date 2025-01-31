import TagCard from "@/components/cards/TagCard";
import DataRenderer from "@/components/DataRenderer";
import LocalSearch from "@/components/search/LocalSearch";
import ROUTES from "@/constants/routes";
import { EMPTY_TAGS } from "@/constants/states";
import { getTags } from "@/lib/actions/tag.action";
import { Tag } from "@/types/global";
import React from "react";

async function Tags({ searchParams }: RouteParams) {
  const { page, pageSize, query, filter } = await searchParams;
  const { success, data, error } = await getTags({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { tags } = data || {};
  return (
    <>
      <h1 className="h1-bold text-dark100_light900 text-3xl">Tags</h1>
      <section className="mt-11">
        <LocalSearch
          route={ROUTES.TAGS}
          imgSrc="/icons/search.svg"
          placeholder="Search tags..."
          otherClasses="flex-1"
        />
      </section>

      <DataRenderer
        success={success}
        error={error}
        data={tags}
        empty={EMPTY_TAGS}
        render={(tags) => {
          return (
            <div className="mt-10 flex flex-wrap gap-4">
              {tags.map((tag: Tag) => (
                <TagCard key={tag._id} {...tag} />
              ))}
            </div>
          );
        }}
      />
    </>
  );
}

export default Tags;
