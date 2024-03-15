import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, children, className }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle tag={"h2"} className="title">
          {title}
        </SectionTitle>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;
