import React, { ReactNode } from 'react';
import './Title.scss';

interface TitleProps {
  children: ReactNode;
}

const Title: React.FunctionComponent<TitleProps> = ({ children }) => (
  <h1 className="Title">{children}</h1>
);

export default Title;
