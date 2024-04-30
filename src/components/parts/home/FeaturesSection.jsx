import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="sides">
      <h3 className="my-3 mt-5 text-center">Why Buy From Us?</h3>
      <ul className="bg-green-100 grid grid-cols-2 gap-6">
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
      <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
        <i className={`fa-solid ${iconClass}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default FeaturesSection;
