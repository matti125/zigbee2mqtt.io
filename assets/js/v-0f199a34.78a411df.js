"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67300],{317949:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-0f199a34","path":"/devices/TS0601_dimmer_2.html","title":"TuYa TS0601_dimmer_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_dimmer_2 control via MQTT","description":"Integrate your TuYa TS0601_dimmer_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-11-01T16:06:49.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light (l1 endpoint)","slug":"light-l1-endpoint","link":"#light-l1-endpoint","children":[]},{"level":3,"title":"Light (l2 endpoint)","slug":"light-l2-endpoint","link":"#light-l2-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l1 endpoint)","slug":"countdown-numeric-l1-endpoint","link":"#countdown-numeric-l1-endpoint","children":[]},{"level":3,"title":"Countdown (numeric, l2 endpoint)","slug":"countdown-numeric-l2-endpoint","link":"#countdown-numeric-l2-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1675603525000},"filePathRelative":"devices/TS0601_dimmer_2.md"}')},187739:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var d=o(166252);const i=(0,d._)("h1",{id:"tuya-ts0601-dimmer-2",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#tuya-ts0601-dimmer-2","aria-hidden":"true"},"#"),(0,d.Uk)(" TuYa TS0601_dimmer_2")],-1),n=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"TS0601_dimmer_2")],-1),a=(0,d._)("td",null,"Vendor",-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"2 gang smart dimmer")],-1),c=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"light (state, brightness, min_brightness, max_brightness), countdown, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_dimmer_2.jpg",alt:"TuYa TS0601_dimmer_2"})])],-1),r=(0,d._)("tr",null,[(0,d._)("td",null,"White-label"),(0,d._)("td",null,"Moes ZS-EUD_2gang")],-1),h=(0,d.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l1-endpoint" aria-hidden="true">#</a> Light (l1 endpoint)</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l1&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l1&quot;: &quot;&quot;}</code>.</li></ul><h3 id="light-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#light-l2-endpoint" aria-hidden="true">#</a> Light (l2 endpoint)</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>, <code>max_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l2&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l2&quot;: &quot;&quot;}</code>.</li></ul><h3 id="countdown-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l1-endpoint" aria-hidden="true">#</a> Countdown (numeric, l1 endpoint)</h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="countdown-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#countdown-numeric-l2-endpoint" aria-hidden="true">#</a> Countdown (numeric, l2 endpoint)</h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_l2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),m={},p=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[n,(0,d._)("tbody",null,[l,(0,d._)("tr",null,[a,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,d.w5)((()=>[(0,d.Uk)("TuYa")])),_:1})])]),s,c,u,r])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);