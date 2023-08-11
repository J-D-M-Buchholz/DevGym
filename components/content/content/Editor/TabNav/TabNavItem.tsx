"use client"

import { Dispatch, SetStateAction } from "react"

type TabNavItemProps = {
  id: string
  title: string
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
}

const TabNavItem: React.FC<TabNavItemProps> = ({
  id,
  title,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <li
      onClick={handleClick}
      className={`tab_item ${activeTab === id ? "tab_active" : ""}`}
    >
      {title}
    </li>
  )
}
export default TabNavItem
