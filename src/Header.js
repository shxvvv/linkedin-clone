import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import pfpsrc from "./assets/pfp.avif";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4="
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={pfpsrc} title="Profile" />
      </div>
    </div>
  );
}

export default Header;
