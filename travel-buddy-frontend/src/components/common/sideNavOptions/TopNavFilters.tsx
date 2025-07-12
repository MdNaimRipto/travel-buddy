import { useRouter } from "next/router";
import React from "react";

const TopNavFilters = ({ limits }: { limits: Array<number> }) => {
  const router = useRouter();

  // Extract current query params to preserve them
  const { query } = router;

  // Clean before push
  function cleanQueryParams(params: Record<string, any>) {
    const cleaned: Record<string, any> = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value !== "" && value !== undefined && value !== null) {
        cleaned[key] = value;
      }
    });
    return cleaned;
  }

  // Handler to update query params on select change
  const handleSelectChange = (key: string, value: string) => {
    const newQuery = { ...router.query, [key]: value, page: 1 };
    const cleanedQuery = cleanQueryParams(newQuery);

    router.push(
      {
        pathname: router.pathname,
        query: cleanedQuery,
      },
      undefined,
      { shallow: true }
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:w-1/4 flex items-center gap-4">
      <select
        className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer"
        onChange={e => handleSelectChange("sortOrder", e.target.value)}
        value={query.sortOrder || ""}
      >
        <option value="">Set Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <select
        className="w-1/2 p-2 border border-lightGray focus:outline-none font-inter text-sm cursor-pointer"
        onChange={e => handleSelectChange("limit", e.target.value)}
        value={query.limit || ""}
      >
        <option value="">Set Limit</option>
        {/* <option value="10">10</option>
        <option value="16">16</option>
        <option value="20">20</option> */}
        {limits.map((limit, i) => (
          <option key={i} value={limit.toString()}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TopNavFilters;
