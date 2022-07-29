import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
input,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 0.0521vw;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  text-align:left;
  list-style: none;
  line-height:1.1;
  color:#232323;
}
input,
button,
select {
  outline: none;
  border: none;
} /* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  max-width: 100%;
}
span {
  font: inherit;
}

.inner{
  max-width:1200px;
  margin: 0 auto;
  padding: 0 10px;
}

.clearfix:before, .clearfix:after {
  display: block;
  content: '';
  line-height: 0;
}

.clearfix:after {
  clear:both;
}

.clearfix {
*zoom: 1;
}
.svg-inline--fa {
  height:14px;
  margin-right:6px;
}

.mgL20{
  margin-left:20px;
}

.mgL40{
  margin-left:40px;
}
.mgL60{
  margin-left:60px;
}
.mgL80{
  margin-left:80px;
}
.mgL100{
  margin-left:100px;
}
.mgL120{
  margin-left:120px;
}
.mgL140{
  margin-left:140px;
}
.mgL160{
  margin-left:160px;
}
.mgL180{
  margin-left:180px;
}

.mgL200{
  margin-left:200px;
}
.mgL220{
  margin-left:220px;
}
.mgL240{
  margin-left:240px;
}
.mgL260{
  margin-left:260px;
}
.mgL280{
  margin-left:280px;
}
.mgL300{
  margin-left:300px;
}
.mgL320{
  margin-left:320px;
}
.mgL340{
  margin-left:340px;
}
.mgL360{
  margin-left:360px;
}
.mgL380{
  margin-left:380px;
}
.mgL400{
  margin-left:400px;
}

@font-face {
  font-family: "DungGeunMo";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GangwonEdu_OTFBoldA";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "LAB디지털";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

`;
