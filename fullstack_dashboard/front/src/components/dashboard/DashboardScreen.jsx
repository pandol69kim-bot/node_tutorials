import React from 'react';
import Sales from './Sales';
import Visitors from './Visitors';
import TotalRevenue from './TotalRevenue';
import Customers from './Customers';
import TargetReality from './TargetReality';
import TopProducts from './TopProducts';
import SalesMap from './SalesMap';
import VolumeServices from './VolumeServices';

const DashboardScreen = () => {
  // return (
  //   <div className="w-[calc(80%_-_28px)] ml-[calc(20%_+_14px)] mt-[14px]">
  //     <div className="grid grid-cols-[4fr_3fr] gap-x-[14px]">
  //       <Sales />
  //       <Visitors />
  //     </div>
  //     <div className="grid grid-cols-[3fr_3fr_2fr]">
  //       <TotalRevenue />
  //       <Customers />
  //       <TargetReality /> 
  //       <TopProducts />
  //       <SalesMap />
  //       <VolumeServices />
  //     </div>
  //   </div>
  // );

    return (
    <div className="w-[calc(80%_-_28px)] ml-[calc(20%_+_14px)] mt-[14px]">
      <div className="grid grid-cols-[4fr_3fr] gap-x-[14px] mb-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div className="grid grid-cols-[3fr_3fr_2fr] gap-x-[14px] mb-[14px]">
        <TotalRevenue />
        <Customers />
        <TargetReality /> 
      </div>
      <div className="grid grid-cols-[2fr_3fr_3fr] gap-x-[14px]">
        <TopProducts />
        <SalesMap />
        <VolumeServices />
      </div>
    </div>
  );
};

export default DashboardScreen;
