(function () {
  // 切换暗黑模式的函数
  function docsifyDarkSwitcher() {
    var bodyElement = document.querySelector('body');
    bodyElement.classList.toggle("docsify-dark-mode");

    if (bodyElement.classList.contains("docsify-dark-mode")) {
      localStorage.setItem('docsify-dark-mode', 'true');
    } else {
      localStorage.removeItem('docsify-dark-mode');
    }
  }

  // 初始模式应用函数：如果 localStorage 中保存了暗黑模式状态，或系统偏好暗色，则启用暗黑模式
  function applyInitialMode() {
    var bodyElement = document.querySelector('body');
    if (localStorage.getItem('docsify-dark-mode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      bodyElement.classList.add("docsify-dark-mode");
    }
  }

  document.addEventListener('DOMContentLoaded', applyInitialMode);

  // styleInject 函数（原始代码风格）
  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = `
:root {
  --dark-icon-size: 60px;
}

/* 开关容器，默认背景为亮色 */
.toggle-switch {
  position: absolute;
  right: 20px;
  top: 0px;
  width: 60px;
  height: 30px;
  background: #f0f0f0; /* 亮色背景 */
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.toggle-switch-text {
  position: absolute;
  right: 90px;
  top: 6px;
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #FFDCCC;
  // color: var(--dark-base-color,rgb(255, 115, 0));
}

/* 开关按钮 */
.toggle-switch .toggle-knob {
  width: 26px;
  height: 26px;
  background: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  margin-left: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

/* 暗黑模式下的背景和按钮位置 */
.docsify-dark-mode .toggle-switch {
  background: #333333; /* 暗色背景 */
}

.docsify-dark-mode .toggle-switch .toggle-knob {
  transform: translateX(30px);
}
.docsify-dark-mode .cover .mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--dark-cover-background);
}
.docsify-dark-mode,
.docsify-dark-mode .sidebar,
.docsify-dark-mode .search input,
.docsify-dark-mode .app-nav li ul {
    background: var(--dark-base-background);
    color: var(--dark-base-color);
}
.docsify-dark-mode .markdown-section code,
.docsify-dark-mode .markdown-section pre,
.docsify-dark-mode .markdown-section p.tip code {
    background: var(--dark-code-background);
    color: var(--dark-code-color);
}
.docsify-dark-mode .markdown-section p.tip {
    background: var(--dark-tip-background);
}
.docsify-dark-mode .markdown-section p.warn {
    background: var(--dark-warn-background);
}
.docsify-dark-mode .anchor span {
    color: var(--dark-heading-color);
}
.docsify-dark-mode .sidebar ul li.active>a {
    color: var(--dark-theme-color);
    border-color: var(--dark-theme-color);
}
.docsify-dark-mode .sidebar ul li a, .docsify-dark-mode .markdown-section strong {
    color: var(--dark-base-color);
}
.docsify-dark-mode .markdown-section tr:nth-child(2n) {
    background-color: #3b3b3b;
}
@media screen and (min-width:769px) {
    .docsify-dark-mode .sidebar-toggle {
        background: rgb(0 0 0 / .6);
    }
}

/* 以下是一些其它文档主题的暗黑模式样式（可选） */
.docsify-dark-mode,
.docsify-dark-mode .sidebar,
.docsify-dark-mode .search input,
.docsify-dark-mode .app-nav li ul {
  background: #222222;
  color: #e0e0e0;
}
`;

  // 注入样式
  styleInject(css);

  // docsify 插件：在每个页面注入横向开关控件
  function install(hook, vm) {
    hook.afterEach(function (html) {
      var toggleSwitchHtml =
        '<div class="toggle-switch-wrapper" onclick="docsifyDarkSwitcher()">' +
          '<div class="toggle-switch"><div class="toggle-knob"></div></div>' +
          '<span class="toggle-switch-text">切换主题</span>' +
        '</div>';
      return toggleSwitchHtml + html;
    });
  }

  // 注册插件到 docsify
  $docsify.plugins = [].concat(install, $docsify.plugins);

  // 将切换函数暴露到全局，供控件 onclick 调用
  window.docsifyDarkSwitcher = docsifyDarkSwitcher;
})();
