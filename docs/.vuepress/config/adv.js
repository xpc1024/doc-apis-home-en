module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://www.easy-es.cn/" target="_blank">
      <img className="no-zoom" height="60" width="224" " src="/img/sponsor/easy-es.png">
    </a>`,
    `<a name="adv" class="none" href="https://www.mingdao.com?s=utm_206&utm_source=doc-apis&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=%E6%B3%A8%E5%86%8C%E4%BD%93%E9%AA%8C" target="_blank">
      <img className="no-zoom" height="60" width="224" " src="/img/sponsor/mingdao.jpg">
    </a>`


  ]

  let _html = `<div style="width:224px;margin:0 auto;display:flex;flex-direction: column;"> 
                ${sidebarArray.join("")}
                <div style="order: 9999;">
                  <br/> 
                  <span style='color: gray;font-size: smaller;'>Advs are displayed by random carousel.</span>
                  <span style='color: #E01E5A;font-size: smaller;font-weight: bolder;float: right'>❤️<a href='/pages/fb599d/'>Become a sponsor</a></span>
                  <br/>
                </div>
                <div style="order: 100000;background-color:var(--borderColor);width:100%;height:1px;margin: 30px 0px 0px 0px;position:relative;">
                  <button style='border-radius: 100%;padding: 0;text-align: center;border: none;background-color: #ff3861;cursor: pointer;position: absolute;left: calc(50% - 15px);top: -15px;height: 30px;width: 30px;color: #fff;' onclick='document.getElementById("sidebar-slot-top").style.display="none"'>收</button>
                </div>
              </div>
              `

  return _html;
}