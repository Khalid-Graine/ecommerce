import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="sides bg-slate-500 py-6">
      <h3 className="section-title">Why Buy From Us?</h3>
      <ul className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3">
        <FeatureItem
          iconClass="fa-hourglass-start"
          title="Title 1"
          description="Description Lorem ipsum dolor sit amet."
        />
        <FeatureItem
          iconClass="fa-hourglass-start"
          title="Title 2"
          description="Description Lorem ipsum dolor sit amet."
        />
        <FeatureItem
          iconClass="fa-hourglass-start"
          title="Title 3"
          description="Description Lorem ipsum dolor sit amet."
        />
        <FeatureItem
          iconClass="fa-hourglass-start"
          title="Title 4"
          description="Description Lorem ipsum dolor sit amet."
        />
      </ul>
    </div>
  );
};

const FeatureItem = ({ iconClass, title, description }) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <div className="bg-red-600 size-20 flex justify-center items-center rounded-full ">
        <i className={`fa-solid ${iconClass} text-3xl text-white`}></i>
      </div>
      <h3 className='text-lg font-semibold text-white'>{title}</h3>
      <p className='text-center text-[#3d3d3d]'>{description}</p>
    </li>
  );
};

export default FeaturesSection;
