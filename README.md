# react-file-preview(基于React的资源预览组件)

目前支持格式：文档(pdf、docx、xlsx、pptx)，音频(mp3)，视频(mp4)，图片(png、jpg、jpeg、gif)等

## 项目开发

1. 克隆项目至本地：
    ```sh
    $ git clone git@github.com:miqilin21/react-file-preview.git
    $ cd react-file-preview
    ```
2. 安装项目依赖：
    ```sh
    $ yarn
    ```
    或
    ```sh
    $ npm install
    ```
3. 运行项目：
    ```sh
    $ yarn start
    ```
    或
    ```sh
    $ npm run start
    ```
4. 打开浏览器预览：
    ```sh
    $ open http://localhost:3000
    ```

## 使用
```js
import Viewer from './Viewer'
    
<Viewer fileType="" src={url} />
```
    
src/App.js下有使用用例，其中:
    
`fileType(文件类型)`: pdf/docx/xlsx/pptx/mp3/mp4/png...
    
`src(文件地址)`: import('相对路径')或在线地址

