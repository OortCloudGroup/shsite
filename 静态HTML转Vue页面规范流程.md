# 静态 HTML 转 Vue 页面规范流程

## 背景

本规范用于将独立静态网页目录，例如 `thirdHtml/index.html`，迁移为项目内可维护的 Vue/Nuxt 页面。

适用场景：

- 静态页面由 `index.html`、`assets/css`、`assets/js`、`assets/images` 组成。
- 需要迁移到 `src/pages` 下生成真实路由页面。
- 需要保留原页面结构和视觉，但改成项目现有 Vue/CSS 组织方式。
- 顶部导航锚点需要拆成多个路由页面。

## 核心原则

1. 不把整站内容塞进一个超大 Vue 组件。
2. 路由页面要承载自己的主体内容。
3. 公共部分单独抽组件，例如导航、底部、CTA、布局壳。
4. 静态资源迁移到 `src/assets` 下独立目录。
5. 原页面视觉优先保持一致，后续再做文案和链接替换。
6. 只对本次改动文件做局部 lint，不跑全量 lint。
7. 未经要求不执行编译。

## 推荐目录结构

```text
src/assets/oortShEn/
  style.less
  css/
  js/
  images/

src/components/OortShEn/
  OortShEnLayout.vue
  OortShEnNav.vue
  OortShEnFooter.vue
  OortShEnCta.vue

src/layouts/
  oort-sh-en.vue

src/pages/en/
  index.vue
  features.vue
  deploy.vue
  ai-studio.vue
  pricing.vue
  enterprise.vue
```

## 操作流程

### 1. 读取静态页面结构

先读取 `index.html`，定位导航和各页面区块：

```text
Navigation
Hero
Features
Deploy
How It Works
Enterprise
Comparison
Pricing
AI Studio
Developer Tools
CTA
Footer
```

使用 HTML 注释、`section id`、`footer` 标签确认边界。

### 2. 按顶部导航划分路由

如果导航是：

```text
Features / Deploy / AI Studio / Pricing / Enterprise / Docs
```

推荐生成：

```text
/en
/en/features
/en/deploy
/en/ai-studio
/en/pricing
/en/enterprise
```

`Docs` 如果是外链，先保持外链：

```html
<a href="https://docs.oortcloudsmart.com" target="_blank" rel="noopener noreferrer">Docs</a>
```

### 3. 迁移资源

将原资源目录迁移到 `src/assets` 下独立目录：

```text
thirdHtml/assets -> src/assets/oortShEn
```

原 CSS 不建议继续作为外链引入，应整理为项目内样式：

```text
src/assets/oortShEn/style.less
```

### 4. 拆公共组件

`OortShEnLayout.vue` 只保留公共壳：

```vue
<template>
  <div class="oort-sh-en">
    <OortShEnNav />
    <main>
      <slot />
    </main>
    <OortShEnFooter v-if="showFooter" />
  </div>
</template>
```

导航单独放到 `OortShEnNav.vue`：

- 负责顶部菜单。
- 负责移动端菜单展开。
- 负责滚动后的导航状态。
- 负责当前路由高亮。

底部单独放到 `OortShEnFooter.vue`：

- 负责公共 footer。
- 首页如果不需要底部，通过 `showFooter` 控制。

CTA 单独放到 `OortShEnCta.vue`：

- 多个页面复用时不要重复写。

### 5. 各页面承载自己的内容

不要让页面只写：

```vue
<OortShEnLayout :sections="['features']" />
```

应该让页面直接承载对应 HTML 内容：

```vue
<template>
  <OortShEnLayout>
    <section class="features" id="features">
      ...
    </section>
    <OortShEnCta />
  </OortShEnLayout>
</template>
```

页面职责建议：

```text
index.vue       首页 Hero 和必要首页内容
features.vue    Features 内容
deploy.vue      Deploy + How It Works + Developer Tools
ai-studio.vue   AI Studio + Developer Tools
pricing.vue     Pricing
enterprise.vue  Enterprise + Comparison
```

### 6. 独立英文布局

如果项目 `app.vue` 手动指定布局，例如：

```vue
<NuxtLayout :name="layoutName">
  <NuxtPage />
</NuxtLayout>
```

则 `definePageMeta({ layout: 'xxx' })` 可能不会生效。

此时需要在 `app.vue` 中按路由强制切布局：

```js
const layoutName = computed(() => {
  if (route.path.startsWith('/en')) {
    return 'oort-sh-en'
  }
  return flag.isMobiFlag ? 'mobile' : 'default'
})
```

英文独立布局用于避免默认布局的公共头部、白色背景、公共底部影响英文页。

### 7. 处理滚动条

如果英文页需要隐藏滚动条，但仍允许滚动，应只在英文布局作用域内处理。

推荐在英文布局挂载时加 class：

```js
const bodyClassName = 'oort-sh-en-hidden-scrollbar'

onMounted(() => {
  document.documentElement.classList.add(bodyClassName)
  document.body.classList.add(bodyClassName)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove(bodyClassName)
  document.body.classList.remove(bodyClassName)
})
```

再写全局样式：

```css
html.oort-sh-en-hidden-scrollbar,
body.oort-sh-en-hidden-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html.oort-sh-en-hidden-scrollbar::-webkit-scrollbar,
body.oort-sh-en-hidden-scrollbar::-webkit-scrollbar {
  display: none;
}
```

不要直接全局隐藏所有页面滚动条，避免污染中文页面。

## 样式迁移规范

### CSS 作用域

原静态页面 CSS 通常包含：

```css
:root {}
html {}
body {}
a {}
code {}
```

迁移时应改为英文页容器作用域：

```css
.oort-sh-en {}
.oort-sh-en a {}
.oort-sh-en code {}
```

### 字体和背景

英文页根容器建议保留：

```css
.oort-sh-en {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

### 移动端导航

原静态 JS 中的菜单展开逻辑，应改为 Vue 状态：

```js
const isMobileOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}
```

模板中用 class 控制：

```vue
<div class="nav-links" :class="{ 'mobile-open': isMobileOpen }">
```

## 链接处理规范

原锚点链接：

```html
href="#features"
href="#deploy"
href="#pricing"
```

迁移为路由：

```html
href="/en/features"
href="/en/deploy"
href="/en/pricing"
```

如果仍然是页面内锚点，例如 `How It Works`：

```html
href="/en/deploy#how-it-works"
```

暂未确认真实目标的按钮，例如登录、下载，可以先保持：

```html
href="#"
```

后续再统一替换。

## 验证流程

### 1. 局部 lint

只检查本次改动文件：

```bash
pnpm.cmd exec eslint --fix src/app.vue src/layouts/oort-sh-en.vue src/components/OortShEn/*.vue src/pages/en/*.vue
```

不要跑全量 lint，除非用户明确要求。

### 2. 本地页面检查

启动 dev server 后检查：

```text
http://localhost:8080/en
http://localhost:8080/en/features
http://localhost:8080/en/deploy
http://localhost:8080/en/ai-studio
http://localhost:8080/en/pricing
http://localhost:8080/en/enterprise
```

重点检查：

- 顶部是否有默认布局残留白条。
- `/en` 首页是否按需求隐藏底部。
- 子页面是否显示英文公共底部。
- 导航是否高亮当前路由。
- `Docs` 是否外链打开。
- 页面是否可滚动且滚动条显示符合需求。

## 常见问题和处理

### 问题一：页面顶部出现白色间隔

原因：

默认布局包了一层白色 `.main_body` 或公共头部。

处理：

- 新增独立布局。
- 在 `app.vue` 中对 `/en` 路由强制使用英文布局。

### 问题二：`definePageMeta` 不生效

原因：

项目可能在 `app.vue` 中手动指定了 `NuxtLayout :name="layoutName"`。

处理：

不要只依赖 `definePageMeta`，需要同步修改 `app.vue` 的 `layoutName` 判断。

### 问题三：大组件不可维护

原因：

所有 section 都塞在一个 Layout 组件中。

处理：

- Layout 只保留壳。
- 公共组件抽取。
- 页面承载主体内容。

### 问题四：滚动条隐藏污染其他页面

原因：

直接给 `html, body` 写全局隐藏滚动条。

处理：

只在英文布局挂载时给 `html/body` 加 class，卸载时移除。

## 本次项目落地文件

```text
src/app.vue
src/layouts/oort-sh-en.vue
src/assets/oortShEn/style.less
src/components/OortShEn/OortShEnLayout.vue
src/components/OortShEn/OortShEnNav.vue
src/components/OortShEn/OortShEnFooter.vue
src/components/OortShEn/OortShEnCta.vue
src/pages/en/index.vue
src/pages/en/features.vue
src/pages/en/deploy.vue
src/pages/en/ai-studio.vue
src/pages/en/pricing.vue
src/pages/en/enterprise.vue
```

## 最终效果

- 静态英文页已转为 Nuxt 路由页面。
- 页面结构按顶部导航拆分。
- 公共导航、底部、CTA 已抽离。
- 样式进入项目资源目录。
- 英文页面使用独立布局。
- 首页可以独立控制是否显示底部。
- 滚动条隐藏限定在英文布局内。

## 同步修改建议

其他项目复用时，按以下顺序执行：

1. 先确认静态页 section 边界。
2. 再按导航拆路由。
3. 迁移资源到独立 assets 目录。
4. 建立独立布局，避免默认布局污染。
5. 抽公共组件。
6. 将主体内容放回对应页面。
7. 最后做局部 lint 和浏览器检查。
