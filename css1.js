
@font-face {
 	font-family: 'fsex300';
 	src: url(FSEX300.ttf);
        font-family: "fsex300", "Courier", monospace;
 }

    body {
	background-color:#000000;
        color: #FFFFFF;
        font-family: "fsex300", "Courier", monospace;
        margin:0;
	padding:0;
	height:100%;
    }

    .spacebg {
	width: 100%;
	height: 100%;
	background-repeat: repeat;
	position:fixed;
	top:0px;
	left:0px;
	background-image: url("space_bg.gif");
	will-change: transform, filter;
	z-index:-1;
	mix-blend-mode: screen;
    }

    .spacebg2 {
	width: 100%;
	height: 100%;
	background-repeat: repeat;
	position:fixed;
	top:0px;
	left:0px;
	background-image: url("space_bg2.gif");
	will-change: transform, filter;
	z-index:-2;
	mix-blend-mode: screen;
    }

@keyframes backgroundScroll {
0% {background-position:0px 0px; filter: opacity(100%);}
50% {background-position:0px -234px; filter: opacity(50%);}
100% {background-position: 0px -468px; filter: opacity(100%);}
}

@keyframes backgroundScroll2 {
0% {background-position:0px 0px; filter: opacity(50%);}
50% {background-position:0px -234px; filter: opacity(100%);}
100% {background-position: 0px -468px; filter: opacity(50%);}
}
    a {
        color: #00FFFF;
    }
    a:hover {
        color: #FF00FF;
    }
    a.nav:hover {
        color: #FF00FF;
        -webkit-animation: huecycle 2s linear infinite;
        animation: huecycle 2s linear infinite;
    }

    .main {
	margin:32px;
        width: 756px;
        font-size: 16px;
        line-height: 18px;
    }

    .tableheader{
	width:746px;
	padding:3px 8px 3px 2px;
	color:#000000;
	background-color:#00FFFF;
	position:relative;
	z-index:1;
text-align:right; 
    }

    div.update {
        width: 756px;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
    }
    table {
        border: 1px solid #00AAAA;
        box-shadow: 0px 0px 20px 5px #000000;
    }
    td, th {
        border: 1px solid #770077;
        background-image: url("cloudy.png");
        padding: 8px;
        text-align: justify;
    }
    @-webkit-keyframes huecycle {
        from {
            -webkit-filter: hue-rotate(0deg) saturate(200%);
            filter: hue-rotate(0deg) saturate(200%);
        }
        to {
            -webkit-filter: hue-rotate(360deg) saturate(200%);
            filter: hue-rotate(360deg) saturate(200%);
        }
    }
    @keyframes huecycle {
        from {
            -webkit-filter: hue-rotate(0deg) saturate(200%);
            filter: hue-rotate(0deg) saturate(200%);
        }
        to {
            -webkit-filter: hue-rotate(360deg) saturate(200%);
            filter: hue-rotate(360deg) saturate(200%);
        }
    }
    img.rainbow:hover {
        -webkit-animation: huecycle 2s linear infinite;
        animation: huecycle 2s linear infinite;
    }
    .imgbutton {
        border: 2px solid #00FFFF;
	-webkit-filter: brightness(75%) grayscale(100%) sepia(100%) hue-rotate(130deg) saturate(200%) contrast(1.5);
	filter: brightness(75%) grayscale(100%) sepia(100%) hue-rotate(130deg) saturate(200%) contrast(1.5);
	-webkit-transition: 0.5s;
	transition: 0.5s;
    }
    .imgbutton:hover {
        border: 2px solid transparent;
        border-image: url('thants.gif') 2 repeat;
	-webkit-filter: brightness(100%) grayscale(0%) sepia(0%) hue-rotate(360deg) saturate(100%) contrast(1);
	filter: brightness(100%) grayscale(0%) sepia(0%) hue-rotate(360deg) saturate(100%) contrast(1);
	-webkit-transition: 0.2s;
	transition: 0.2s;
    }
    .iframe:hover {
	height:333px;
        -webkit-transition: 0.3s cubic-bezier(0,0,0.02,1);
        transition: 0.3s cubic-bezier(0,0,0.02,1);
        position:absolute;
	border:2px solid #FF00FF;
	z-index:100;
	margin-top:-88px;
	box-shadow: 0px 0px 20px 5px #000000;
    }
    .iframe {
	height:38px;
        -webkit-transition: 0.2s cubic-bezier(0,0,0.02,1);
        transition: 0.2s cubic-bezier(0,0,0.02,1);
        position:absolute;
	float:right; 
	border:2px solid #00FFFF;
	margin-left:15px;
	margin-top:38px;
	z-index:100;
	box-shadow: 0px 0px 0px 0px #000000;
    }
    h4 {
        font-size: 10px;
        line-height: 8px;
    }
  