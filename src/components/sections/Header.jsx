import React from 'react';

import { appData as data } from '../../appData';


import SectionHeading from '../fragments/SectionHeading';
import Container from '../layout/Container';

const Header = ({ toggleDrawer }) => {
  return (
    <div className="">
      <Container className={`w-full flex justify-between lg:justify-start`}>
      <SectionHeading className={`uppercase`} title={data.name} />
      <SectionHeading className={`uppercase`} subtitle={data.description} />
      <div className={`flex items-center space-x-4`} >
        {data.logos.map((logo, idx) => {
          return <img className={`rounded-full`} width={200} key={idx} src={logo} alt='logo' style={{borderRadius: '80px', paddingLeft: '20px'}} />;
        })}
      </div>
      </Container>
    </div>
  );
};

export default Header;