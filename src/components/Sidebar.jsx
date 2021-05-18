import React from 'react';
import Categories from './Categories';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper className={`${isSidebarOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
      <Categories type='burger' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: var(--burger-transition);
  position: fixed;
  top: 5.625rem;
  left: 0;
  right: 0;
  @media screen and (min-width: 992px) {
    display: none;
  }
  &.hide-sidebar {
    transform: translateX(-100vw);
    /* @media screen and (min-width: 768px) {
      opacity: 0;
      transform: translateY(-100vh);
    } */
  }
  &.show-sidebar {
    transform: translateX(0);
    /* @media screen and (min-width: 768px) {
      opacity: 1;
      transform: translateY(0);
    } */
  }
`;

export default Sidebar;
