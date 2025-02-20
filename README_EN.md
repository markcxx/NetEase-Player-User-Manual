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

  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/Python-3.8.6-blue.svg?color=00B16A" alt="Python 3.8.6"/>
  </a>

  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/PyQt-5.15.2-blue?color=00B16A" alt="PyQt 5.15.2"/>
  </a>

  <a style="text-decoration:none">
    <img src="https://img.shields.io/badge/Platform-Win32%20|%20Linux%20|%20macOS-blue?color=00B16A" alt="Platform Win32 | Linux | macOS"/>
  </a>
</p>

# NetEase Player User Manual

## Version Information

- **Software Name**: NetEase Player  
- **Version Number**: 1.0.3  
- **Release Date**: February 20, 2025  

------

## Software Introduction

!> NetEase Player is a multifunctional music playback software developed with PyQt. It currently supports song search, search suggestions, playback of premium music, music/MV downloads, QR code login for NetEase Cloud Music account to access "Favorite Songs" playlist, along with scrolling lyrics, desktop lyrics, playlist management, etc. Designed to provide convenient and personalized music experience.

------

## System Requirements

- **Operating System**: Windows 10 or later  
- **Hardware Requirements**: Minimum 1.6 GHz processor, 2GB RAM, and 300MB available disk space for installation.  

------

## Installation & Launch

### Installation Steps

1. Visit the [Official Website](https://github.com/markcxx/NetEase-Player-release) or [Download Page](https://github.com/markcxx/NetEase-Player-release/releases/tag/NetEasePlayer-v1.0.2) to download the latest installer.  
2. After downloading, double-click the installer (`NetEase.Player-v1.0.3.exe`).  
3. Follow the installation wizard instructions.  
4. After installation completes, `DO NOT check the "Run Software" option`.  

### Launching Software

- Find the desktop shortcut and `Run as Administrator`.  
- Or launch through Start Menu → "NetEase Player".  

**Note**: To ensure proper operation, we recommend `running both installer and software as Administrator`.  

------

## User Guide

### 1. Search Page

- **Search Music**:  
  - Default landing page shows search bar. Enter song title or artist name.  
  - Real-time `search suggestions` will appear as you type. Click suggestions for quick results.  
  - Search results display song name, artist, album, duration, etc.  

![](https://s21.ax1x.com/2025/02/20/pEQeGJf.png)  

- **Play Music**:  
  - In search results: `Double-click`/`Right-click`/`Click play button` to play.  
  - Right-click menu options: "Play", "Download", etc.  
  - Supported controls: Play/Pause, Previous/Next, Playback Modes (Shuffle/List Loop/Sequential), Volume, Desktop Lyrics, etc.  

![](https://s21.ax1x.com/2025/02/20/pEQetSS.png)  

![](https://s21.ax1x.com/2025/02/20/pEQeaLj.png)  

### 2. Login Page

- **QR Code Login**:  
  - Click "Favorite Songs" in left navigation bar.  
  - Scan displayed QR code with NetEase Cloud Music app.  

![](https://s21.ax1x.com/2025/02/20/pEQewes.png)  

- After login, software automatically fetches your "Favorite Songs" playlist (including premium tracks).  

![](https://s21.ax1x.com/2025/02/20/pEQe0wn.png)  

!<Important: `Ensure your NetEase Cloud playlist is NOT set to private`, otherwise music data cannot be retrieved.  

!<Note: Initial data caching may take time depending on playlist size. Wait until all song thumbnails load before closing software.  

### 3. Scrolling Lyrics

- Click album art or song title (hover to highlight) to open scrolling lyrics.  
- Click "×" on top-left to close.  

![](https://s21.ax1x.com/2025/02/20/pEQeyWT.png)  

### 4. Desktop Lyrics

- Click lyrics button to enable desktop lyrics.  
- Features: Reposition lyrics panel, Play/Pause, Previous/Next, Font scaling, Lock position, etc.  

![](https://s21.ax1x.com/2025/02/20/pEQecSU.png)  

![](https://s21.ax1x.com/2025/02/20/pEQeglF.png)  

### 5. Settings Page

- **Access Settings**:  
  - Click "Settings" in left navigation bar.  

- **Startup & Exit**  
  - **Auto-start**: Enable/Disable launch at system startup.  
  - **Minimize to Tray**: Enable/Disable tray hiding when closing.  

------

- **Personalization**  
  - **Theme Color**: Customize interface color scheme.  
  - **Lyrics Ambience**: Set lyrics background ambiance color.  
  - **Lyrics Color**: Customize lyrics text color.  
  - **UI Scaling**: Adjust interface scaling (100%/125%/150%) or "Follow System".  

------

- **Desktop Lyrics**  
  - **Font**: Select desktop lyrics font.  
  - **Background Color**: Set lyrics panel background.  
  - **Highlight Color**: Set highlighted lyrics color.  
  - **Outline Color**: Customize text outline color.  
  - **Outline Size**: Adjust outline thickness (0-20).  
  - **Alignment**: Set text alignment (Center/Left/Right).  

------

- **Download & Cache**  
  - **Music Directory**: Set default download path.  
  - **Cache Directory**: Configure cache location.  

------

- **Updates**  
  - **Check Updates**: Manually check for new versions.  

------

- **About**  
  - **Help**: Open official repository page.  
  - **Feedback**: Submit issues/suggestions.  
  - **About Developer**: View author information.  

------

## FAQ

### 1. Why can't I play certain songs?  
- **Possible Reasons**:  
  - High server request frequency.  
  - Unstable network connection.  
- **Solutions**:  
  - Retry later.  
  - Check network connectivity.  

### 2. Why can't I download music/MV?  
- **Possible Reasons**:  
  - Network issues.  
  - Invalid download path (full disk/wrong directory).  
- **Solutions**:  
  - Check network connection.  
  - Verify download path and disk space.  

### 3. How to update?  
- Visit [Official Website](https://github.com/markcxx/NetEase-Player-release) or [Download Page](https://github.com/markcxx/NetEase-Player-release/releases/tag/NetEasePlayer-v1.0.2).  
- Software has auto-update detection.  
- Close software before installing update.  
- Run installer to complete update.  

# Legal & Terms

## Copyright Notice

### Software Information  
- **Name**: NetEase Player  
- **Version**: 1.0.3  
- **Developer**: Mark  
- **Copyright**: © 2025 Mark. All Rights Reserved.  

### Software Copyright  
1. **Definition**:  
   NetEase Player ("the Software") is a music player developed by Mark. The software and all related materials are Mark's exclusive property.  
2. **Ownership**:  
   All components (UI, icons, code, documentation) are protected by international copyright laws. Unauthorized reproduction/modification is prohibited.  
3. **Trademarks**:  
   "NetEase Player" name/logo are Mark's trademarks. Unauthorized use is forbidden.  
4. **Third-party Content**:  
   Any third-party content follows its original license agreements.  

------

## Terms of Use  

### License  
1. **Grant**:  
   Non-exclusive, non-transferable license for personal use only.  
2. **Prohibitions**:  
   - Reverse engineering/decryption prohibited.  
   - No commercial use/distribution.  
   - No illegal activities.  

### User Responsibilities  
1. **Legal Compliance**:  
   Users must comply with local laws and respect third-party rights.  
2. **Data Security**:  
   Users are responsible for data backup and security.  
3. **Updates**:  
   Users should install updates promptly.  

### Disclaimer  
1. **No Warranty**:  
   Software provided "AS IS" without guarantees.  
2. **Liability**:  
   Mark not liable for any damages from software use.  
3. **Third-party Services**:  
   Third-party services are users' own responsibility.  

### Termination  
1. **License Termination**:  
   Mark may terminate license for violations.  
2. **Uninstallation**:  
   Remove all copies when discontinuing use.  

### Governing Law  
Disputes governed by Chinese law, resolved in Mark's local courts.  

### Contact  
- **Official Site**: https://github.com/markcxx/NetEase-Player-release  
[file content end]