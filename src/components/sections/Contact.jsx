import React from 'react';

import SectionHeading from '../fragments/SectionHeading';
import Container from '../layout/Container';
import { contact as data} from '../../appData';

const Contact = () => {
  return (
    <div className="">
      <Container className={`w-full flex justify-between lg:justify-start`}>
        <SectionHeading className={`uppercase`} title={data.title} />
        <SectionHeading className={`uppercase`} subtitle={data.email} />
        <SectionHeading className={`uppercase`} subtitle={data.github} />
        <SectionHeading className={`uppercase`} subtitle={data.linkedIn} />
        <SectionHeading className={`uppercase`} subtitle={data.url} />
      </Container>
    </div>
  )
}

export default Contact;
