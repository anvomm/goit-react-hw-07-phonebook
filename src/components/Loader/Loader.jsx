import { Oval } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => (
  <StyledLoader>
    <Oval
      height={40}
      width={40}
      color="#3a383d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="##3a383d"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  </StyledLoader>
);
