import { Link, useLocation } from "react-router-dom";
import "./BottomNavigationBar.css";

import HomeIcon from "../assets/icons/home.svg";
import SelectedHomeIcon from "../assets/icons/selected_home.svg";

import MusicIcon from "../assets/icons/music_note.svg";
import SelectedMusicIcon from "../assets/icons/selected_music_note.svg";

import PlaylistIcon from "../assets/icons/playlist.svg";
import SelectedPlaylistIcon from "../assets/icons/selected_playlist.svg";

const BottomNavigationBar = () => {
  const location = useLocation();

  const tabs = [
    {
      href: "/",
      label: "홈",
      defaultIcon: HomeIcon,
      selectedIcon: SelectedHomeIcon,
    },
    {
      href: "/search",
      label: "음악 찾기",
      defaultIcon: MusicIcon,
      selectedIcon: SelectedMusicIcon,
    },
    {
      href: "/playlist",
      label: "플레이리스트",
      defaultIcon: PlaylistIcon,
      selectedIcon: SelectedPlaylistIcon,
    },
  ];

  return (
    <div className="BottomNavigationBar">
      {tabs.map((tab) => {
        const isSelected = location.pathname === tab.href;

        return (
          <Link
            key={tab.href}
            to={tab.href}
            className={isSelected ? "selected" : ""}
          >
            <img
              src={isSelected ? tab.selectedIcon : tab.defaultIcon}
              alt={tab.label}
              width={30}
              height={25}
            />
            <span className={isSelected ? "text-selected" : ""}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigationBar;
