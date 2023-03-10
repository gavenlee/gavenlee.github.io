var now1 = new Date();

function createtime1() {
    var grt = new Date("03/01/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到GavenLee😈的Blog!`,
        `Love me free, package year discount!🐅`,
        `
        
                                                                                                                                                                
                                                                                                                                                                
        GGGGGGGGGGGGG                                                                           LLLLLLLLLLL                                                     
     GGG::::::::::::G                                                                           L:::::::::L                                                     
   GG:::::::::::::::G                                                                           L:::::::::L                                                     
  G:::::GGGGGGGG::::G                                                                           LL:::::::LL                                                     
 G:::::G       GGGGGG  aaaaaaaaaaaaavvvvvvv           vvvvvvv eeeeeeeeeeee    nnnn  nnnnnnnn      L:::::L                   eeeeeeeeeeee        eeeeeeeeeeee    
G:::::G                a::::::::::::av:::::v         v:::::vee::::::::::::ee  n:::nn::::::::nn    L:::::L                 ee::::::::::::ee    ee::::::::::::ee  
G:::::G                aaaaaaaaa:::::av:::::v       v:::::ve::::::eeeee:::::een::::::::::::::nn   L:::::L                e::::::eeeee:::::ee e::::::eeeee:::::ee
G:::::G    GGGGGGGGGG           a::::a v:::::v     v:::::ve::::::e     e:::::enn:::::::::::::::n  L:::::L               e::::::e     e:::::ee::::::e     e:::::e
G:::::G    G::::::::G    aaaaaaa:::::a  v:::::v   v:::::v e:::::::eeeee::::::e  n:::::nnnn:::::n  L:::::L               e:::::::eeeee::::::ee:::::::eeeee::::::e
G:::::G    GGGGG::::G  aa::::::::::::a   v:::::v v:::::v  e:::::::::::::::::e   n::::n    n::::n  L:::::L               e:::::::::::::::::e e:::::::::::::::::e 
G:::::G        G::::G a::::aaaa::::::a    v:::::v:::::v   e::::::eeeeeeeeeee    n::::n    n::::n  L:::::L               e::::::eeeeeeeeeee  e::::::eeeeeeeeeee  
 G:::::G       G::::Ga::::a    a:::::a     v:::::::::v    e:::::::e             n::::n    n::::n  L:::::L         LLLLLLe:::::::e           e:::::::e           
  G:::::GGGGGGGG::::Ga::::a    a:::::a      v:::::::v     e::::::::e            n::::n    n::::nLL:::::::LLLLLLLLL:::::Le::::::::e          e::::::::e          
   GG:::::::::::::::Ga:::::aaaa::::::a       v:::::v       e::::::::eeeeeeee    n::::n    n::::nL::::::::::::::::::::::L e::::::::eeeeeeee   e::::::::eeeeeeee  
     GGG::::::GGG:::G a::::::::::aa:::a       v:::v         ee:::::::::::::e    n::::n    n::::nL::::::::::::::::::::::L  ee:::::::::::::e    ee:::::::::::::e  
        GGGGGG   GGGG  aaaaaaaaaa  aaaa        vvv            eeeeeeeeeeeeee    nnnnnn    nnnnnnLLLLLLLLLLLLLLLLLLLLLLLL    eeeeeeeeeeeeee      eeeeeeeeeeeeee  
                                             
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By GavenLee",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by GavenLee %c 你正在尝试潜伏进入😈GavenLee😈的Blog的核心位置🥸!",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };