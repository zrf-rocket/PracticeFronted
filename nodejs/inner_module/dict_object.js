const productList = {
  atdp: "高级威胁侦测与防护系统",
  tip: "网络安全威胁情报与知识库管理系统",
  seccm: "安全配置管理（SecCM）系统",
  vulscan: "数字化资产脆弱性评估与漏洞扫描系统",
  edr: "终端威胁侦测与响应系统（EDR）",
  ndr: "网络威胁侦测与响应系统（NDR）",
  dbas: "数据库审计系统",
  waf: "Web应用程序防护（WAF）系统",
  soar: "安全编排与自动化响应（SOAR）系统",
  sdl: "代码安全审计系统（S-SDLC）",
  sscs: "软件供应链安全",
  apisec: "API安全管理系统",
  seccicd: "DevSecOps平台（CI/CD）",
  iot_siem: "工业企业信息安全事件和报警管理系统（SIEM）",
  siem: "信息安全事件和报警管理系统（SIEM）",
  dps: "数据保护系统（DPS）",
  iot_dps: "数控机床行业版数据保护系统（DPS）",
  soc: "网络安全运营中心（SOC）",
  xdr: "扩展威胁侦测与响应系统（XDR）",
  mdr: "托管威胁侦测与响应系统（MDR）",
  cdr: "云威胁侦测与响应系统（CDR）",
  mcp: "多云管理平台",
  ptsec: "网络安全渗透测试平台",
  sap: "网络安全态势感知平台",
  v2xsap: "车联网安全感知平台",
  iot_sap: "工业互联网安全态势感知平台",
  monitor: "告警监控平台",
  ert: "应急响应工具箱",
  sops: "自动化运维平台",

  title: ()=>{return productList.cdr},
  title2: Object.keys(productList)
};


//根据属性来获取值
console.log(productList.soc);
console.log(productList["soar"]);

console.log(productList["soars"]);   //undefined
// 如果不存在   则使用默认值
// console.log(productList["soars"]);


var keys = [];
var values = [];
// 对象循环遍历
for (var key in productList) {
    keys.push(key);
    values.push(productList[key]);
}
console.log(keys);
console.log(values);

// 使用eval 根据字符串获取对象的值
console.log(eval("productList." + "cdr"));
