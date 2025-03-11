<p align="center">
  <img width="15%" align="center" src="./icon.png" alt="logo">
</p>
  <h1 align="center">
  NetEase Player Music
</h1>
<p align="center">
 A cross platform music player based on pyqt5
</p>

<p align="center">

<p align="center">
  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/python-3.11-brightgreen?color=FFB200" alt="Python 3.8.6"/>
  </a>

  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/PyQt5-5.15.11-brightgreen?color=FFB200
    " alt="PyQt 5.15.2"/>
  </a>

  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/Platform-Win32%7CLinux%7CmacOS-brightgreen?color=FFB200
    " alt="Platform Win32 | Linux | macOS"/>
  </a>
</p>

# NetEase Player User Manual

## Version Information

- **Software Name**: NetEase Player
- **Version**: 1.0.4
- **Release Date**: March 11, 2025

------

## Software Overview

NetEase Player is an audio player based on PyQt5, inspired by the UI design of Microsoft's Groove Music. It aims to provide a seamless music experience by leveraging database information to offer free access to select tracks. The software is continuously updated—stay tuned for new releases 😁😁😁

------

## System Requirements

- **Operating System**: Windows 10 or later.
- **Hardware Requirements**: Minimum 1.6 GHz processor, 2GB RAM, and 470MB of available disk space for installation.

------

## Installation & Launch

### Installation Steps

1. Visit the [official website](https://github.com/markcxx/NetEase-Player-release) or [download page](https://github.com/markcxx/NetEase-Player-release/releases/tag/NetEasePlayer-v1.0.4) to download the latest installer.
2. After downloading, double-click the installer (`NetEase.Player-v1.0.4.exe`).
3. Follow the installation wizard to complete setup.

### Launching the Software

- ~~After installation, locate the desktop shortcut and run it as administrator.~~
- Alternatively, find "NetEase Player" in the Start menu and launch it.

**Note**: ~~To ensure proper functionality, it is recommended to run both the installer and the software as administrator.~~

        Version 1.0.4 has fixed the requirement for administrator privileges.

------

## User Guide

### 1. Search Page

- **Search for Music**:
  - By default, NetEase Player opens to the search page. Enter a song title or artist name.
  - As you type, `search suggestions` will appear. Click a suggestion to quickly find your target track.
  - Search results will display a list with song titles, artists, albums, durations, and more.

![](https://s21.ax1x.com/2025/02/20/pEQeGJf.png)

- **Play Music**:
  - In the search results, double-click, right-click, or click the play button to start playback.
  - Right-click a song for additional options like "Play," "Download," etc.
  - Current features include play/pause, previous/next track, playback modes (shuffle, loop, sequential), volume control, and desktop lyrics.

![](https://s21.ax1x.com/2025/02/20/pEQetSS.png)

![](https://s21.ax1x.com/2025/02/20/pEQeaLj.png)

### 2. Login Page

- **QR Code Login**:
  - Click "My Favorite Music" in the left navigation bar.
  - Scan the displayed QR code using the NetEase Cloud Music mobile app.

![](https://s21.ax1x.com/2025/02/20/pEQewes.png)

- After successful login, NetEase Player will automatically fetch your favorite music list, bypassing paywall restrictions for direct playback.

![](https://s21.ax1x.com/2025/02/20/pEQe0wn.png)

!> **Important**: Ensure your NetEase Cloud Music account does not set playlists to **private**, otherwise the software cannot retrieve your music data.

!> **Important**: Initial data fetching requires caching. Wait until all song thumbnails load before closing the app. Caching time depends on the number of favorited tracks.

### 3. Scrolling Lyrics

- Click the album art or song title (highlighted on hover) to open scrolling lyrics.
- Click the collapse button in the top-left corner to close the lyrics window.

![](https://s21.ax1x.com/2025/02/20/pEQeyWT.png)

### 4. Desktop Lyrics

- Click the lyrics button to enable desktop lyrics.
- Adjust the lyrics position, pause/resume playback, skip tracks, adjust font size, lock lyrics position, and more.

![](https://s21.ax1x.com/2025/02/20/pEQecSU.png)

![](https://s21.ax1x.com/2025/02/20/pEQeglF.png)

### 5. Settings Page

![](https://s21.ax1x.com/2025/02/20/pEQeblD.png)

- **Access Settings**:
  - Click the "Settings" button in the left navigation bar.

- **Startup & Shutdown**
  - **Launch at Startup**: Toggle whether the app starts automatically on system boot.
  - **Minimize to Tray**: Toggle whether the app hides in the system tray when closed. *(Functionality not yet implemented)*

------

- **Personalization**
  - **Theme Color**: Customize the app's theme color.
  - **Lyrics Ambience Color**: Customize the background ambiance color for lyrics.
  - **Lyrics Color Scheme**: Customize lyrics text color.
  - **UI Scaling**: Adjust interface scaling (e.g., 100%, 125%, 150%) or "Follow System."

------

- **Desktop Lyrics**
  - **Font**: Choose a font for desktop lyrics.
  - **Background Color**: Set the background color.
  - **Highlight Color**: Set the highlight color.
  - **Outline Color**: Set the outline color.
  - **Outline Size**: Adjust outline thickness (0–20).
  - **Alignment**: Set lyrics alignment (center, left, right).

------

- **Download & Cache**
  - **Download Directory**: Set the path for downloaded music.
  - **Cache Directory**: Set the path for cached files.

------

- **Software Updates**
  - **Check for Updates**: Manually check for new versions.

------

- **About**
  - **Help**: Open the official repository.
  - **Submit Feedback**: Report issues or suggestions.
  - **About the Author**: View developer information.

------

## Release Notes

#### v1.0.4

#### New Features
- Added support for local music playback.
- Removed administrator privileges requirement.
- Added metadata writing for downloaded audio.
- Local music now reads metadata upon import.

#### v1.0.3
- **Desktop Lyrics**: Floating lyrics display for an immersive experience.
- **Personalization**:
  - Customizable theme colors.
  - Lyrics ambiance colors, scrolling lyrics color schemes.
  - UI scaling adjustments for different screen resolutions.
  - Desktop lyrics customization: background/highlight/outline colors, outline size.
- **Music Download**:
  - Right-click to download tracks.
  - Customizable download path in settings.
- **Cache Management**: Optimized cache handling for faster loading.
- **User Guide**: Added documentation for easier onboarding.
- **Optimizations**:
  - Improved caching mechanism.
  - Enhanced UI/UX design.

#### v1.0.2
- Fixed known bugs.
- Added MV playback support.
- Optimized caching mechanism.

#### v1.0.1
- Initial release.
- Features:
  - QR code login for NetEase Cloud Music.
  - Music search engine.
  - Paid/free music playback.
  - Lyrics display.

------

## FAQ

### 1. Why can't I play certain songs?
- **Possible Causes**:
  - High server request frequency.
  - Unstable network connection.
- **Solutions**:
  - Retry later.
  - Check your network connection.

### 2. Why can't I download music or MV?
- **Possible Causes**:
  - Network issues.
  - Invalid download path (e.g., insufficient disk space).
- **Solutions**:
  - Check network stability.
  - Verify download path and disk space.

### 3. How to update the software?
- Visit the [official website](https://github.com/markcxx/NetEase-Player-release) or [download page](https://github.com/markcxx/NetEase-Player-release/releases/tag/NetEasePlayer-v1.0.2).
- NetEase Player supports automatic update checks.
- Close the app before installing the update.
- Run the installer and follow prompts.

# Legal & Terms of Use

## Copyright Notice

### Software Information
- **Software Name**: NetEase Player
- **Version**: 1.0.4
- **Developer**: Mark
- **Copyright**: © 2025 Mark. All Rights Reserved.

### Software Copyright
1. **Definition**: NetEase Player ("the Software") is developed by Mark to provide music playback services. The Software, including documentation, icons, UI design, source code (if applicable), and related files, is the exclusive property of Mark, protected by international copyright laws.
2. **Copyright Statement**: Unauthorized reproduction, distribution, modification, reverse engineering, or other illegal uses are strictly prohibited.
3. **Trademarks**: "NetEase Player" and its logos are trademarks of Mark. Unauthorized use is prohibited.
4. **Third-Party Content**: Third-party components are governed by their respective licenses.

------

## Terms of Use

### License Grant
1. **Scope**: Mark grants you a non-exclusive, non-transferable license to use the Software for personal, non-commercial purposes.
2. **Prohibited Actions**:
   - Reverse engineering, decompiling, or modifying the Software.
   - Commercial use, redistribution, or illegal activities.

### User Responsibilities
1. **Compliance**: Use the Software lawfully and respect third-party rights.
2. **Data Security**: Backup your data; Mark is not liable for data loss.
3. **Updates**: Install updates promptly for optimal performance.

### Disclaimer
1. **Risk**: Use the Software at your own risk. Mark does not guarantee uninterrupted or error-free operation.
2. **Liability**: Mark is not liable for direct, indirect, or consequential damages.
3. **Third-Party Services**: Third-party services are used at your discretion.

### Termination
1. **License Termination**: Violating these terms grants Mark the right to terminate your license.
2. **Uninstallation**: Uninstall via Control Panel or system tools if you cease use.

### Governing Law & Dispute Resolution
1. **Jurisdiction**: Governed by the laws of the People’s Republic of China.
2. **Disputes**: Resolve disputes through negotiation or litigation in Mark’s local jurisdiction.

### Contact
- **Website**: https://github.com/markcxx/NetEase-Player-release
- **Email**: 2811016860@qq.com