module.exports = [{"markdown":"##Sample Markdown\n\nThis is some basic, sample markdown.\n\nSome fundemental markdown features are working. Some don't. I will fix them later by using RegEx functions.\n\n###Issues\n\nOrdered lists, blockquotes and some other features are not working. Because during the converting process of this markdown post to hyperscript, whitespaces that surround special markdown syntax (such as bold chars \\*text\\*) [dissappear](https://stackoverflow.com/questions/15721373/how-do-i-ensure-that-whitespace-is-preserved-in-markdown). This results in **bold**, _italic text_, or links that are sticked to the words before and after them. \n\nAs a workaround, before converting this markdown, I replace all white space with the HTML entity for white space, the `nbsp` characters. \n\nHowever, since I am using bootstrap to add some simple styling to the page, long text in a narrow page does not get wrapped up and it goes on horizontally. Why does CSS fails to wrap the words correctly? Because there are no more white spaces! A CSS attribute such as `word-wrap:break-all` works fine, but it breaks in the middle of the word, which is not good.\n\nThis is why after converting the markdown to hyperscript, I replace the `nbsp ` characters back to good old white spaces. Apparently, this is breaking some of the markdown's native features... \n\nヾ( ￣O￣)ツ\n\nOkay... Here are some styles that are _not_ **broken**... A link [to duckduckgo](https://duckduckgo.com)\n\n* Most of the problems are fixed by regex.\n* And the rest will be fixed by regex\n* too...\n\n\nCode blocks, mathematical expressions and plotting functional graphs are classified as `special-functions`. So they are discussed in other posts. Search `features` tag to see all posts related to the content types of this website.\n\nA render from [blender.org](https://archive.blender.org)'s archive...\n\n![Calibri](https://archive.blender.org/typo3temp/pics/bee472a01f.jpg)\n\nThe end ...\n","title":"Markdown Rendering","tags":"markdown_rendering,features","url":"markdown_rendering","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"I am using [KaTeX](https://katex.org/) to render my mathematical functions.\n\n<<< hyperscript(`m('p',\t\n\t\t'an inline math expression, ', \n\t\tmath('x = oo'), \n\t\t' more inline text ', \n\t\t)`) >>> \n \nand a block math...\n\n<<< math(`sum_(i=1)^(n)i^3 = ((n(n+1))/2)^2`) >>> \\n\n\nand markdown continues here.\n","title":"KaTeX Example","tags":"katex,math,features","url":"katex_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"Here is a function plotted using some javascript and HTML canvas tags. \n\n<<< graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7') >>>\n\nThe syntax to render it is simple:\n\n<<< code(`graph(10, 2, 'x', '-x+10', '1/10*x**2', 'x**3', 'Math.sin(x)', 'Math.cos(x)', '-x', '-5', '-7')`) >>>\n\nMy aim in writing this little feature is to be able to plot functional graphs as fast as you would draw them by hand on paper. Still got lots to do...\n\nI took the starter code from [this javascripter.net post](http://www.javascripter.net/faq/plotafunctiongraph.htm)","title":"Plotting a function","tags":"plot_function example,features","url":"plot_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"To highlight code, I use [microlight](http://asvd.github.io/microlight/), Galaxy's simplest code highlighter.\n\n<<< code(`function readFile(file){\n  let isFileRead = false\n  let md_file = ''\n  while(!isFileRead){ // I don't know why, \\`on change\\` the file is not always read the first time...\n    md_file = fs.readFileSync(file, 'utf8')\n    if(md_file == ''){\n      console.log(\" ----------FILE NOT READ----------- \")\n      continue\n    }else{\n      console.log(' +++++++FILE READ+++++++++ ')\n      isFileRead = true\n    }\n  }\n  return md_file\n}\n`) >>>\n\nRendering an inline code is also quite straight forward, `(e)=>{console.log(e.target.value)}` will do it...\n\nThe end. Puummm.\n\nIf you have read it so far, you are a weird person. [Here are](https://media.giphy.com/media/9jDrxxBuV3TDW/giphy.gif) some potatos for you.\n\n","title":"Code highlighting","tags":"code_highlighting,microlight,features","url":"microlight_example","baseUrl":"FeaturesPage","date":"2019-01-31"},{"markdown":"It is always good to keep a collection of bookmarks in a safe place.\n\nThis post can be used as a note taking place to keep a memory on the good resources about Blender 3D.\n\n- An archived list of &nbsp; [blender user communities](https://archive.blender.org/community/user-community/index.html). This list may be outdated but most of the forums are still active today.\n- [API Blender 2.64](https://docs.blender.org/api/blender_python_api_2_64_release/). It may seem to be not relevant anymore, but it includes important timeless practices.\n- [API Blender 2.59](https://docs.blender.org/api/blender_python_api_2_59_release/)\n- [API Blender 2.49](https://archive.blender.org/documentation/249PythonDoc.html)\n- [API Blender 2.79](https://docs.blender.org/api/2.79b/)\n- [Blender 2.6 Code Documentation](https://en.blender.org/index.php/Dev:Source/Architecture)\n- [Current Code Documentation (2.8)](https://wiki.blender.org/wiki/Main_Page)\n- [Blender SVN](https://svn.blender.org/svnroot/bf-blender/)\n- [Blender Demo Page.](https://download.blender.org/demo/). An interesting place.\n- [Blender.org tutorials page (archive)](https://archive.blender.org/education-help/tutorials/index.html)\n- [Official Blender YoutubeChannel](https://www.youtube.com/user/BlenderFoundation)\n- [Modern Blender Docs](https://docs.blender.org/)\n- [Blender 2.6 Docs](https://en.blender.org/index.php/Doc:2.6/Tutorials), this page is one of the inconsumable and invaluable source of information.\n- [Blender 2.6 Manuals](https://en.blender.org/index.php/Doc:2.6/Manual)\n- [A parent page for the above two links](https://en.blender.org/index.php/Doc:2.6)\n- [Blender noob to pro](https://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro), lets admit, after using blender for 8 years, I am still a noob. Lets check that book out finally for gods' sake!\n- [Blender nation's tuts section](https://www.blendernation.com/category/education/tutorials/)\n- Some [nostalgic page](http://wiki.c2.com/?BlenderWiki) about blender \n- [reddit's blender wiki page](https://www.reddit.com/r/blender/wiki/index). This is a similar place to this page.\n- [a nice blender sculpting related youtube channel](https://www.youtube.com/channel/UCfjswDVU0XHyBN7UFG0Mi5Q)\n- [Armory 3D, Blender Game Engine](https://armory3d.org/)\n\n- [some misc content](http://www.cdschools.org/Page/455) -> check that website out but there is not much time to waste\n- [bio blender](http://www.bioblender.org/), molecular viz in blender.\n- [making clouds in blender](https://blenderartists.org/t/procedural-cloudscape-generation-in-cycles-now-eevee/694700)\n- [BlenderHD.com](https://www.blenderhd.com/tutorials/)\n- [CreativeSchrimp](https://www.creativeshrimp.com/tutorials)\n- [BlenderTuts](https://www.blendtuts.com/)\n- [A fun place to practice Blender](http://www.littlewebhut.com/blender/)\n- [Animation related tutorials](https://conceptartempire.com/blender-animation-tutorials/)\n- [Zacharias's](https://zachariasreinhardt.com/)\n- [CG meetup blender tutorials](http://www.cgmeetup.net/home/tutorials/blender/)\n- [borncg youtube channel](https://www.youtube.com/channel/UCdioEctcBLd2nw2aQkl8msw)\n- [katbits](https://www.katsbits.com/tutorials/)\n- [blender geo map creaing](https://somethingaboutmaps.wordpress.com/blender-relief-tutorial-the-plane/)\n","title":"Links About Blender 3D","tags":"blender3d,archive,links","url":"blender3d_archive","baseUrl":"blender3d","date":"2019-01-31"},{"markdown":"- [http://lhorie.github.io/mithril-blog/building-a-seinfeld-app.html](http://lhorie.github.io/mithril-blog/building-a-seinfeld-app.html)\n- [https://mithril.js.org/change-log.html#component-controller-function](https://mithril.js.org/change-log.html#component-controller-function)\n- [why-i-hate-your-single-page-app](https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134)\n- [https://roca-style.org/](https://roca-style.org/)","title":"Current Reading List on Mithril","tags":"reading_list,mithril","url":"current_reading_list_on_mithril","baseUrl":"","date":"2019-02-01"},{"markdown":"- [single-page-application-vs-multiple-page-application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)\n- [the-disadvantages-of-single-page-applications](https://adamsilver.io/articles/the-disadvantages-of-single-page-applications/)\n- [why-i-hate-your-single-page-app](https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134)\n- [https://roca-style.org/](https://roca-style.org/)\n- [single page app book](http://singlepageappbook.com/index.html)","title":"Reading list on SPAs","tags":"reading_list,SPAs","url":"reading_list_on_spas","baseUrl":"","date":"2019-02-01"},{"markdown":"here is an idea that struck to Niko on an evening of January… :\n\n<<< hyperscript(`m('img.tommy-niko-jasmin-hakki.img-fluid', {\n                      src: 'content/media/tommy-niko-jasmin-hakki.png', \n                      alt: 'tommy-niko-jasmin-hakki',\n                      //https://stackoverflow.com/a/51817813/6025059\n                      oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!\n                        let inception = new Date('January 17, 2019 22:10:00');\n                        let now = new Date();\n                        let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees\n                        setTimeout(()=>{vnode.dom.setAttribute(\"style\", \"transform: rotate(\" + deg + \"deg)\")},1000)\n                      }\n                    })    \n`) >>>\n\n\nThis picture will rotate clock-wise by .986 degree a day. For instance, in 365 days, it will appear without any orientation. As the picture rotates, each person will tell a date. Therefore, since the picture is taken on 17 January, Tommy corresponds to Winter, I to Spring, Jasmin to Summer and Niko to Autumn.\n\nA simple `new_Date()` output controls rotation of the image and that does the js trick.\n\n<<< code(`oncreate: (vnode)=>{ // use vnode not 'e'!!! AND USE ONLY MITHRILS LIFECYCLES METHODS!\n  let inception = new Date('January 17, 2019 22:10:00');\n  let now = new Date();\n  let deg = (360/365) * Math.floor((now-inception)/(1000*60*60*24)); // convert miliseconds to degrees\n  setTimeout(()=>{vnode.dom.setAttribute(\"style\", \"transform: rotate(\" + deg + \"deg)\")},1000)\n}\n`) >>>","title":"The Year Clock","tags":"the_year_clock","url":"the_year_clock","baseUrl":"","date":"2019-02-01"},{"markdown":"####Organisatorische\n\n- **Obligatorische Lehrbuch:**  Introduction to Statistics von Sheldon M Ross\n\n\n## 1. Studium von Verteilungen\n\n###Grundsaetzliches\n\nStatistik ist die Wissenschaft der Daten, es gint Kategorische und Numerische Daten. Alternative Bezeichnung wuerde Qualitative Daten und Quantitative oder metrische Daten.\n\n####Balken- und KreisDiagramm\n\nFuer kategorische Daten werden in der Regel Kreis oder BalkenDiagremme verwendet.\n#####Kreis-Diagramm:\n- Ein Stueck pro Kategorie \n- Groesse des Stueckes entspricht dem Prozentsatz der Kategorie\n#####Balken-Diagramm:\n- Ein Balken pro Kategorie\n- Hoehe des Balkens entspricht dem Prozentsatz der Kategorie\n\n ![Biespiel](https://screenshotscdn.firefoxusercontent.com/images/67190737-abd1-4f50-b382-bca93288db17.png) \n\n\n###Diagramme fuer Verteilungen\n(Kapitel 2 in Ross)\n\nFuer numerische Daten wird meistens ein **Histogram**  verwendet.\n- Das Interval, in dem sich alle Werte befinden, wird in gleichlange‘Klassen’ unterteilt\n- Dann wird ein Balken-Diagramm erstellt, wobei die Klassen dieRolle der verschiedenen Kategorien spielen\n- Die Anzahl der Klassen muss ‘vern ̈unftig’ gew ̈ahlt werden\n\nInformationen:\n- Allgemeine Form\n- Anzahl der 'Gipfel' (unimodal, bimodal, trimodal, . . . )\n- Symmetrisch oder links-/rechtsschief?\n- Lage (oder Zentrum) und Streuung (oder Variation)\n- Eventuelle Ausreisser\n\nUnser Gehirn ist nicht in der Lage, lange Listen individueller Datenpunkte sinnvoll zu interpretieren ⇒ Histogramm und/oder Kennzahlen erleichtern uns das Leben erheblich.\n","title":"Einfuehrung - Studium von Verteilungen - Statistik I","tags":"fs19,uzh,statistik_I","url":"einfuehrung_zur_statistik","baseUrl":"","date":"2019-02-19"},{"markdown":"One way to document the code writing literate code, which is a demanding task if done late.\n\nAnother more conventional alternative is writing the code according to the [style guidelines of the Google](https://google.github.io/styleguide/jsguide.html)\n\nAnd then adding [JSDoc](http://usejsdoc.org/) commenting syntax to the code to generate documentation pages.\n\nIt is a less hard-core approach to code documenting compared to [literate coding](https://en.wikipedia.org/wiki/Literate_programming).","title":"Documenting the code of this website","tags":"jsdoc,javascript,style_guide","url":"documenting_the_code_of_this_website","baseUrl":"","date":"2019-02-24"},{"markdown":"### Cok Yazi Yazmaliyim\n\nBu yazdigim bloga dair, eklemem gerekn bir ozellik daha var ki, yoklugu benim rahat yazi yazmami engelliyor. \n\nBen parca parca yazi yazmayi seviyorum. Bazen 5 dk yazi yazmak isterim, bzen saatlerce, bazense 27 saniye. Ancak bu blog hafizasinda sadece bir yaziyi tutabiliyor. Eger yazilmis bir md dosyasini editlemek istiyorsan onu bulmali, kopyalamali ve uygulamalisin. Bilincaltimda bu zahmeti dusundugum icin rahat yazi yazamiyor durumdaydim. \n\n#####Simdi, soyle bir ozellik eklenmeli:\n\nBu pencerenin hemen altinda, bir liste icerisinde su ana kadar yazilmis md dosyalarini gorebilelim. Bu liste icerisinde her hangi bir basliga tiklarsak, tum sayfa bu md dosyalarinin elemanlari ile doldurulsun!\n\n##### Eger bunu eklersem o zmaan bu blog gercek bir not defteri hissi verebilir!","title":"Cok yazmaliyim","tags":"onemlinotlar","url":"onemlinotlar","baseUrl":"geceler_zehir-geceler_kara","date":"2019-02-28"},{"markdown":"-    hrkucuk sictim ya\n-    hrkucuk ben af mi ettin?\n-    hrkucuk muhtesem bir oyuna geldim\n-    bruce544 nerede affetim\n-    hrkucuk hayatimin en ilginc oyununu oynadim\n-    bruce544 \"şüphesiz o bağışlayandır\"\n-    hrkucuk :ddddd\n-    bruce544 kaçıncı hamle\n-    hrkucuk Senin bu oyunun tanrisi biliriz\n-    hrkucuk 25. hamle\n-    bruce544 ne olabilirdi\n-    hrkucuk kalemi fil ile yiyebilirdin.\n-    bruce544 sonra=\n-    bruce544 ?\n-    hrkucuk Ama atini g3 almayi tercih ettin.\n-    bruce544 çünkü daha pis planlarım var\n-    bruce544 en önemli olayın bu zaten\n-    bruce544 unpredateybıl\n-    bruce544 olayım*\n-    hrkucuk senin olayini ben cozemedim\n-    hrkucuk seninle ugrasilmaz\n-    bruce544 nereden geleceğini asla anlamazsın\n-    bruce544 ctessi 2019 turnuvası var central eu nun\n-    hrkucuk bak bunlari da kopyala telegrama al istiyorsan, aha burada soyluyorum, bu adamla ugrasilmaz ya\n-    bruce544 bu sefer katılım daha fazla\n-    bruce544 cin çarpmışa döndürecem\n-    hrkucuk ciz aziz v 2019 central eu\n-    bruce544 kapatıyorum burayı\n-    hrkucuk kapat reiz","title":"Sohbet lichess","tags":"","url":"sohbet_lichess","baseUrl":"","date":"2019-02-28"},{"markdown":"\n- I need to make sure to sort all the generated posts according to their file name, rather than to sort them by their order of appearance in a folder (which is ordered by modification date). However, listing of tags should remain according to alphabetical order. Alas, it same with what I say previously!\n\n- Some simple markdown syntax are still not working. Indentify and fix them\n\n- Graphing functions needs improvements...\n\n- Graph functions simply do not support (afaic) vectoral drawings. Could it be enhances easily?\n\n- general code refactoring, documenting and simplifying go without saying...\n","title":"Ideas of improvement on this blog","tags":"this_blog,todos","url":"ideas_of_improvements_on_this_blog","baseUrl":"","date":"2019-03-01"},{"markdown":"- There is an interesting story on [William Vaughn](https://longform.org/posts/the-mastermind) worth reading.\n\n- [a website](https://longform.org/) of a string of interesting stories.\n\n","title":"Reading list on stories","tags":"to_read,reading_list","url":"reading_list_on_stories","baseUrl":"","date":"2019-03-01"},{"markdown":"\n [Wiki article](https://en.wikipedia.org/wiki/C_%28programming_language%29) to CLANG.\n\nThere are many things to learn in C language. Some of those are very crucial to learn and easy to forget, some of them are rarely used in small projects but must-be-learned. I must keep references to good resources on specific topics here to find them quickly:\n\n- to refresh my knowledge on [Preprocessors](https://www.techonthenet.com/c_language/directives/index.php), \n- to learn about the [pointers](https://www.tutorialspoint.com/cprogramming/c_pointers.htm)\n\n\n\nAnd below are things important enough to mention in my blog.\n\n#####A hello world example\n <<< code(`// gcc taskx.c -o bin/taskx && bin/taskx\n#include <stdio.h>\n\nint main() {\n  printf(\"Hello, World!\\\\n\");\n  return 0;\n}\n`) >>> \n\n#C - Strings\n\nThere are two ways to initialize a C String:\n\nYou can  create a list that ends with a **null**  character,\n <<< code(`char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};`) >>>\nor initialize a list with a string and C compiler will automatically include the **nul**  character there:\n <<< code(`char greeting[] = \"Hello\";`) >>> \n\nStrings are therefore iterables and can be accessed and modified with with a loop. However, once a list is created in C, its capacity cannot be modified. `Instead`, some special string operations must be used:\n <<< code(`#include <stdio.h>\n#include <string.h>\n\nint main () {\n\n   char str1[12] = \"Hello\";\n   char str2[12] = \"World\";\n   char str3[12];\n   int  len ;\n\n   /* copy str1 into str3 */\n   strcpy(str3, str1);\n   printf(\"strcpy( str3, str1) :  %s\\\\n\", str3 );\n\n   /* concatenates str1 and str2 */\n   strcat( str1, str2);\n   printf(\"strcat( str1, str2):   %s\\\\n\", str1 );\n\n   /* total lenghth of str1 after concatenation */\n   len = strlen(str1);\n   printf(\"strlen(str1) :  %d\\\\n\", len );\n\n   return 0;\n}`) >>> \n\n#Pointers\n\nThe first gotcha about pointers is that they could be used to create a deep copy of variables. This is useful when you pass a variable to a function as a argument and you don't want the original variable to be changed or you do want it to be changed. Example:\n\n <<< code(`#include <stdio.h>\n\nint main () {\n\n   int  var = 20;   /* actual variable declaration */\n   int  *ip;        /* pointer variable declaration */\n\n   ip = &var;  /* store address of var in pointer variable*/\n\n   printf(\"Address of var variable: %x\\\\n\", &var  );\n\n   /* address stored in pointer variable */\n   printf(\"Address stored in ip variable: %x\\\\n\", ip );\n\n   /* access the value using the pointer */\n   printf(\"Value of *ip variable: %d\\\\n\", *ip );\n\n   *ip = 30;\n   printf(\"Value of var variable: %d\\\\n\", var  );\n\n   return 0;\n}\n`) >>> \n\nThe last printf will give the value of `var` as a 30, even though `var` was not directly manipulated.\n","title":"Introduction to C","tags":"clang,tutorial","url":"introduction_to_c","baseUrl":"","date":"2019-03-02"}]