import React from "react";
import "./Sidebar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiListUl } from "react-icons/bi";
import { FcSalesPerformance } from "react-icons/fc";
import { BiPackage } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { RiBillFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <CustomLink to="/dashboard">
              <div className="logo">
                <MdDashboard />
                {/* <div className="listContent"> */}
                  <h5>Dashboard</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/items">
              <div className="logo">
                <BiListUl />
                {/* <div className="listContent"> */}
                  <h5>Items</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/sales-order">
              <div className="logo">
                <FcSalesPerformance />
                {/* <div className="listContent"> */}
                  <h5>Sales Order</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/packages">
              <div className="logo">
                <BiPackage />
                {/* <div className="listContent"> */}
                  <h5>Packages</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/invoice">
              <div className="logo">
                <FaFileInvoiceDollar />
                {/* <div className="listContent"> */}
                  <h5>Invoice</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/purchase-order">
              <div className="logo">
                <BiPurchaseTag />
                {/* <div className="listContent"> */}
                  <h5>Purchase Order</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/bills">
              <div className="logo">
                <RiBillFill />
                {/* <div className="listContent"> */}
                  <h5>Bills</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>

          <li>
            <CustomLink to="/reports">
              <div className="logo">
                <GoGraph />
                {/* <div className="listContent"> */}
                  <h5>Reports</h5>
                {/* </div> */}
              </div>
            </CustomLink>
          </li>
        </ul>
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
