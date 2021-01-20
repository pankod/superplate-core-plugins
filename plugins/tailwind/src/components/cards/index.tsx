import React from "react";

export const Cards: React.FC = () => {
  const data: { title: string; content: string }[] = [
    {
      title: "Redux",
      content:
        "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
    },
    {
      title: "Styled-Components",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Bootstrap",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "SVGR",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Styled-Components",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Bootstrap",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "SVGR",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Styled-Components",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "Bootstrap",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      title: "SVGR",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
  ];

  return (
    <div className="container my-8 max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.title}
            className="col-span-1 rounded-md border border-gray-300 p-5"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="m-0">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
