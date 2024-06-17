import React from "react";

const SectionComponent = ({ text }) => {
  return (
    <div style={{padding: '40px 0'}}>
      <h1 class="mb-4 text-center text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {text}
        </span>
      </h1>
    </div>
  );
};

export default SectionComponent;
