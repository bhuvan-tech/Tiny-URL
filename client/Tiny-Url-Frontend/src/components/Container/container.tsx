import * as React from 'react';
import FormContainerProps from '../FormContainer/FormContainer';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  return (
    <>
      <FormContainerProps />
    </>
  );
};

export default Container;
