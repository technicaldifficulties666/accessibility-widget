import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ReactComponent as DashboardIcon } from '@/assets/images/svg/dashboard.svg';
import { ReactComponent as InstallIcon } from '@/assets/images/svg/install.svg';
import { ReactComponent as UserIcon } from '@/assets/images/svg/user.svg';
import type { RootState } from '@/config/store';
import { toggleSidebar } from '@/features/admin/sidebar';
import { ReactComponent as LogoIcon } from '@/assets/images/svg/logo.svg';
import routes from '@/routes';
import Dropdown from '@/containers/Dashboard/DropDown';




const Sidebar = ({ options, setReloadSites, selectedOption, setSelectedOption }: any) => {


  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isOpen } = useSelector((state: RootState) => state.sidebar);

  function closeSidebar() {
    dispatch(toggleSidebar(false));
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          role="presentation"
          className="sm:fixed sm:h-screen sm:w-screen overflow-hidden sm:left-0 sm:top-0 sm:z-[49] text-black opacity-30"
        />
      )}
      <div
        className={`w-[235px] h-screen flex flex-col sm:fixed sm:bg-white sm:transition-all sm:duration-[400ms]
         ${isOpen ? 'sm:left-0 sm:z-[50] ' : 'sm:left-[-235px] sm:z-[50] '}`}
      >
        <a
          href="/"
          className="flex h-[81px] items-center pl-[5px] border-b border-r border-solid border-gray"
        >
          <LogoIcon />

          {/* <div className="text-primary text-[22px] leading-[27px] font-medium ml-2 [&>span:first-child]:font-extrabold">
            <span>{t('Common.logo.saas')}</span>
            <span>{t('Common.logo.gear')}</span>
          </div> */}
          <div className='pr-5'>
            <svg
              width="198"
              height="47"
              viewBox="0 0 198 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="198" height="47" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_18_1286"
                    transform="matrix(0.000244141 0 0 0.00102851 0 -0.346976)"
                  />
                </pattern>
                {/* Make sure to include the definition of #image0_18_1286 here */}
              </defs>
            </svg>
          </div>
        </a>
        <div className="flex-grow">
          <div className="mb-2 w-full pl-[27px] border-l-2 border-solid border-transparent flex items-center [&.active]:rounded-r-[10px] [&.active]:rounded-b-[10px] [&.active]:rounded-t-[0px] [&.active]:rounded-l-[0px] [&.active]:bg-regular-primary [&.active]:border-primary [&.active>.menu-text]:text-primary [&.active>.menu-text]:font-medium [&.active>svg_*[fill]]:fill-primary [&.active>svg_*[stroke]]:stroke-primary">
            <Dropdown data={options} setReloadSites={setReloadSites} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
          <ul className="p-0 pr-[14px]">
            <li key='/dashboard' className="h-[60px] flex items-center">
              <NavLink
                to='/dashboard'
                activeClassName="active"
                onClick={closeSidebar}
                className="w-full h-full pl-[27px] border-l-2 border-solid border-transparent flex items-center [&.active]:rounded-r-[10px] [&.active]:rounded-b-[10px] [&.active]:rounded-t-[0px] [&.active]:rounded-l-[0px] [&.active]:bg-regular-primary [&.active]:border-primary [&.active>.menu-text]:text-primary [&.active>.menu-text]:font-medium [&.active>svg_*[fill]]:fill-primary [&.active>svg_*[stroke]]:stroke-primary"
              >
                <DashboardIcon />
                <span className="menu-text text-[18px] leading-[22px] text-white-blue ml-[10px]">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li key='/installation' className="h-[60px] flex items-center">
              <NavLink
                to='/installation'
                activeClassName="active"
                onClick={closeSidebar}
                className="w-full h-full pl-[27px] border-l-2 border-solid border-transparent flex items-center [&.active]:rounded-r-[10px] [&.active]:rounded-b-[10px] [&.active]:rounded-t-[0px] [&.active]:rounded-l-[0px] [&.active]:bg-regular-primary [&.active]:border-primary [&.active>.menu-text]:text-primary [&.active>.menu-text]:font-medium [&.active>svg_*[fill]]:fill-primary [&.active>svg_*[stroke]]:stroke-primary"
              >
                <InstallIcon />
                <span className="menu-text text-[18px] leading-[22px] text-white-blue ml-[10px]">
                  Installation
                </span>
              </NavLink>
            </li>
            <li key='/add-domain' className="h-[60px] flex items-center">
              <NavLink
                to='/add-domain'
                activeClassName="active"
                onClick={closeSidebar}
                className="w-full h-full pl-[27px] border-l-2 border-solid border-transparent flex items-center [&.active]:rounded-r-[10px] [&.active]:rounded-b-[10px] [&.active]:rounded-t-[0px] [&.active]:rounded-l-[0px] [&.active]:bg-regular-primary [&.active]:border-primary [&.active>.menu-text]:text-primary [&.active>.menu-text]:font-medium [&.active>svg_*[fill]]:fill-primary [&.active>svg_*[stroke]]:stroke-primary"
              >
                <UserIcon />
                <span className="menu-text text-[18px] leading-[22px] text-white-blue ml-[10px]">
                  Add Domain
                </span>
              </NavLink>
            </li>
            {routes
              .filter((route) => route.isSidebar)
              .map((route) => (
                <li key={route.path} className="h-[60px] flex items-center">
                  <NavLink
                    to={route.path}
                    activeClassName="active"
                    onClick={closeSidebar}
                    className="w-full h-full pl-[27px] border-l-2 border-solid border-transparent flex items-center [&.active]:rounded-r-[10px] [&.active]:rounded-b-[10px] [&.active]:rounded-t-[0px] [&.active]:rounded-l-[0px] [&.active]:bg-regular-primary [&.active]:border-primary [&.active>.menu-text]:text-primary [&.active>.menu-text]:font-medium [&.active>svg_*[fill]]:fill-primary [&.active>svg_*[stroke]]:stroke-primary"
                  >
                    {route.icon}
                    <span className="menu-text text-[18px] leading-[22px] text-white-blue ml-[10px]">
                      {route.name}
                    </span>
                  </NavLink>
                </li>
              ))}

          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
