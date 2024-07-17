---
home: true
heroImage: /img/logo.svg
heroText: doc-apis

tagline: 🚀A Foolproof, Non-intrusive Framework for Automatic Generation of Interface Documentation
actions:
- actionText: 🚀Quick Start
  actionLink: /pages/7ead0d
  actionClass: action-button-doc-apis
bannerBg: /img/back.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
defaultMode: light
features: # 可选的
  - title: Non-intrusive
    details: No need to add any code or annotations, completely transparent and unobtrusive, and no need to package it into the project at all.
  - title: Non-configuration
    details: No configuration required, ready to use out of the box, with zero learning cost.
  - title: Powerful Features
    details: The feature allows for the fully automatic generation of multi-platform, multi-format, and multilingual API documentation, which can also be tested online.

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表

postList: none
notices: # 可选的
    - id: doc-apis
      title: 🚀 doc-apis v1.0.0 published！
      content: '<div><ul><li>2024-07</li><li>v1.0.0</li></ul></div><p style="text-align: right;"><a href="/pages/2934a3/">View Details</a></p>'
      isHtmlContent: true
---
<Notice :data="$frontmatter.notices"/>

<br/>

## ⛵Sponsor

::: cardList
```yaml
- name: Easy-Es
  desc: User-friendly,Lower code Elasticsearch Search Engine ORM Framework...
  avatar: /img/sponsor/easy-es-logo.jpg
  link: https://www.easy-es.cn/
  bgColor: '#25c37d'
  textColor: '#FFFFFF'

- name: Mingdao-Cloud
  desc: Quickly respond to business needs, transforming from an 'IT scapegoat' into an 'IT hero'...
  avatar: /img/sponsor/mingdao-logo.jpg
  link: https://www.mingdao.com?s=utm_206&utm_source=doc-apis&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=%E6%B3%A8%E5%86%8C%E4%BD%93%E9%AA%8C
  bgColor: '#25c37d'
  textColor: '#FFFFFF'

- name: AgileBPM
  desc: A fast, concise, and powerful low-code workflow development platform...
  avatar: /img/sponsor/agile-logo.png
  link: https://www.tongzhouyun.com/
  bgColor: '#25c37d'
  textColor: '#FFFFFF'

```
:::



<style>
  .page-wwads{
    width:100%!important;
    min-height: 0!important;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color:  #25c37d;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #25c37d;
}
</style>

<!-- AD -->


<p align="center">
  <a class="become-sponsor" href="/pages/fb599d/">become sponsor</a>
</p>

<br/>

## 🍬Advantages
- **Zero Intrusion:** Unlike frameworks like Swagger, there's no need to write additional business code for documentation generation. As long as your code adheres to the standards, API documentation is automatically created.
- **Zero Configuration:** With Spring Boot, zero lines of configuration are needed at a minimum to generate API documentation. All configurations are streamlined with default values, only requiring adjustments when necessary.
- **Transparent Dependency:** After integration, it remains completely transparent to the original project, causing no impact. It can even be excluded from project packaging, eliminating concerns about third-party dependencies introducing extra risks.
- **Powerful Features:**  The generated documentation allows for direct online debugging, with all necessary debug information provided by default but also customizable, offering a superior experience to Swagger and Postman.
- **Rich Content:** Comprehensive details are included, ranging from request URLs, methods, input/output parameters, parameter types, mandatory fields, and descriptions, ensuring clarity.
- **Versatile Output:** Documentation can be generated in multiple formats such as HTML, MD, suitable for various scenarios including WEB, iOS, Android, etc.
- **Broad Compatibility:** Supports mainstream frameworks like SpringBoot, Spring, as well as niche ones like JFinal, Play, etc.
- **Multilingual Support:** Generates API documentation in multiple languages and provides bilingual (Chinese-English) user guides.
- **Excellent Compatibility:** Works across a wide range of Java Development Kits (JDK8 to JDK21) and SpringBoot versions (from 1.x to 3.x), among others.
- **Ease of Use:** Requires minimal learning, with most projects involving no additional learning costs. Even in exceptional cases, the learning curve is under 3 minutes.
- **Affordable Pricing:** Free for individual users and businesses with up to 10 employees. Larger enterprises incur a reasonable fee based on scale, aimed at sustainability rather than profit.

<br/>
<br/>

## ✨ Latest Version: [![Maven Central](https://img.shields.io/github/v/release/xpc1024/doc-apis?include_prereleases&logo=xpc&style=plastic)](https://search.maven.org/search?q=g:com.doc-apis)

### Springboot project

**Maven:**

```xml
<dependency>
    <groupId>com.doc-apis</groupId>
    <artifactId>doc-apis-starter</artifactId>
    <version>${Latest Version}</version>
</dependency>
```
**Gradle:**

```groovy
compile group: 'com.doc-apis', name: 'doc-apis-starter', version: 'Latest Version'
```

### Other project

```xml
        <dependency>
            <groupId>com.doc-apis</groupId>
            <artifactId>doc-apis-core</artifactId>
            <version>Latest Version</version>
        </dependency>
```

**Gradle:**

```groovy
compile group: 'com.doc-apis', name: 'doc-apis-core', version: 'Latest Version'
```

<br/>
<br/>

:::tip Is the version stable ?

Prior to each release, we ensure comprehensive test case coverage for every feature. Our unit tests boast an aggregate coverage rate exceeding 95%, with all deployed functionalities thoroughly tested. These tests have been validated through real-world usage in production environments and by a substantial user base within the open-source community.Moreover, we've conducted both theoretical analyses and practical tests to evaluate the framework's performance and security, guaranteeing peace of mind for all users. Detailed information on these aspects is available in the 'Shattering Concerns' section of our documentation.Our origins lie in the prestigious Aizuda open-source community, and our author is also a member of the Dromara open-source community, renowned for creating Easy-Es. With a wealth of development expertise, we take pride in the truly non-intrusive nature of our framework, which can be utilized without needing to be packaged into your project. Thus, you can confidently incorporate it into your workflow!"This response emphasizes the thorough testing and validation processes undergone by the framework, its performance and security assurances, the credibility of its creators, and its non-intrusive integration capabilities, providing assurance to potential users regarding its reliability and ease of use!
:::

<br/>

## 🏡Code Hosting

<a href='https://gitee.com/easy-es/doc-apis' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/xpc1024/doc-apis" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/>
<br/>

## 💪🏻PR

We welcome all heroes to join us in improving doc-apis. We look forward to your PR!

If you wish to contribute, please first review[PR](/pages/7d828w/)。

<br/>
<br/>


## 🧲Links
<div>
  <span style="width: 150px;text-align: left">
      <a href="https://www.easy-es.cn/" target="_blank">
          <img :src="$withBase('/img/external/easy-es.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;flex:1;text-align: left">
      <a href="https://gitee.com" target="_blank">
          <img :src="$withBase('/img/external/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.oschina.net" target="_blank">
          <img :src="$withBase('/img/external/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://aizuda.com/" target="_blank">
          <img :src="$withBase('/img/aizuda/aizuda.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://dromara.org/" target="_blank">
          <img :src="$withBase('/img/dromara/dromara.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://snailjob.opensnail.com/" target="_blank">
          <img :src="$withBase('/img/aizuda/snail.svg')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.mongoplus.com/" target="_blank">
          <img :src="$withBase('/img/aizuda/mongo-plus.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
</div>

<br/>

<style lang="stylus">
.action-button-doc-apis
    margin-left 0.7rem
    margin-top 0.5rem
    display inline-block
    font-size 1.2rem
    background-color #68c400
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color 0.1s ease
    box-sizing border-box
    border-bottom 1px solid #A63939
    color #000000
    &:hover
        background-color lighten(#68c400, 10%)
</style>