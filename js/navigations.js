var label = [
    "",
    "teal",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink"
]

var data = [
    {
        title: "博客",
        column: "five",
        num: 5,
        list: [
            {url: "https://garsonlab.github.io", title:"自己搭建的博客", display:"年华之上"},
            {url: "https://www.cnblogs.com/garsonlab/", title:"", display:"博客园"},
            {url: "https://garsonlab.github.io/PersonalNavigation/", title:"", display:"Navigation"},
            {url: "https://blog.csdn.net/cheng624", title:"", display:"CSDN"},
        ]
    },
    {
        title: "Unity",
        column: "five",
        num: 5,
        list: [
            {url: "http://www.manew.com/forum.php", title:"", display:"蛮牛论坛"},
            {url: "http://forum.unity3d.com/", title:"", display:"Unity论坛"},
            {url: "http://docs.unity3d.com/ScriptReference/", title:"", display:"ScriptingAPI"},
            {url: "http://www.ulua.org/index.html", title:"", display:"ULua"},
            {url: "https://bitbucket.org/Unity-Technologies", title:"", display:"UGUI源码"},
            {url: "http://www.fairygui.com/", title:"", display:"FairyGUI"},
            {url: "http://robertpenner.com/easing/easing_demo.html", title:"", display:"Tweeen轨迹"},
            {url: "http://gad.qq.com/", title:"", display:"腾讯Gad"},
            {url: "https://indienova.com/", title:"indienova独立游戏", display:"独立游戏"},
        ]
    },
    {
        title: "优博",
        column: "five",
        num: 5,
        list: [
            {url: "https://leetcode.com/", title:"力扣算法刷题", display:"LeetCode"},
            {url: "http://www.xuanyusong.com", title:"", display:"雨松MoMo"},
            {url: "http://blog.csdn.net/zhmxy555/article/category/2681301", title:"", display:"浅墨"},
            {url: "http://blog.csdn.net/qq992817263", title:"", display:"神码编程"},
            {url: "https://codeload.github.com/Sage-SQ/UGUI_knapsack/zip/master", title:"", display:"拾荒者"},
            {url: "http://blog.sina.com.cn/s/articlelist_2312702844_0_1.html", title:"", display:"潜水的小懒猫"},
            {url: "http://blog.csdn.net/stalendp/article/category/1628145", title:"", display:"stalenShader"},
            {url: "http://codingnow.com/", title:"", display:"云风的Blog"},
            {url: "http://www.ruanyifeng.com/home.html", title:"", display:"阮一峰"},
            {url: "https://www.liaoxuefeng.com/", title:"", display:"廖雪峰"},
        ]
    },
    {
        title: "项目",
        column: "four",
        num: 4,
        list: [
            {url: "https://github.com/Unity-Technologies", title:"Unity官方Github", display:"Unity Technologies"},
            {url: "https://github.com/Microsoft", title:"微软官方Github", display:"Microsoft"},
            {url: "https://github.com/fairygui", title:"多平台UI解决方案", display:"Fairy GUI"},
            {url: "https://github.com/EmmyLua", title:"Lua 调试工具", display:"Emmy Lua"},
        ]
    },
    {
        title: "教材",
        column: "four",
        num: 4,
        list: [
            {url: "https://github.com/Werido/free-programming-books/blob/master/free-programming-books-zh.md", title:"", display:"免费编程书籍"},
            {url: "https://docs.microsoft.com/zh-cn/dotnet/csharp/tutorials/intro-to-csharp/", title:"", display:"msdn C# 教程"},
            {url: "https://en.wikibooks.org/wiki/Cg_Programming/Unity", title:"", display:"Cg Programming"},
            {url: "https://referencesource.microsoft.com/#mscorlib/system/collections/generic/dictionary.cs,d3599058f8d79be0", title:"", display:"dot net源码"},
            {url: "https://learnopengl-cn.github.io/intro/", title:"", display:"Open GL"},
        ]
    },
    {
        title: "工具",
        column: "four",
        num: 4,
        list: [
            {url: "https://www.easyicon.net/", title:"", display:"小图标"},
            {url: "https://online2pdf.com/oxps-to-pdf", title:"", display:"oxps-to-pdf"},
            {url: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24", title:"", display:"正则表达式可视化"},
            {url: "https://www.json.cn/", title:"", display:"Json解析"},
            {url: "https://greasyfork.org/zh-CN", title:"Chrome插件脚本", display:"Greasy Fork"},
            {url: "http://www.u77.com/game/9011?tdsourcetag=s_pctim_aiomsg", title:"U77末日危机", display:"末日危机2"},
        ]
    },
    {
        title: "资讯",
        column: "five",
        num: 5,
        list: [
            {url: "https://weibo.com/", title:"", display:"微博"},
            {url: "https://www.zhihu.com/", title:"", display:"知乎"},
            {url: "https://www.taptap.com/", title:"", display:"Taptap"},
            {url: "http://www.9game.cn/", title:"", display:"九游"},
            {url: "https://www.gameres.com/", title:"", display:"游资网"},
            {url: "http://www.yixieshi.com/", title:"互联网的一些事", display:"一些事"},
            {url: "https://www.oschina.net/", title:"", display:"开源中国"},
            {url: "https://36kr.com/", title:"", display:"36氪"},
            {url: "https://www.freebuf.com/", title:"", display:"FreeBuf"},
        ]
    },
    {
        title: "前端",
        column: "four",
        num: 4,
        list: [
            {url: "https://semantic-ui.com/", title:"", display:"semantic-ui"},
            {url: "https://github.com/chenjd/node123", title:"", display:"node123"},
            {url: "https://github.com/jekyll/jekyll/wiki/Sites", title:"", display:"Jekyll"},
        ]
    },
    {
        title: "文章",
        column: "two",
        num: 2,
        list: [
            {url: "https://easyhook.github.io/tutorials.html", title:"注入程序", display:"Easy Hook"},
            {url: "https://github.com/chenjd/UsefulWeb", title:"", display:"chenjd/UsefulWeb"},
            {url: "https://github.com/antlr/antlr4", title:"DSL自定义语言解析工具", display:"Antlr4"},
            {url: "https://github.com/Elringus/SpriteGlow", title:"图片外发光效果", display:"SpriteGlow"},
        ]
    },
]



function loadNavigation() {
    var content = "";

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        content += '<tr><td class="collapsing"><a class="ui ';
        content += label[i%label.length];
        content += ' tag label">';
        content += element.title;
        content += '</a></td><td><div class="ui grid">';

        var d = '<div class="doubling '+ element.column +' column row">'

        const list = element.list
        let idx = 1;
        list.forEach(e => {
            if (idx === 1) {
                content += d;
            }
            content += '<div class="column"><a class="customsite" href="'+ e.url + '" target="_blank" title="'+ e.title + '"> '+ e.display+' </a></div>'
            
            if (idx == element.num) {
                content += "</div>";
                idx = 1;
            }else {
                idx += 1;
            }
        });

        if (idx <= element.num) {
            // for (let m = idx; m <= element.num; m++) {
            //     content += '<div class="column"></div>';
            // }
            content += '</div>';
        }

        content += '</div></td></tr>';
                
        // <tr>
        //     <td class="collapsing"><a class="ui tag label">Blog</a></td>
        //     <td>
        //         <div class="ui grid">
        //             <div class="doubling five column row">
        //                 <div class="column"><a class="customsite" href="https://baidu.com" target="_blank" title=""> 百度 </a></div>
        //                 <div class="column"><a class="customsite" href="https://baidu.com" target="_blank" title=""> 百度 </a></div>
        //                 <div class="column"><a class="customsite" href="https://baidu.com" target="_blank" title=""> 百度 </a></div>
        //                 <div class="column"><a class="customsite" href="https://baidu.com" target="_blank" title=""> 百度 </a></div>
        //                 <div class="column"><a class="customsite" href="https://baidu.com" target="_blank" title=""> 百度 </a></div>
        //             </div>
        //         </div>
        //     </td>
        // </tr>
    }

    document.getElementById("navigations").innerHTML = content;
}

loadNavigation();
