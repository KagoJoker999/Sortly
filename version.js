const version = '2.1.0';

// 在页面加载时设置版本号
document.addEventListener('DOMContentLoaded', () => {
    const versionElements = document.getElementsByClassName('version-tag');
    for (const element of versionElements) {
        element.textContent = version;
    }
}); 