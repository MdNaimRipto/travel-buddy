import Link from "next/link";

export const commonListStyle = "flex items-start flex-col gap-3 text-sm";

export const FooterTitle = ({ title }: { title: string }) => {
  return <h2 className="titleFont font-semibold uppercase mb-6">{title}</h2>;
};

export const CommonListAnimation = () => {
  return (
    <div className="relative">
      <p className="w-2 h-[1px] bg-white absolute top-1/2 -translate-x-1/2 group-hover:bg-primary rotate-90 group-hover:rotate-0 duration-300"></p>
      <p className="w-2 h-[1px] bg-white absolute top-1/2 -translate-x-1/2 group-hover:bg-primary duration-300"></p>
    </div>
  );
};

export const CommonListsLi = ({
  list,
}: {
  list: Array<{ title: string; path: string }>;
}) => {
  return list.map((l, i) => (
    <li
      key={i}
      className="hover:text-primary hover:ml-2 duration-300 flex items-center gap-2 ml-1 group"
    >
      <CommonListAnimation />
      <Link href={l.path} className="ml-1">
        {l.title}
      </Link>
    </li>
  ));
};
