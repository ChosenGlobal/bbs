;
(function (factory) {
    "use strict";
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        module.exports = factory
    } else if (typeof define === "function") {
        if (define.amd) {
        } else {
            define(["jquery"], factory)
        }
    } else {
        window.editormd = factory()
    }
}(function () {
    "use strict";
    var $ = (typeof(jQuery) !== "undefined") ? jQuery : Zepto;
    if (typeof($) === "undefined") {
        return
    }
    var editormd = function (id, options) {
        return new editormd.fn.init(id, options)
    };
    editormd.title = editormd.$name = "Editor.md";
    editormd.version = "1.4.5";
    editormd.homePage = "https://pandao.github.io/editor.md/";
    editormd.classPrefix = "editormd-";
    editormd.toolbarModes = {
        full: ["undo", "redo", "|", "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "link", "reference-link", "image", "code", "preformatted-text", "code-block", "table", "datetime", "emoji", "html-entities", "pagebreak", "|", "goto-line", "watch", "preview", "fullscreen", "clear", "search", "|", "help", "info"],
        simple: ["undo", "redo", "|", "bold", "del", "italic", "quote", "uppercase", "lowercase", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "watch", "preview", "fullscreen", "|", "help", "info"],
        mini: ["undo", "redo", "|", "watch", "preview", "|", "help", "info"],
        jfbbs: ["bold", "del", "italic", "quote", "|", "h1", "h2", "h3", "h4", "h5", "h6", "|", "list-ul", "list-ol", "hr", "|", "link", "image", "code-block", "table", "|", "watch", "fullscreen", "clear", "|", "info"]
    };
    editormd.defaults = {
        mode: "gfm",
        theme: "default",
        name: "",
        value: "",
        markdown: "",
        appendMarkdown: "",
        width: "100%",
        height: "100%",
        path: "/static/editor_md/lib/",
        pluginPath: "/static/editor_md/plugins/",
        delay: 300,
        autoLoadModules: true,
        watch: true,
        placeholder: "Enjoy Markdown! coding now...",
        gotoLine: true,
        codeFold: false,
        autoHeight: false,
        autoFocus: true,
        autoCloseTags: true,
        searchReplace: true,
        syncScrolling: true,
        readOnly: false,
        tabSize: 4,
        indentUnit: 4,
        lineNumbers: true,
        lineWrapping: true,
        autoCloseBrackets: true,
        showTrailingSpace: true,
        matchBrackets: true,
        indentWithTabs: true,
        styleSelectedText: true,
        matchWordHighlight: true,
        styleActiveLine: true,
        dialogLockScreen: true,
        dialogShowMask: true,
        dialogDraggable: true,
        dialogMaskBgColor: "#fff",
        dialogMaskOpacity: 0.1,
        fontSize: "14px",
        saveHTMLToTextarea: false,
        disabledKeyMaps: [],
        onload: function () {
        },
        onresize: function () {
        },
        onchange: function () {
        },
        onwatch: null,
        onunwatch: null,
        onpreviewing: function () {
        },
        onpreviewed: function () {
        },
        onfullscreen: function () {
        },
        onfullscreenExit: function () {
        },
        onscroll: function () {
        },
        onpreviewscroll: function () {
        },
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "http://你的域名/qiniuupload/",
        crossDomainUpload: false,
        uploadCallbackURL: "",
        toc: true,
        tocm: true,
        tocTitle: "",
        tocDropdown: false,
        tocContainer: "",
        tocStartLevel: 1,
        htmlDecode: false,
        pageBreak: true,
        atLink: false,
        emailLink: true,
        taskList: true,
        emoji: false,
        tex: false,
        flowChart: false,
        sequenceDiagram: false,
        previewCodeHighlight: true,
        toolbar: true,
        toolbarAutoFixed: true,
        toolbarIcons: "jfbbs",
        toolbarTitles: {},
        toolbarHandlers: {
            ucwords: function () {
                return editormd.toolbarHandlers.ucwords
            }, lowercase: function () {
                return editormd.toolbarHandlers.lowercase
            }
        },
        toolbarCustomIcons: {
            lowercase: "<a href=\"javascript:;\" title=\"Lowercase\" unselectable=\"on\"><i class=\"fa\" name=\"lowercase\" style=\"font-size:24px;margin-top: -10px;\">a</i></a>",
            "ucwords": "<a href=\"javascript:;\" title=\"ucwords\" unselectable=\"on\"><i class=\"fa\" name=\"ucwords\" style=\"font-size:20px;margin-top: -3px;\">Aa</i></a>"
        },
        toolbarIconsClass: {
            undo: "fa-undo",
            redo: "fa-repeat",
            bold: "fa-bold",
            del: "fa-strikethrough",
            italic: "fa-italic",
            quote: "fa-quote-left",
            uppercase: "fa-font",
            h1: editormd.classPrefix + "bold",
            h2: editormd.classPrefix + "bold",
            h3: editormd.classPrefix + "bold",
            h4: editormd.classPrefix + "bold",
            h5: editormd.classPrefix + "bold",
            h6: editormd.classPrefix + "bold",
            "list-ul": "fa-list-ul",
            "list-ol": "fa-list-ol",
            hr: "fa-minus",
            link: "fa-link",
            "reference-link": "fa-anchor",
            image: "fa-picture-o",
            code: "fa-code",
            "preformatted-text": "fa-file-code-o",
            "code-block": "fa-file-code-o",
            table: "fa-table",
            datetime: "fa-clock-o",
            emoji: "fa-smile-o",
            "html-entities": "fa-copyright",
            pagebreak: "fa-newspaper-o",
            "goto-line": "fa-terminal",
            watch: "fa-eye-slash",
            unwatch: "fa-eye",
            preview: "fa-desktop",
            search: "fa-search",
            fullscreen: "fa-arrows-alt",
            clear: "fa-eraser",
            help: "fa-question-circle",
            info: "fa-info-circle"
        },
        toolbarIconTexts: {},
        lang: {
            name: "zh-cn",
            description: "开源在线Markdown编辑器<br/>Open source online Markdown editor.",
            tocTitle: "目录",
            toolbar: {
                undo: "撤销（Ctrl+Z）",
                redo: "重做（Ctrl+Y）",
                bold: "粗体",
                del: "删除线",
                italic: "斜体",
                quote: "引用",
                ucwords: "将每个单词首字母转成大写",
                uppercase: "将所选转换成大写",
                lowercase: "将所选转换成小写",
                h1: "标题1",
                h2: "标题2",
                h3: "标题3",
                h4: "标题4",
                h5: "标题5",
                h6: "标题6",
                "list-ul": "无序列表",
                "list-ol": "有序列表",
                hr: "横线",
                link: "链接",
                "reference-link": "引用链接",
                image: "添加图片",
                code: "行内代码",
                "preformatted-text": "预格式文本 / 代码块（缩进风格）",
                "code-block": "代码块（多语言风格）",
                table: "添加表格",
                datetime: "日期时间",
                emoji: "Emoji表情",
                "html-entities": "HTML实体字符",
                pagebreak: "插入分页符",
                "goto-line": "跳转到行",
                watch: "关闭实时预览",
                unwatch: "开启实时预览",
                preview: "全窗口预览HTML（按 Shift + ESC还原）",
                fullscreen: "全屏（按ESC还原）",
                clear: "清空",
                search: "搜索",
                help: "使用帮助",
                info: "关于" + editormd.title
            },
            buttons: {enter: "确定", cancel: "取消", close: "关闭"},
            dialog: {
                link: {title: "添加链接", url: "链接地址", urlTitle: "链接标题", urlEmpty: "错误：请填写链接地址。"},
                referenceLink: {
                    title: "添加引用链接",
                    name: "引用名称",
                    url: "链接地址",
                    urlId: "链接ID",
                    urlTitle: "链接标题",
                    nameEmpty: "错误：引用链接的名称不能为空。",
                    idEmpty: "错误：请填写引用链接的ID。",
                    urlEmpty: "错误：请填写引用链接的URL地址。"
                },
                image: {
                    title: "添加图片",
                    url: "图片地址",
                    link: "图片链接",
                    alt: "图片描述",
                    uploadButton: "本地上传",
                    imageURLEmpty: "错误：图片地址不能为空。",
                    uploadFileEmpty: "错误：上传的图片不能为空。",
                    formatNotAllowed: "错误：只允许上传图片文件，允许上传的图片文件格式有："
                },
                preformattedText: {title: "添加预格式文本或代码块", emptyAlert: "错误：请填写预格式文本或代码的内容。"},
                codeBlock: {
                    title: "添加代码块",
                    selectLabel: "代码语言：",
                    selectDefaultText: "请选择代码语言",
                    otherLanguage: "其他语言",
                    unselectedLanguageAlert: "错误：请选择代码所属的语言类型。",
                    codeEmptyAlert: "错误：请填写代码内容。"
                },
                htmlEntities: {title: "HTML 实体字符"},
                help: {title: "使用帮助"}
            }
        }
    };
    editormd.classNames = {tex: editormd.classPrefix + "tex"};
    editormd.dialogZindex = 99999;
    editormd.$katex = null;
    editormd.$marked = null;
    editormd.$CodeMirror = null;
    editormd.$prettyPrint = null;
    var timer, flowchartTimer;
    editormd.prototype = editormd.fn = {
        state: {watching: false, loaded: false, preview: false, fullscreen: false},
        init: function (id, options) {
            options = options || {};
            if (typeof id === "object") {
                options = id
            }
            var _this = this;
            var classPrefix = this.classPrefix = editormd.classPrefix;
            var settings = this.settings = $.extend(true, editormd.defaults, options);
            //todo
            settings.path = "/bbs" + settings.path;
            id = (typeof id === "object") ? settings.id : id;
            var editor = this.editor = $("#" + id);
            this.id = id;
            this.lang = settings.lang;
            var classNames = this.classNames = {
                textarea: {
                    html: classPrefix + "html-textarea",
                    markdown: classPrefix + "markdown-textarea"
                }
            };
            settings.pluginPath = (settings.pluginPath === "") ? settings.path + "../plugins/" : settings.pluginPath;
            this.state.watching = (settings.watch) ? true : false;
            if (!editor.hasClass("editormd")) {
                editor.addClass("editormd")
            }
            editor.css({
                width: (typeof settings.width === "number") ? settings.width + "px" : settings.width,
                height: (typeof settings.height === "number") ? settings.height + "px" : settings.height
            });
            if (settings.autoHeight) {
                editor.css("height", "auto")
            }
            var markdownTextarea = this.markdownTextarea = editor.children("textarea");
            if (markdownTextarea.length < 1) {
                editor.append("<textarea></textarea>");
                markdownTextarea = this.markdownTextarea = editor.children("textarea")
            }
            markdownTextarea.addClass(classNames.textarea.markdown).attr("placeholder", settings.placeholder);
            if (typeof markdownTextarea.attr("name") === "undefined" || markdownTextarea.attr("name") === "") {
                markdownTextarea.attr("name", (settings.name !== "") ? settings.name : id + "-markdown-doc")
            }
            var appendElements = [(!settings.readOnly) ? "<a href=\"javascript:;\" class=\"fa fa-close " + classPrefix + "preview-close-btn\"></a>" : "", ((settings.saveHTMLToTextarea) ? "<textarea class=\"" + classNames.textarea.html + "\" name=\"" + id + "-html-code\"></textarea>" : ""), "<div class=\"" + classPrefix + "preview\"><div class=\"markdown-body " + classPrefix + "preview-container\"></div></div>", "<div class=\"" + classPrefix + "container-mask\" style=\"display:block;\"></div>", "<div class=\"" + classPrefix + "mask\"></div>"].join("\n");
            editor.append(appendElements).addClass(classPrefix + "vertical");
            this.mask = editor.children("." + classPrefix + "mask");
            this.containerMask = editor.children("." + classPrefix + "container-mask");
            if (settings.markdown !== "") {
                markdownTextarea.val(settings.markdown)
            }
            if (settings.appendMarkdown !== "") {
                markdownTextarea.val(markdownTextarea.val() + settings.appendMarkdown)
            }
            this.htmlTextarea = editor.children("." + classNames.textarea.html);
            this.preview = editor.children("." + classPrefix + "preview");
            this.previewContainer = this.preview.children("." + classPrefix + "preview-container");
            if (typeof define === "function" && define.amd) {
                if (typeof katex !== "undefined") {
                    editormd.$katex = katex
                }
                if (settings.searchReplace && !settings.readOnly) {
                    editormd.loadCSS(settings.path + "codemirror/addon/dialog/dialog");
                    editormd.loadCSS(settings.path + "codemirror/addon/search/matchesonscrollbar")
                }
            }
            if ((typeof define === "function" && define.amd) || !settings.autoLoadModules) {
                if (typeof CodeMirror !== "undefined") {
                    editormd.$CodeMirror = CodeMirror
                }
                if (typeof marked !== "undefined") {
                    editormd.$marked = marked
                }
                this.setCodeMirror().setToolbar().loadedDisplay()
            } else {
                this.loadQueues()
            }
            return this
        },
        loadQueues: function () {
            var _this = this;
            var settings = this.settings;
            var loadPath = settings.path;
            var loadFlowChartOrSequenceDiagram = function () {
                if (editormd.isIE8) {
                    _this.loadedDisplay();
                    return
                }
                if (settings.flowChart || settings.sequenceDiagram) {
                    editormd.loadScript(loadPath + "raphael.min", function () {
                        editormd.loadScript(loadPath + "underscore.min", function () {
                            if (!settings.flowChart && settings.sequenceDiagram) {
                                editormd.loadScript(loadPath + "sequence-diagram.min", function () {
                                    _this.loadedDisplay()
                                })
                            } else if (settings.flowChart && !settings.sequenceDiagram) {
                                editormd.loadScript(loadPath + "flowchart.min", function () {
                                    editormd.loadScript(loadPath + "jquery.flowchart.min", function () {
                                        _this.loadedDisplay()
                                    })
                                })
                            } else if (settings.flowChart && settings.sequenceDiagram) {
                                editormd.loadScript(loadPath + "flowchart.min", function () {
                                    editormd.loadScript(loadPath + "jquery.flowchart.min", function () {
                                        editormd.loadScript(loadPath + "sequence-diagram.min", function () {
                                            _this.loadedDisplay()
                                        })
                                    })
                                })
                            }
                        })
                    })
                } else {
                    _this.loadedDisplay()
                }
            };
            editormd.loadCSS(loadPath + "codemirror/codemirror.min");
            if (settings.searchReplace && !settings.readOnly) {
                editormd.loadCSS(loadPath + "codemirror/addon/dialog/dialog");
                editormd.loadCSS(loadPath + "codemirror/addon/search/matchesonscrollbar")
            }
            if (settings.codeFold) {
                editormd.loadCSS(loadPath + "codemirror/addon/fold/foldgutter")
            }
            editormd.loadScript(loadPath + "codemirror/codemirror.min", function () {
                editormd.$CodeMirror = CodeMirror;
                editormd.loadScript(loadPath + "codemirror/modes.min", function () {
                    editormd.loadScript(loadPath + "codemirror/addons.min", function () {
                        _this.setCodeMirror();
                        if (settings.mode !== "gfm" && settings.mode !== "markdown") {
                            _this.loadedDisplay();
                            return false
                        }
                        _this.setToolbar();
                        editormd.loadScript(loadPath + "marked.min", function () {
                            editormd.$marked = marked;
                            if (settings.previewCodeHighlight) {
                                editormd.loadScript(loadPath + "prettify.min", function () {
                                    loadFlowChartOrSequenceDiagram()
                                })
                            } else {
                                loadFlowChartOrSequenceDiagram()
                            }
                        })
                    })
                })
            });
            return this
        },
        setTheme: function (theme) {
            var settings = this.settings;
            settings.theme = theme;
            if (theme !== "default") {
                editormd.loadCSS(settings.path + "codemirror/theme/" + settings.theme)
            }
            this.cm.setOption("theme", theme);
            return this
        },
        setCodeMirror: function () {
            var settings = this.settings;
            var editor = this.editor;
            if (settings.theme !== "default") {
                editormd.loadCSS(settings.path + "codemirror/theme/" + settings.theme)
            }
            var codeMirrorConfig = {
                mode: settings.mode,
                theme: settings.theme,
                tabSize: settings.tabSize,
                dragDrop: false,
                autofocus: settings.autoFocus,
                autoCloseTags: settings.autoCloseTags,
                readOnly: (settings.readOnly) ? "nocursor" : false,
                indentUnit: settings.indentUnit,
                lineNumbers: settings.lineNumbers,
                lineWrapping: settings.lineWrapping,
                extraKeys: {
                    "Ctrl-Q": function (cm) {
                        cm.foldCode(cm.getCursor())
                    }
                },
                foldGutter: settings.codeFold,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: settings.matchBrackets,
                indentWithTabs: settings.indentWithTabs,
                styleActiveLine: settings.styleActiveLine,
                styleSelectedText: settings.styleSelectedText,
                autoCloseBrackets: settings.autoCloseBrackets,
                showTrailingSpace: settings.showTrailingSpace,
                highlightSelectionMatches: ((!settings.matchWordHighlight) ? false : {showToken: (settings.matchWordHighlight === "onselected") ? false : /\w/})
            };
            this.codeEditor = this.cm = editormd.$CodeMirror.fromTextArea(this.markdownTextarea[0], codeMirrorConfig);
            this.codeMirror = this.cmElement = editor.children(".CodeMirror");
            if (settings.value !== "") {
                this.cm.setValue(settings.value)
            }
            this.codeMirror.css({fontSize: settings.fontSize, width: (!settings.watch) ? "100%" : "50%"});
            if (settings.autoHeight) {
                this.codeMirror.css("height", "auto");
                this.cm.setOption("viewportMargin", Infinity)
            }
            return this
        },
        getCodeMirrorOption: function (key) {
            return this.cm.getOption(key)
        },
        setCodeMirrorOption: function (key, value) {
            this.cm.setOption(key, value);
            return this
        },
        addKeyMap: function (map, bottom) {
            this.cm.addKeyMap(map, bottom);
            return this
        },
        removeKeyMap: function (map) {
            this.cm.removeKeyMap(map);
            return this
        },
        gotoLine: function (line) {
            var settings = this.settings;
            if (!settings.gotoLine) {
                return this
            }
            var cm = this.cm;
            var editor = this.editor;
            var count = cm.lineCount();
            var preview = this.preview;
            if (typeof line === "string") {
                if (line === "last") {
                    line = count
                }
                if (line === "first") {
                    line = 1
                }
            }
            if (typeof line !== "number") {
                alert("Error: The line number must be an integer.");
                return this
            }
            line = parseInt(line) - 1;
            if (line > count) {
                alert("Error: The line number range 1-" + count);
                return this
            }
            cm.setCursor({line: line, ch: 0});
            var scrollInfo = cm.getScrollInfo();
            var clientHeight = scrollInfo.clientHeight;
            var coords = cm.charCoords({line: line, ch: 0}, "local");
            cm.scrollTo(null, (coords.top + coords.bottom - clientHeight) / 2);
            if (settings.watch) {
                var cmScroll = this.codeMirror.find(".CodeMirror-scroll")[0];
                var height = $(cmScroll).height();
                var scrollTop = cmScroll.scrollTop;
                var percent = (scrollTop / cmScroll.scrollHeight);
                if (scrollTop === 0) {
                    preview.scrollTop(0)
                } else if (scrollTop + height >= cmScroll.scrollHeight - 16) {
                    preview.scrollTop(preview[0].scrollHeight)
                } else {
                    preview.scrollTop(preview[0].scrollHeight * percent)
                }
            }
            cm.focus();
            return this
        },
        extend: function () {
            if (typeof arguments[1] !== "undefined") {
                if (typeof arguments[1] === "function") {
                    arguments[1] = $.proxy(arguments[1], this)
                }
                this[arguments[0]] = arguments[1]
            }
            if (typeof arguments[0] === "object" && typeof arguments[0].length === "undefined") {
                $.extend(true, this, arguments[0])
            }
            return this
        },
        set: function (key, value) {
            if (typeof value !== "undefined" && typeof value === "function") {
                value = $.proxy(value, this)
            }
            this[key] = value;
            return this
        },
        config: function (key, value) {
            var settings = this.settings;
            if (typeof key === "object") {
                settings = $.extend(true, settings, key)
            }
            if (typeof key === "string") {
                settings[key] = value
            }
            this.settings = settings;
            this.recreate();
            return this
        },
        on: function (eventType, callback) {
            var settings = this.settings;
            if (typeof settings["on" + eventType] !== "undefined") {
                settings["on" + eventType] = $.proxy(callback, this)
            }
            return this
        },
        off: function (eventType) {
            var settings = this.settings;
            if (typeof settings["on" + eventType] !== "undefined") {
                settings["on" + eventType] = function () {
                }
            }
            return this
        },
        showToolbar: function (callback) {
            var settings = this.settings;
            if (settings.readOnly) {
                return this
            }
            if (settings.toolbar && (this.toolbar.length < 1 || this.toolbar.find("." + this.classPrefix + "menu").html() === "")) {
                this.setToolbar()
            }
            settings.toolbar = true;
            this.toolbar.show();
            this.resize();
            $.proxy(callback || function () {
            }, this)();
            return this
        },
        hideToolbar: function (callback) {
            var settings = this.settings;
            settings.toolbar = false;
            this.toolbar.hide();
            this.resize();
            $.proxy(callback || function () {
            }, this)();
            return this
        },
        setToolbarAutoFixed: function (fixed) {
            var state = this.state;
            var editor = this.editor;
            var toolbar = this.toolbar;
            var settings = this.settings;
            if (typeof fixed !== "undefined") {
                settings.toolbarAutoFixed = fixed
            }
            var autoFixedHandle = function () {
                var $window = $(window);
                var top = $window.scrollTop();
                if (!settings.toolbarAutoFixed) {
                    return false
                }
                if (top - editor.offset().top > 10 && top < editor.height()) {
                    toolbar.css({
                        position: "fixed",
                        width: editor.width() + "px",
                        left: ($window.width() - editor.width()) / 2 + "px"
                    })
                } else {
                    toolbar.css({position: "absolute", width: "100%", left: 0})
                }
            };
            if (!state.fullscreen && !state.preview && settings.toolbar && settings.toolbarAutoFixed) {
                $(window).bind("scroll", autoFixedHandle)
            }
            return this
        },
        setToolbar: function () {
            var settings = this.settings;
            if (settings.readOnly) {
                return this
            }
            var editor = this.editor;
            var preview = this.preview;
            var classPrefix = this.classPrefix;
            var toolbar = this.toolbar = editor.children("." + classPrefix + "toolbar");
            if (settings.toolbar && toolbar.length < 1) {
                var toolbarHTML = "<div class=\"" + classPrefix + "toolbar\"><div class=\"" + classPrefix + "toolbar-container\"><ul class=\"" + classPrefix + "menu\"></ul></div></div>";
                editor.append(toolbarHTML);
                toolbar = this.toolbar = editor.children("." + classPrefix + "toolbar")
            }
            if (!settings.toolbar) {
                toolbar.hide();
                return this
            }
            toolbar.show();
            var icons = (typeof settings.toolbarIcons === "function") ? settings.toolbarIcons() : ((typeof settings.toolbarIcons === "string") ? editormd.toolbarModes[settings.toolbarIcons] : settings.toolbarIcons);
            var toolbarMenu = toolbar.find("." + this.classPrefix + "menu"), menu = "";
            var pullRight = false;
            for (var i = 0, len = icons.length; i < len; i++) {
                var name = icons[i];
                if (name === "||") {
                    pullRight = true
                } else if (name === "|") {
                    menu += "<li class=\"divider\" unselectable=\"on\">|</li>"
                } else {
                    var isHeader = (/h(\d)/.test(name));
                    var index = name;
                    if (name === "watch" && !settings.watch) {
                        index = "unwatch"
                    }
                    var title = settings.lang.toolbar[index];
                    var iconTexts = settings.toolbarIconTexts[index];
                    var iconClass = settings.toolbarIconsClass[index];
                    title = (typeof title === "undefined") ? "" : title;
                    iconTexts = (typeof iconTexts === "undefined") ? "" : iconTexts;
                    iconClass = (typeof iconClass === "undefined") ? "" : iconClass;
                    var menuItem = pullRight ? "<li class=\"pull-right\">" : "<li>";
                    if (typeof settings.toolbarCustomIcons[name] !== "undefined" && typeof settings.toolbarCustomIcons[name] !== "function") {
                        menuItem += settings.toolbarCustomIcons[name]
                    } else {
                        menuItem += "<a href=\"javascript:;\" title=\"" + title + "\" unselectable=\"on\">";
                        menuItem += "<i class=\"fa " + iconClass + "\" name=\"" + name + "\" unselectable=\"on\">" + ((isHeader) ? name.toUpperCase() : ((iconClass === "") ? iconTexts : "")) + "</i>";
                        menuItem += "</a>"
                    }
                    menuItem += "</li>";
                    menu = pullRight ? menuItem + menu : menu + menuItem
                }
            }
            toolbarMenu.html(menu);
            toolbarMenu.find("[title=\"Lowercase\"]").attr("title", settings.lang.toolbar.lowercase);
            toolbarMenu.find("[title=\"ucwords\"]").attr("title", settings.lang.toolbar.ucwords);
            this.setToolbarHandler();
            this.setToolbarAutoFixed();
            return this
        },
        dialogLockScreen: function () {
            $.proxy(editormd.dialogLockScreen, this)();
            return this
        },
        dialogShowMask: function (dialog) {
            $.proxy(editormd.dialogShowMask, this)(dialog);
            return this
        },
        getToolbarHandles: function (name) {
            var toolbarHandlers = this.toolbarHandlers = editormd.toolbarHandlers;
            return (name && typeof toolbarIconHandlers[name] !== "undefined") ? toolbarHandlers[name] : toolbarHandlers
        },
        setToolbarHandler: function () {
            var _this = this;
            var settings = this.settings;
            if (!settings.toolbar || settings.readOnly) {
                return this
            }
            var toolbar = this.toolbar;
            var cm = this.cm;
            var classPrefix = this.classPrefix;
            var toolbarIcons = this.toolbarIcons = toolbar.find("." + classPrefix + "menu > li > a");
            var toolbarIconHandlers = this.getToolbarHandles();
            toolbarIcons.bind(editormd.mouseOrTouch("click", "touchend"), function (event) {
                var icon = $(this).children(".fa");
                var name = icon.attr("name");
                var cursor = cm.getCursor();
                var selection = cm.getSelection();
                if (name === "") {
                    return
                }
                _this.activeIcon = icon;
                if (typeof toolbarIconHandlers[name] !== "undefined") {
                    $.proxy(toolbarIconHandlers[name], _this)(cm)
                } else {
                    if (typeof settings.toolbarHandlers[name] !== "undefined") {
                        $.proxy(settings.toolbarHandlers[name], _this)(cm, icon, cursor, selection)
                    }
                }
                if (name !== "link" && name !== "reference-link" && name !== "image" && name !== "code-block" && name !== "preformatted-text" && name !== "watch" && name !== "preview" && name !== "search" && name !== "fullscreen" && name !== "info") {
                    cm.focus()
                }
                return false
            });
            return this
        },
        createDialog: function (options) {
            return $.proxy(editormd.createDialog, this)(options)
        },
        createInfoDialog: function () {
            var _this = this;
            var editor = this.editor;
            var classPrefix = this.classPrefix;
            var infoDialogHTML = ["<div class=\"" + classPrefix + "dialog " + classPrefix + "dialog-info\" style=\"\">", "<div class=\"" + classPrefix + "dialog-container\">", "<h1><i class=\"editormd-logo editormd-logo-lg editormd-logo-color\"></i> " + editormd.title + "<small>v" + editormd.version + "</small></h1>", "<p>" + this.lang.description + "</p>", "<p style=\"margin: 10px 0 20px 0;\"><a href=\"" + editormd.homePage + "\" target=\"_blank\">" + editormd.homePage + " <i class=\"fa fa-external-link\"></i></a></p>", "<p style=\"font-size: 0.85em;\">Copyright &copy; 2015 <a href=\"https://github.com/pandao\" target=\"_blank\" class=\"hover-link\">Pandao</a>, The <a href=\"https://github.com/pandao/editor.md/blob/master/LICENSE\" target=\"_blank\" class=\"hover-link\">MIT</a> License.</p>", "</div>", "<a href=\"javascript:;\" class=\"fa fa-close " + classPrefix + "dialog-close\"></a>", "</div>"].join("\n");
            editor.append(infoDialogHTML);
            var infoDialog = this.infoDialog = editor.children("." + classPrefix + "dialog-info");
            infoDialog.find("." + classPrefix + "dialog-close").bind(editormd.mouseOrTouch("click", "touchend"), function () {
                _this.hideInfoDialog()
            });
            infoDialog.css("border", (editormd.isIE8) ? "1px solid #ddd" : "").css("z-index", editormd.dialogZindex).show();
            this.infoDialogPosition();
            return this
        },
        infoDialogPosition: function () {
            var infoDialog = this.infoDialog;
            var _infoDialogPosition = function () {
                infoDialog.css({
                    top: ($(window).height() - infoDialog.height()) / 2 + "px",
                    left: ($(window).width() - infoDialog.width()) / 2 + "px"
                })
            };
            _infoDialogPosition();
            $(window).resize(_infoDialogPosition);
            return this
        },
        showInfoDialog: function () {
            $("html,body").css("overflow-x", "hidden");
            var _this = this;
            var editor = this.editor;
            var settings = this.settings;
            var infoDialog = this.infoDialog = editor.children("." + this.classPrefix + "dialog-info");
            if (infoDialog.length < 1) {
                this.createInfoDialog()
            }
            this.lockScreen(true);
            this.mask.css({opacity: settings.dialogMaskOpacity, backgroundColor: settings.dialogMaskBgColor}).show();
            infoDialog.css("z-index", editormd.dialogZindex).show();
            this.infoDialogPosition();
            return this
        },
        hideInfoDialog: function () {
            $("html,body").css("overflow-x", "");
            this.infoDialog.hide();
            this.mask.hide();
            this.lockScreen(false);
            return this
        },
        lockScreen: function (lock) {
            editormd.lockScreen(lock);
            return this
        },
        recreate: function () {
            var _this = this;
            var editor = this.editor;
            var settings = this.settings;
            this.codeMirror.remove();
            this.setCodeMirror();
            if (!settings.readOnly) {
                if (editor.find(".editormd-dialog").length > 0) {
                    editor.find(".editormd-dialog").remove()
                }
                if (settings.toolbar) {
                    this.getToolbarHandles();
                    this.setToolbar()
                }
            }
            this.loadedDisplay(true);
            return this
        },
        previewCodeHighlight: function () {
            var settings = this.settings;
            var previewContainer = this.previewContainer;
            if (settings.previewCodeHighlight) {
                previewContainer.find("pre").addClass("prettyprint linenums");
                if (typeof prettyPrint !== "undefined") {
                    prettyPrint()
                }
            }
            return this
        },
        katexRender: function () {
            if (timer === null) {
                return this
            }
            this.previewContainer.find("." + editormd.classNames.tex).each(function () {
                var tex = $(this);
                editormd.$katex.render(tex.text(), tex[0])
            });
            return this
        },
        flowChartAndSequenceDiagramRender: function () {
            var settings = this.settings;
            var previewContainer = this.previewContainer;
            if (editormd.isIE8) {
                return this
            }
            if (settings.flowChart) {
                if (flowchartTimer === null) {
                    return this
                }
                previewContainer.find(".flowchart").flowChart()
            }
            if (settings.sequenceDiagram) {
                previewContainer.find(".sequence-diagram").sequenceDiagram({theme: "simple"})
            }
            return this
        },
        registerKeyMaps: function (keyMap) {
            var _this = this;
            var cm = this.cm;
            var settings = this.settings;
            var toolbarHandlers = editormd.toolbarHandlers;
            var disabledKeyMaps = settings.disabledKeyMaps;
            keyMap = keyMap || null;
            if (keyMap) {
                for (var i in keyMap) {
                    if ($.inArray(i, disabledKeyMaps) < 0) {
                        var map = {};
                        map[i] = keyMap[i];
                        cm.addKeyMap(keyMap)
                    }
                }
            } else {
                for (var k in editormd.keyMaps) {
                    var _keyMap = editormd.keyMaps[k];
                    var handle = (typeof _keyMap === "string") ? $.proxy(toolbarHandlers[_keyMap], _this) : $.proxy(_keyMap, _this);
                    if ($.inArray(k, ["F9", "F10", "F11"]) < 0 && $.inArray(k, disabledKeyMaps) < 0) {
                        var _map = {};
                        _map[k] = handle;
                        cm.addKeyMap(_map)
                    }
                }
                $(window).keydown(function (event) {
                    var keymaps = {"120": "F9", "121": "F10", "122": "F11"};
                    if ($.inArray(keymaps[event.keyCode], disabledKeyMaps) < 0) {
                        switch (event.keyCode) {
                            case 120:
                                $.proxy(toolbarHandlers["watch"], _this)();
                                return false;
                                break;
                            case 121:
                                $.proxy(toolbarHandlers["preview"], _this)();
                                return false;
                                break;
                            case 122:
                                $.proxy(toolbarHandlers["fullscreen"], _this)();
                                return false;
                                break;
                            default:
                                break
                        }
                    }
                })
            }
            return this
        },
        bindScrollEvent: function () {
            var _this = this;
            var preview = this.preview;
            var settings = this.settings;
            var codeMirror = this.codeMirror;
            var mouseOrTouch = editormd.mouseOrTouch;
            if (!settings.syncScrolling) {
                return this
            }
            var cmBindScroll = function () {
                codeMirror.find(".CodeMirror-scroll").bind(mouseOrTouch("scroll", "touchmove"), function (event) {
                    var height = $(this).height();
                    var scrollTop = $(this).scrollTop();
                    var percent = (scrollTop / $(this)[0].scrollHeight);
                    if (scrollTop === 0) {
                        preview.scrollTop(0)
                    } else if (scrollTop + height >= $(this)[0].scrollHeight - 16) {
                        preview.scrollTop(preview[0].scrollHeight)
                    } else {
                        preview.scrollTop(preview[0].scrollHeight * percent)
                    }
                    $.proxy(settings.onscroll, _this)(event)
                })
            };
            var cmUnbindScroll = function () {
                codeMirror.find(".CodeMirror-scroll").unbind(mouseOrTouch("scroll", "touchmove"))
            };
            var previewBindScroll = function () {
                preview.bind(mouseOrTouch("scroll", "touchmove"), function (event) {
                    var height = $(this).height();
                    var scrollTop = $(this).scrollTop();
                    var percent = (scrollTop / $(this)[0].scrollHeight);
                    var codeView = codeMirror.find(".CodeMirror-scroll");
                    if (scrollTop === 0) {
                        codeView.scrollTop(0)
                    } else if (scrollTop + height >= $(this)[0].scrollHeight) {
                        codeView.scrollTop(codeView[0].scrollHeight)
                    } else {
                        codeView.scrollTop(codeView[0].scrollHeight * percent)
                    }
                    $.proxy(settings.onpreviewscroll, _this)(event)
                })
            };
            var previewUnbindScroll = function () {
                preview.unbind(mouseOrTouch("scroll", "touchmove"))
            };
            codeMirror.bind({
                mouseover: cmBindScroll,
                mouseout: cmUnbindScroll,
                touchstart: cmBindScroll,
                touchend: cmUnbindScroll
            });
            preview.bind({
                mouseover: previewBindScroll,
                mouseout: previewUnbindScroll,
                touchstart: previewBindScroll,
                touchend: previewUnbindScroll
            });
            return this
        },
        bindChangeEvent: function () {
            var _this = this;
            var cm = this.cm;
            var settings = this.settings;
            if (!settings.syncScrolling) {
                return this
            }
            cm.on("change", function (_cm, changeObj) {
                if (settings.watch) {
                    _this.previewContainer.css("padding", settings.autoHeight ? "20px 20px 50px 40px" : "20px")
                }
                timer = setTimeout(function () {
                    clearTimeout(timer);
                    _this.save();
                    timer = null
                }, settings.delay)
            });
            return this
        },
        loadedDisplay: function (recreate) {
            recreate = recreate || false;
            var _this = this;
            var editor = this.editor;
            var preview = this.preview;
            var settings = this.settings;
            this.containerMask.hide();
            this.save();
            if (settings.watch) {
                preview.show()
            }
            editor.data("oldWidth", editor.width()).data("oldHeight", editor.height());
            this.resize();
            this.registerKeyMaps();
            $(window).resize(function () {
                _this.resize()
            });
            this.bindScrollEvent().bindChangeEvent();
            if (!recreate) {
                $.proxy(settings.onload, this)()
            }
            this.state.loaded = true;
            return this
        },
        width: function (width) {
            this.editor.css("width", (typeof width === "number") ? width + "px" : width);
            this.resize();
            return this
        },
        height: function (height) {
            this.editor.css("height", (typeof height === "number") ? height + "px" : height);
            this.resize();
            return this
        },
        resize: function (width, height) {
            width = width || null;
            height = height || null;
            var state = this.state;
            var editor = this.editor;
            var preview = this.preview;
            var toolbar = this.toolbar;
            var settings = this.settings;
            var codeMirror = this.codeMirror;
            if (width) {
                editor.css("width", (typeof width === "number") ? width + "px" : width)
            }
            if (settings.autoHeight && !state.fullscreen && !state.preview) {
                editor.css("height", "auto");
                codeMirror.css("height", "auto")
            } else {
                if (height) {
                    editor.css("height", (typeof height === "number") ? height + "px" : height)
                }
                if (state.fullscreen) {
                    editor.height($(window).height())
                }
                if (settings.toolbar && !settings.readOnly) {
                    codeMirror.css("margin-top", toolbar.height() + 1).height(editor.height() - toolbar.height())
                } else {
                    codeMirror.css("margin-top", 0).height(editor.height())
                }
            }
            if (settings.watch) {
                codeMirror.width(editor.width() / 2);
                preview.width((!state.preview) ? editor.width() / 2 : editor.width());
                this.previewContainer.css("padding", settings.autoHeight ? "20px 20px 50px 40px" : "20px");
                if (settings.toolbar && !settings.readOnly) {
                    preview.css("top", toolbar.height())
                } else {
                    preview.css("top", 0)
                }
                if (settings.autoHeight && !state.fullscreen && !state.preview) {
                    preview.height("")
                } else {
                    preview.height((settings.toolbar && !settings.readOnly) ? editor.height() - toolbar.height() : editor.height())
                }
            } else {
                codeMirror.width(editor.width());
                preview.hide()
            }
            if (state.loaded) {
                $.proxy(settings.onresize, this)()
            }
            return this
        },
        save: function () {
            if (timer === null) {
                return this
            }
            var _this = this;
            var state = this.state;
            var settings = this.settings;
            var cm = this.cm;
            var cmValue = cm.getValue();
            var previewContainer = this.previewContainer;
            if (settings.mode !== "gfm" && settings.mode !== "markdown") {
                this.markdownTextarea.val(cmValue);
                return this
            }
            var marked = editormd.$marked;
            var markdownToC = this.markdownToC = [];
            var rendererOptions = this.markedRendererOptions = {
                toc: settings.toc,
                tocm: settings.tocm,
                tocStartLevel: settings.tocStartLevel,
                pageBreak: settings.pageBreak,
                taskList: settings.taskList,
                emoji: settings.emoji,
                tex: settings.tex,
                atLink: settings.atLink,
                emailLink: settings.emailLink,
                flowChart: settings.flowChart,
                sequenceDiagram: settings.sequenceDiagram,
                previewCodeHighlight: settings.previewCodeHighlight,
            };
            var markedOptions = this.markedOptions = {
                renderer: editormd.markedRenderer(markdownToC, rendererOptions),
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: (settings.htmlDecode) ? false : true,
                smartLists: true,
                smartypants: true
            };
            marked.setOptions(markedOptions);
            cmValue = editormd.filterHTMLTags(cmValue, settings.htmlDecode);
            var newMarkdownDoc = editormd.$marked(cmValue, markedOptions);
            this.markdownTextarea.text(cmValue);
            cm.save();
            if (settings.saveHTMLToTextarea) {
                this.htmlTextarea.text(newMarkdownDoc)
            }
            if (settings.watch || (!settings.watch && state.preview)) {
                previewContainer.html(newMarkdownDoc);
                this.previewCodeHighlight();
                if (settings.toc) {
                    var tocContainer = (settings.tocContainer === "") ? previewContainer : $(settings.tocContainer);
                    var tocMenu = tocContainer.find("." + this.classPrefix + "toc-menu");
                    tocContainer.attr("previewContainer", (settings.tocContainer === "") ? "true" : "false");
                    if (settings.tocContainer !== "" && tocMenu.length > 0) {
                        tocMenu.remove()
                    }
                    editormd.markdownToCRenderer(markdownToC, tocContainer, settings.tocDropdown, settings.tocStartLevel);
                    if (settings.tocDropdown || tocContainer.find("." + this.classPrefix + "toc-menu").length > 0) {
                        editormd.tocDropdownMenu(tocContainer, (settings.tocTitle !== "") ? settings.tocTitle : this.lang.tocTitle)
                    }
                    if (settings.tocContainer !== "") {
                        previewContainer.find(".markdown-toc").css("border", "none")
                    }
                }
                if (settings.tex) {
                    if (!editormd.kaTeXLoaded && settings.autoLoadModules) {
                        editormd.loadKaTeX(function () {
                            editormd.$katex = katex;
                            editormd.kaTeXLoaded = true;
                            _this.katexRender()
                        })
                    } else {
                        editormd.$katex = katex;
                        this.katexRender()
                    }
                }
                if (settings.flowChart || settings.sequenceDiagram) {
                    flowchartTimer = setTimeout(function () {
                        clearTimeout(flowchartTimer);
                        _this.flowChartAndSequenceDiagramRender();
                        flowchartTimer = null
                    }, 10)
                }
                if (state.loaded) {
                    $.proxy(settings.onchange, this)()
                }
            }
            return this
        },
        focus: function () {
            this.cm.focus();
            return this
        },
        setCursor: function (cursor) {
            this.cm.setCursor(cursor);
            return this
        },
        getCursor: function () {
            return this.cm.getCursor()
        },
        setSelection: function (from, to) {
            this.cm.setSelection(from, to);
            return this
        },
        getSelection: function () {
            return this.cm.getSelection()
        },
        setSelections: function (ranges) {
            this.cm.setSelections(ranges);
            return this
        },
        getSelections: function () {
            return this.cm.getSelections()
        },
        replaceSelection: function (value) {
            this.cm.replaceSelection(value);
            return this
        },
        insertValue: function (value) {
            this.replaceSelection(value);
            return this
        },
        appendMarkdown: function (md) {
            var settings = this.settings;
            var cm = this.cm;
            cm.setValue(cm.getValue() + md);
            return this
        },
        setMarkdown: function (md) {
            this.cm.setValue(md || this.settings.markdown);
            return this
        },
        getMarkdown: function () {
            return this.cm.getValue()
        },
        getValue: function () {
            return this.cm.getValue()
        },
        setValue: function (value) {
            this.cm.setValue(value);
            return this
        },
        clear: function () {
            this.cm.setValue("");
            return this
        },
        getHTML: function () {
            if (!this.settings.saveHTMLToTextarea) {
                alert("Error: settings.saveHTMLToTextarea == false");
                return false
            }
            return this.htmlTextarea.val()
        },
        getTextareaSavedHTML: function () {
            return this.getHTML()
        },
        getPreviewedHTML: function () {
            if (!this.settings.watch) {
                alert("Error: settings.watch == false");
                return false
            }
            return this.previewContainer.html()
        },
        watch: function (callback) {
            var settings = this.settings;
            if ($.inArray(settings.mode, ["gfm", "markdown"]) < 0) {
                return this
            }
            this.state.watching = settings.watch = true;
            this.preview.show();
            if (this.toolbar) {
                var watchIcon = settings.toolbarIconsClass.watch;
                var unWatchIcon = settings.toolbarIconsClass.unwatch;
                var icon = this.toolbar.find(".fa[name=watch]");
                icon.parent().attr("title", settings.lang.toolbar.watch);
                icon.removeClass(unWatchIcon).addClass(watchIcon)
            }
            this.codeMirror.css("border-right", "1px solid #ddd").width(this.editor.width() / 2);
            timer = 0;
            this.save().resize();
            if (!settings.onwatch) {
                settings.onwatch = callback || function () {
                    }
            }
            $.proxy(settings.onwatch, this)();
            return this
        },
        unwatch: function (callback) {
            var settings = this.settings;
            this.state.watching = settings.watch = false;
            this.preview.hide();
            if (this.toolbar) {
                var watchIcon = settings.toolbarIconsClass.watch;
                var unWatchIcon = settings.toolbarIconsClass.unwatch;
                var icon = this.toolbar.find(".fa[name=watch]");
                icon.parent().attr("title", settings.lang.toolbar.unwatch);
                icon.removeClass(watchIcon).addClass(unWatchIcon)
            }
            this.codeMirror.css({"border-right": "none"}).width(this.editor.width());
            this.resize();
            if (!settings.onunwatch) {
                settings.onunwatch = callback || function () {
                    }
            }
            $.proxy(settings.onunwatch, this)();
            return this
        },
        show: function (callback) {
            callback = callback || function () {
                };
            var _this = this;
            this.editor.show(0, function () {
                $.proxy(callback, _this)()
            });
            return this
        },
        hide: function (callback) {
            callback = callback || function () {
                };
            var _this = this;
            this.editor.hide(0, function () {
                $.proxy(callback, _this)()
            });
            return this
        },
        previewing: function () {
            var _this = this;
            var editor = this.editor;
            var preview = this.preview;
            var toolbar = this.toolbar;
            var settings = this.settings;
            var codeMirror = this.codeMirror;
            if ($.inArray(settings.mode, ["gfm", "markdown"]) < 0) {
                return this
            }
            if (settings.toolbar && toolbar) {
                toolbar.toggle();
                toolbar.find(".fa[name=preview]").toggleClass("active")
            }
            codeMirror.toggle();
            var escHandle = function (event) {
                if (event.shiftKey && event.keyCode === 27) {
                    _this.previewed()
                }
            };
            if (codeMirror.css("display") === "none") {
                this.state.preview = true;
                if (this.state.fullscreen) {
                    preview.css("background", "#fff")
                }
                editor.find("." + this.classPrefix + "preview-close-btn").show().bind(editormd.mouseOrTouch("click", "touchend"), function () {
                    _this.previewed()
                });
                if (!settings.watch) {
                    this.save()
                }
                preview.show().css({
                    position: "static",
                    top: 0,
                    width: editor.width(),
                    height: (settings.autoHeight && !this.state.fullscreen) ? "auto" : editor.height()
                });
                if (this.state.loaded) {
                    $.proxy(settings.onpreviewing, this)()
                }
                $(window).bind("keyup", escHandle)
            } else {
                $(window).unbind("keyup", escHandle);
                this.previewed()
            }
        },
        previewed: function () {
            var editor = this.editor;
            var preview = this.preview;
            var toolbar = this.toolbar;
            var settings = this.settings;
            var previewCloseBtn = editor.find("." + this.classPrefix + "preview-close-btn");
            this.state.preview = false;
            this.codeMirror.show();
            if (settings.toolbar) {
                toolbar.show()
            }
            preview[(settings.watch) ? "show" : "hide"]();
            previewCloseBtn.hide().unbind(editormd.mouseOrTouch("click", "touchend"));
            preview.css({
                background: null,
                position: "absolute",
                width: editor.width() / 2,
                height: (settings.autoHeight && !this.state.fullscreen) ? "auto" : editor.height() - toolbar.height(),
                top: (settings.toolbar) ? toolbar.height() : 0
            });
            if (this.state.loaded) {
                $.proxy(settings.onpreviewed, this)()
            }
            return this
        },
        fullscreen: function () {
            var _this = this;
            var state = this.state;
            var editor = this.editor;
            var preview = this.preview;
            var toolbar = this.toolbar;
            var settings = this.settings;
            var fullscreenClass = this.classPrefix + "fullscreen";
            if (toolbar) {
                toolbar.find(".fa[name=fullscreen]").parent().toggleClass("active")
            }
            var escHandle = function (event) {
                if (!event.shiftKey && event.keyCode === 27) {
                    if (state.fullscreen) {
                        _this.fullscreenExit()
                    }
                }
            };
            if (!editor.hasClass(fullscreenClass)) {
                state.fullscreen = true;
                $("html,body").css("overflow", "hidden");
                editor.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: "none",
                    width: $(window).width(),
                    height: $(window).height()
                }).addClass(fullscreenClass);
                this.resize();
                $.proxy(settings.onfullscreen, this)();
                $(window).bind("keyup", escHandle)
            } else {
                $(window).unbind("keyup", escHandle);
                this.fullscreenExit()
            }
            return this
        },
        fullscreenExit: function () {
            var editor = this.editor;
            var settings = this.settings;
            var toolbar = this.toolbar;
            var fullscreenClass = this.classPrefix + "fullscreen";
            this.state.fullscreen = false;
            if (toolbar) {
                toolbar.find(".fa[name=fullscreen]").parent().removeClass("active")
            }
            $("html,body").css("overflow", "");
            editor.css({
                position: "",
                top: "",
                left: "",
                margin: "0 auto 15px",
                width: editor.data("oldWidth"),
                height: editor.data("oldHeight"),
                border: "1px solid #ddd"
            }).removeClass(fullscreenClass);
            this.resize();
            $.proxy(settings.onfullscreenExit, this)();
            return this
        },
        executePlugin: function (name, path) {
            var _this = this;
            var cm = this.cm;
            var settings = this.settings;
            path = settings.pluginPath + path;
            if (typeof define === "function") {
                if (typeof this[name] === "undefined") {
                    alert("Error: " + name + " plugin is not found, you are not load this plugin.");
                    return this
                }
                this[name](cm);
                return this
            }
            if ($.inArray(path, editormd.loadFiles.plugin) < 0) {
                editormd.loadPlugin(path, function () {
                    editormd.loadPlugins[name] = _this[name];
                    _this[name](cm)
                })
            } else {
                $.proxy(editormd.loadPlugins[name], this)(cm)
            }
            return this
        },
        search: function (command) {
            var settings = this.settings;
            if (!settings.searchReplace) {
                alert("Error: settings.searchReplace == false");
                return this
            }
            if (!settings.readOnly) {
                this.cm.execCommand(command || "find")
            }
            return this
        },
        searchReplace: function () {
            this.search("replace");
            return this
        },
        searchReplaceAll: function () {
            this.search("replaceAll");
            return this
        }
    };
    editormd.fn.init.prototype = editormd.fn;
    editormd.dialogLockScreen = function () {
        var settings = this.settings || {dialogLockScreen: true};
        if (settings.dialogLockScreen) {
            $("html,body").css("overflow", "hidden")
        }
    };
    editormd.dialogShowMask = function (dialog) {
        var editor = this.editor;
        var settings = this.settings || {dialogShowMask: true};
        dialog.css({
            top: ($(window).height() - dialog.height()) / 2 + "px",
            left: ($(window).width() - dialog.width()) / 2 + "px"
        });
        if (settings.dialogShowMask) {
            editor.children("." + this.classPrefix + "mask").css("z-index", parseInt(dialog.css("z-index")) - 1).show()
        }
    };
    editormd.toolbarHandlers = {
        undo: function () {
            this.cm.undo()
        }, redo: function () {
            this.cm.redo()
        }, bold: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("**" + selection + "**");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 2)
            }
        }, del: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("~~" + selection + "~~");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 2)
            }
        }, italic: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("*" + selection + "*");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 1)
            }
        }, quote: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("> " + selection);
            cm.setCursor(cursor.line, (selection === "") ? cursor.ch + 2 : cursor.ch + selection.length + 2)
        }, ucfirst: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            var selections = cm.listSelections();
            cm.replaceSelection(editormd.firstUpperCase(selection));
            cm.setSelections(selections)
        }, ucwords: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            var selections = cm.listSelections();
            cm.replaceSelection(editormd.wordsFirstUpperCase(selection));
            cm.setSelections(selections)
        }, uppercase: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            var selections = cm.listSelections();
            cm.replaceSelection(selection.toUpperCase());
            cm.setSelections(selections)
        }, lowercase: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            var selections = cm.listSelections();
            cm.replaceSelection(selection.toLowerCase());
            cm.setSelections(selections)
        }, h1: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("# " + selection)
        }, h2: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("## " + selection)
        }, h3: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("### " + selection)
        }, h4: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("#### " + selection)
        }, h5: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("##### " + selection)
        }, h6: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("###### " + selection)
        }, "list-ul": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            if (selection === "") {
                cm.replaceSelection("- " + selection)
            } else {
                var selectionText = selection.split("\n");
                for (var i = 0, len = selectionText.length; i < len; i++) {
                    selectionText[i] = (selectionText[i] === "") ? "" : "- " + selectionText[i]
                }
                cm.replaceSelection(selectionText.join("\n"))
            }
        }, "list-ol": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            if (selection === "") {
                cm.replaceSelection("1. " + selection)
            } else {
                var selectionText = selection.split("\n");
                for (var i = 0, len = selectionText.length; i < len; i++) {
                    selectionText[i] = (selectionText[i] === "") ? "" : (i + 1) + ". " + selectionText[i]
                }
                cm.replaceSelection(selectionText.join("\n"))
            }
        }, hr: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("------------")
        }, tex: function () {
            if (!this.settings.tex) {
                alert("settings.tex === false");
                return this
            }
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("$$" + selection + "$$");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 2)
            }
        }, link: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("[" + selection + "]()");
            if (selection == "") {
                cm.setCursor(cursor.line, cursor.ch + 3);
                cm.focus()
            }
        }, "reference-link": function () {
            this.executePlugin("referenceLinkDialog", "reference-link-dialog/reference-link-dialog")
        }, pagebreak: function () {
            if (!this.settings.pageBreak) {
                alert("settings.pageBreak === false");
                return this
            }
            var cm = this.cm;
            var selection = cm.getSelection();
            cm.replaceSelection("\r\n[========]\r\n")
        }, image: function () {
            //var cm = this.cm;
            //var cursor = cm.getCursor();
            //var selection = cm.getSelection();
            //cm.replaceSelection("![]()");
            //if (selection == "") {
            //    cm.setCursor(cursor.line, cursor.ch + 4);
            //    cm.focus()
            //}
            this.executePlugin("imageDialog", "image-dialog/image-dialog");
        }, code: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("`" + selection + "`");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 1)
            }
        }, "code-block": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("```\r" + selection + "\r```");
            if (selection === "") {
                cm.setCursor(cursor.line + 1, cursor.ch);
                cm.focus()
            }
        }, "preformatted-text": function () {
            this.executePlugin("preformattedTextDialog", "preformatted-text-dialog/preformatted-text-dialog")
        }, table: function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection("|   |   |\r|-----|-----|\r|   |   |");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 2);
                cm.focus()
            }
        }, datetime: function () {
            var cm = this.cm;
            var selection = cm.getSelection();
            var date = new Date();
            var langName = this.settings.lang.name;
            var datefmt = editormd.dateFormat() + " " + editormd.dateFormat((langName === "zh-cn" || langName === "zh-tw") ? "cn-week-day" : "week-day");
            cm.replaceSelection(datefmt)
        }, emoji: function () {
            this.executePlugin("emojiDialog", "emoji-dialog/emoji-dialog")
        }, "html-entities": function () {
            this.executePlugin("htmlEntitiesDialog", "html-entities-dialog/html-entities-dialog")
        }, "goto-line": function () {
            this.executePlugin("gotoLineDialog", "goto-line-dialog/goto-line-dialog")
        }, watch: function () {
            this[this.settings.watch ? "unwatch" : "watch"]()
        }, preview: function () {
            this.previewing()
        }, fullscreen: function () {
            this.fullscreen()
        }, clear: function () {
            this.clear()
        }, search: function () {
            this.search()
        }, help: function () {
            this.executePlugin("helpDialog", "help-dialog/help-dialog")
        }, info: function () {
            this.showInfoDialog()
        }
    };
    editormd.keyMaps = {
        "Ctrl-1": "h1",
        "Ctrl-2": "h2",
        "Ctrl-3": "h3",
        "Ctrl-4": "h4",
        "Ctrl-5": "h5",
        "Ctrl-6": "h6",
        "Ctrl-B": "bold",
        "Ctrl-D": "datetime",
        "Ctrl-E": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            if (!this.settings.emoji) {
                alert("Error: settings.emoji == false");
                return
            }
            cm.replaceSelection(":" + selection + ":");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 1)
            }
        },
        "Ctrl-Alt-G": "goto-line",
        "Ctrl-H": "hr",
        "Ctrl-I": "italic",
        "Ctrl-K": "code",
        "Ctrl-L": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            var title = (selection === "") ? "" : " \"" + selection + "\"";
            cm.replaceSelection("[" + selection + "](" + title + ")");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 1)
            }
        },
        "Ctrl-U": "list-ul",
        "Shift-Ctrl-A": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            if (!this.settings.atLink) {
                alert("Error: settings.atLink == false");
                return
            }
            cm.replaceSelection("@" + selection);
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 1)
            }
        },
        "Shift-Ctrl-C": "code",
        "Shift-Ctrl-Q": "quote",
        "Shift-Ctrl-S": "del",
        "Shift-Ctrl-K": "tex",
        "Shift-Alt-C": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            cm.replaceSelection(["```", selection, "```"].join("\n"));
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 3)
            }
        },
        "Shift-Ctrl-Alt-C": "code-block",
        "Shift-Ctrl-H": "html-entities",
        "Shift-Alt-H": "help",
        "Shift-Ctrl-E": "emoji",
        "Shift-Ctrl-U": "uppercase",
        "Shift-Alt-U": "ucwords",
        "Shift-Ctrl-Alt-U": "ucfirst",
        "Shift-Alt-L": "lowercase",
        "Shift-Ctrl-I": function () {
            var cm = this.cm;
            var cursor = cm.getCursor();
            var selection = cm.getSelection();
            var title = (selection === "") ? "" : " \"" + selection + "\"";
            cm.replaceSelection("![" + selection + "](" + title + ")");
            if (selection === "") {
                cm.setCursor(cursor.line, cursor.ch + 4)
            }
        },
        "Shift-Ctrl-Alt-I": "image",
        "Shift-Ctrl-L": "link",
        "Shift-Ctrl-O": "list-ol",
        "Shift-Ctrl-P": "preformatted-text",
        "Shift-Ctrl-T": "table",
        "Shift-Alt-P": "pagebreak",
        "F9": "watch",
        "F10": "preview",
        "F11": "fullscreen"
    };
    var trim = function (str) {
        return (!String.prototype.trim) ? str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") : str.trim()
    };
    editormd.trim = trim;
    var ucwords = function (str) {
        return str.toLowerCase().replace(/\b(\w)|\s(\w)/g, function ($1) {
            return $1.toUpperCase()
        })
    };
    editormd.ucwords = editormd.wordsFirstUpperCase = ucwords;
    var firstUpperCase = function (str) {
        return str.toLowerCase().replace(/\b(\w)/, function ($1) {
            return $1.toUpperCase()
        })
    };
    var ucfirst = firstUpperCase;
    editormd.firstUpperCase = editormd.ucfirst = firstUpperCase;
    editormd.urls = {atLinkBase: "https://github.com/"};
    editormd.regexs = {
        atLink: /@(\w+)/g,
        email: /(\w+)@(\w+)\.(\w+)\.?(\w+)?/g,
        emailLink: /(mailto:)?([\w\.\_]+)@(\w+)\.(\w+)\.?(\w+)?/g,
        emoji: /:([\w\+-]+):/g,
        emojiDatetime: /(\d{2}:\d{2}:\d{2})/g,
        twemoji: /:(tw-([\w]+)-?(\w+)?):/g,
        fontAwesome: /:(fa-([\w]+)(-(\w+)){0,}):/g,
        editormdLogo: /:(editormd-logo-?(\w+)?):/g,
        pageBreak: /^\[[=]{8,}\]$/
    };
    editormd.emoji = {path: "http://www.emoji-cheat-sheet.com/graphics/emojis/", ext: ".png"};
    editormd.twemoji = {path: "http://twemoji.maxcdn.com/36x36/", ext: ".png"};
    editormd.markedRenderer = function (markdownToC, options) {
        var defaults = {
            toc: true,
            tocm: false,
            tocStartLevel: 1,
            pageBreak: true,
            atLink: true,
            emailLink: true,
            taskList: false,
            emoji: false,
            tex: false,
            flowChart: false,
            sequenceDiagram: false
        };
        var settings = $.extend(defaults, options || {});
        var marked = editormd.$marked;
        var markedRenderer = new marked.Renderer();
        markdownToC = markdownToC || [];
        var regexs = editormd.regexs;
        var atLinkReg = regexs.atLink;
        var emojiReg = regexs.emoji;
        var emailReg = regexs.email;
        var emailLinkReg = regexs.emailLink;
        var twemojiReg = regexs.twemoji;
        var faIconReg = regexs.fontAwesome;
        var editormdLogoReg = regexs.editormdLogo;
        var pageBreakReg = regexs.pageBreak;
        markedRenderer.emoji = function (text) {
            text = text.replace(editormd.regexs.emojiDatetime, function ($1) {
                return $1.replace(/:/g, "&#58;")
            });
            var matchs = text.match(emojiReg);
            if (!matchs || !settings.emoji) {
                return text
            }
            for (var i = 0, len = matchs.length; i < len; i++) {
                if (matchs[i] === ":+1:") {
                    matchs[i] = ":\\+1:"
                }
                text = text.replace(new RegExp(matchs[i]), function ($1, $2) {
                    var faMatchs = $1.match(faIconReg);
                    var name = $1.replace(/:/g, "");
                    if (faMatchs) {
                        for (var fa = 0, len1 = faMatchs.length; fa < len1; fa++) {
                            var faName = faMatchs[fa].replace(/:/g, "");
                            return "<i class=\"fa " + faName + " fa-emoji\" title=\"" + faName.replace("fa-", "") + "\"></i>"
                        }
                    } else {
                        var emdlogoMathcs = $1.match(editormdLogoReg);
                        var twemojiMatchs = $1.match(twemojiReg);
                        if (emdlogoMathcs) {
                            for (var x = 0, len2 = emdlogoMathcs.length; x < len2; x++) {
                                var logoName = emdlogoMathcs[x].replace(/:/g, "");
                                return "<i class=\"" + logoName + "\" title=\"Editor.md logo (" + logoName + ")\"></i>"
                            }
                        } else if (twemojiMatchs) {
                            for (var t = 0, len3 = twemojiMatchs.length; t < len3; t++) {
                                var twe = twemojiMatchs[t].replace(/:/g, "").replace("tw-", "");
                                return "<img src=\"" + editormd.twemoji.path + twe + editormd.twemoji.ext + "\" title=\"twemoji-" + twe + "\" alt=\"twemoji-" + twe + "\" class=\"emoji twemoji\" />"
                            }
                        } else {
                            var src = (name === "+1") ? "plus1" : name;
                            src = (src === "black_large_square") ? "black_square" : src;
                            return "<img src=\"" + editormd.emoji.path + src + editormd.emoji.ext + "\" class=\"emoji\" title=\"&#58;" + name + "&#58;\" alt=\"&#58;" + name + "&#58;\" />"
                        }
                    }
                })
            }
            return text
        };
        markedRenderer.atLink = function (text) {
            if (atLinkReg.test(text)) {
                if (settings.atLink) {
                    text = text.replace(emailReg, function ($1, $2, $3, $4) {
                        return $1.replace(/@/g, "_#_&#64;_#_")
                    });
                    text = text.replace(atLinkReg, function ($1, $2) {
                        return "<a href=\"" + editormd.urls.atLinkBase + "" + $2 + "\" title=\"&#64;" + $2 + "\" class=\"at-link\">" + $1 + "</a>"
                    }).replace(/_#_&#64;_#_/g, "@")
                }
                if (settings.emailLink) {
                    text = text.replace(emailLinkReg, function ($1, $2, $3, $4, $5) {
                        return (!$2 && $.inArray($5, "jpg|jpeg|png|gif|webp|ico|icon|pdf".split("|")) < 0) ? "<a href=\"mailto:" + $1 + "\">" + $1 + "</a>" : $1
                    })
                }
                return text
            }
            return text
        };
        markedRenderer.link = function (href, title, text) {
            if (this.options.sanitize) {
                try {
                    var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase()
                } catch (e) {
                    return ""
                }
                if (prot.indexOf("javascript:") === 0) {
                    return ""
                }
            }
            var out = "<a href=\"" + href + "\"";
            if (atLinkReg.test(title) || atLinkReg.test(text)) {
                if (title) {
                    out += " title=\"" + title.replace(/@/g, "&#64;")
                }
                return out + "\">" + text.replace(/@/g, "&#64;") + "</a>"
            }
            if (title) {
                out += " title=\"" + title + "\""
            }
            out += ">" + text + "</a>";
            return out
        };
        markedRenderer.heading = function (text, level, raw) {
            var linkText = text;
            var hasLinkReg = /\s*\<a\s*href\=\"(.*)\"\s*([^\>]*)\>(.*)\<\/a\>\s*/;
            var getLinkTextReg = /\s*\<a\s*([^\>]+)\>([^\>]*)\<\/a\>\s*/g;
            if (hasLinkReg.test(text)) {
                var tempText = [];
                text = text.split(/\<a\s*([^\>]+)\>([^\>]*)\<\/a\>/);
                for (var i = 0, len = text.length; i < len; i++) {
                    tempText.push(text[i].replace(/\s*href\=\"(.*)\"\s*/g, ""))
                }
                text = tempText.join(" ")
            }
            text = trim(text);
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
            var toc = {text: text, level: level, slug: escapedText};
            var isChinese = /^[\u4e00-\u9fa5]+$/.test(text);
            var id = (isChinese) ? escape(text).replace(/\%/g, "") : text.toLowerCase().replace(/[^\w]+/g, "-");
            markdownToC.push(toc);
            var headingHTML = "<h" + level + " id=\"h" + level + "-" + this.options.headerPrefix + id + "\">";
            headingHTML += "<a name=\"" + text + "\" class=\"reference-link\"></a>";
            headingHTML += "<span class=\"header-link octicon octicon-link\"></span>";
            headingHTML += (hasLinkReg) ? this.atLink(this.emoji(linkText)) : this.atLink(this.emoji(text));
            headingHTML += "</h" + level + ">";
            return headingHTML
        };
        markedRenderer.pageBreak = function (text) {
            if (pageBreakReg.test(text) && settings.pageBreak) {
                text = "<hr style=\"page-break-after:always;\" class=\"page-break editormd-page-break\" />"
            }
            return text
        };
        markedRenderer.paragraph = function (text) {
            var isTeXInline = /\$\$(.*)\$\$/g.test(text);
            var isTeXLine = /^\$\$(.*)\$\$$/.test(text);
            var isTeXAddClass = (isTeXLine) ? " class=\"" + editormd.classNames.tex + "\"" : "";
            var isToC = (settings.tocm) ? /^(\[TOC\]|\[TOCM\])$/.test(text) : /^\[TOC\]$/.test(text);
            var isToCMenu = /^\[TOCM\]$/.test(text);
            if (!isTeXLine && isTeXInline) {
                text = text.replace(/(\$\$([^\$]*)\$\$)+/g, function ($1, $2) {
                    return "<span class=\"" + editormd.classNames.tex + "\">" + $2.replace(/\$/g, "") + "</span>"
                })
            } else {
                text = (isTeXLine) ? text.replace(/\$/g, "") : text
            }
            var tocHTML = "<div class=\"markdown-toc editormd-markdown-toc\">" + text + "</div>";
            return (isToC) ? ((isToCMenu) ? "<div class=\"editormd-toc-menu\">" + tocHTML + "</div><br/>" : tocHTML) : ((pageBreakReg.test(text)) ? this.pageBreak(text) : "<p" + isTeXAddClass + ">" + this.atLink(this.emoji(text)) + "</p>\n")
        };
        markedRenderer.code = function (code, lang, escaped) {
            if (lang === "seq" || lang === "sequence") {
                return "<div class=\"sequence-diagram\">" + code + "</div>"
            } else if (lang === "flow") {
                return "<div class=\"flowchart\">" + code + "</div>"
            } else {
                return marked.Renderer.prototype.code.apply(this, arguments)
            }
        };
        markedRenderer.tablecell = function (content, flags) {
            var type = (flags.header) ? "th" : "td";
            var tag = (flags.align) ? "<" + type + " style=\"text-align:" + flags.align + "\">" : "<" + type + ">";
            return tag + this.atLink(this.emoji(content)) + "</" + type + ">\n"
        };
        markedRenderer.listitem = function (text) {
            if (settings.taskList && /^\s*\[[x\s]\]\s*/.test(text)) {
                text = text.replace(/^\s*\[\s\]\s*/, "<input type=\"checkbox\" class=\"task-list-item-checkbox\" /> ").replace(/^\s*\[x\]\s*/, "<input type=\"checkbox\" class=\"task-list-item-checkbox\" checked disabled /> ");
                return "<li style=\"list-style: none;\">" + this.atLink(this.emoji(text)) + "</li>"
            } else {
                return "<li>" + this.atLink(this.emoji(text)) + "</li>"
            }
        };
        return markedRenderer
    };
    editormd.markdownToCRenderer = function (toc, container, tocDropdown, startLevel) {
        var html = "";
        var lastLevel = 0;
        var classPrefix = this.classPrefix;
        startLevel = startLevel || 1;
        for (var i = 0, len = toc.length; i < len; i++) {
            var text = toc[i].text;
            var level = toc[i].level;
            if (level < startLevel) {
                continue
            }
            if (level > lastLevel) {
                html += ""
            } else if (level < lastLevel) {
                html += (new Array(lastLevel - level + 2)).join("</ul></li>")
            } else {
                html += "</ul></li>"
            }
            html += "<li><a class=\"toc-level-" + level + "\" href=\"#" + text + "\" level=\"" + level + "\">" + text + "</a><ul>";
            lastLevel = level
        }
        var tocContainer = container.find(".markdown-toc");
        if (tocContainer.length < 1 && container.attr("previewContainer") === "false") {
            var tocHTML = "<div class=\"markdown-toc " + classPrefix + "markdown-toc\"></div>";
            tocHTML = (tocDropdown) ? "<div class=\"" + classPrefix + "toc-menu\">" + tocHTML + "</div>" : tocHTML;
            container.html(tocHTML);
            tocContainer = container.find(".markdown-toc")
        }
        if (tocDropdown) {
            tocContainer.wrap("<div class=\"" + classPrefix + "toc-menu\"></div><br/>")
        }
        tocContainer.html("<ul class=\"markdown-toc-list\"></ul>").children(".markdown-toc-list").html(html.replace(/\r?\n?\<ul\>\<\/ul\>/g, ""));
        return tocContainer
    };
    editormd.tocDropdownMenu = function (container, tocTitle) {
        tocTitle = tocTitle || "Table of Contents";
        var zindex = 400;
        var tocMenus = container.find("." + this.classPrefix + "toc-menu");
        tocMenus.each(function () {
            var $this = $(this);
            var toc = $this.children(".markdown-toc");
            var icon = "<i class=\"fa fa-angle-down\"></i>";
            var btn = "<a href=\"javascript:;\" class=\"toc-menu-btn\">" + icon + tocTitle + "</a>";
            var menu = toc.children("ul");
            var list = menu.find("li");
            toc.append(btn);
            list.first().before("<li><h1>" + tocTitle + " " + icon + "</h1></li>");
            $this.mouseover(function () {
                menu.show();
                list.each(function () {
                    var li = $(this);
                    var ul = li.children("ul");
                    if (ul.html() === "") {
                        ul.remove()
                    }
                    if (ul.length > 0 && ul.html() !== "") {
                        var firstA = li.children("a").first();
                        if (firstA.children(".fa").length < 1) {
                            firstA.append($(icon).css({float: "right", paddingTop: "4px"}))
                        }
                    }
                    li.mouseover(function () {
                        ul.css("z-index", zindex).show();
                        zindex += 1
                    }).mouseleave(function () {
                        ul.hide()
                    })
                })
            }).mouseleave(function () {
                menu.hide()
            })
        });
        return tocMenus
    };
    editormd.filterHTMLTags = function (html, filters) {
        if (typeof html !== "string") {
            html = new String(html)
        }
        if (typeof filters !== "string") {
            return html
        }
        var expression = filters.split("|");
        var filterTags = expression[0].split(",");
        var attrs = expression[1];
        for (var i = 0, len = filterTags.length; i < len; i++) {
            var tag = filterTags[i];
            html = html.replace(new RegExp("\<\s*" + tag + "\s*([^\>]*)\>([^\>]*)\<\s*\/" + tag + "\s*\>", "igm"), "")
        }
        if (typeof attrs !== "undefined") {
            var htmlTagRegex = /\<(\w+)\s*([^\>]*)\>([^\>]*)\<\/(\w+)\>/ig;
            if (attrs === "*") {
                html = html.replace(htmlTagRegex, function ($1, $2, $3, $4, $5) {
                    return "<" + $2 + ">" + $4 + "</" + $5 + ">"
                })
            } else if (attrs === "on*") {
                html = html.replace(htmlTagRegex, function ($1, $2, $3, $4, $5) {
                    var el = $("<" + $2 + ">" + $4 + "</" + $5 + ">");
                    var _attrs = $($1)[0].attributes;
                    var $attrs = {};
                    $.each(_attrs, function (i, e) {
                        $attrs[e.nodeName] = e.nodeValue
                    });
                    $.each($attrs, function (i) {
                        if (i.indexOf("on") === 0) {
                            delete $attrs[i]
                        }
                    });
                    el.attr($attrs);
                    return el[0].outerHTML
                })
            } else {
                html = html.replace(htmlTagRegex, function ($1, $2, $3, $4) {
                    var filterAttrs = attrs.split(",");
                    var el = $($1);
                    el.html($4);
                    $.each(filterAttrs, function (i) {
                        el.attr(filterAttrs[i], null)
                    });
                    return el[0].outerHTML
                })
            }
        }
        return html
    };
    editormd.markdownToHTML = function (id, options) {
        var defaults = {
            gfm: true,
            toc: true,
            tocm: true,
            tocStartLevel: 1,
            tocTitle: "目录",
            tocDropdown: true,
            markdown: "",
            htmlDecode: false,
            autoLoadKaTeX: true,
            pageBreak: true,
            atLink: true,
            emailLink: true,
            tex: true,
            taskList: true,
            emoji: false,
            flowChart: true,
            sequenceDiagram: true,
            previewCodeHighlight: true
        };
        editormd.$marked = marked;
        var div = $("#" + id);
        var settings = div.settings = $.extend(true, defaults, options || {});
        var saveTo = div.find("textarea");
        if (saveTo.length < 1) {
            div.append("<textarea></textarea>");
            saveTo = div.find("textarea")
        }
        var markdownDoc = (settings.markdown === "") ? saveTo.val() : settings.markdown;
        var markdownToC = [];
        var rendererOptions = {
            toc: settings.toc,
            tocm: settings.tocm,
            tocStartLevel: settings.tocStartLevel,
            taskList: settings.taskList,
            emoji: settings.emoji,
            tex: settings.tex,
            pageBreak: settings.pageBreak,
            atLink: settings.atLink,
            emailLink: settings.emailLink,
            flowChart: settings.flowChart,
            sequenceDiagram: settings.sequenceDiagram,
            previewCodeHighlight: settings.previewCodeHighlight
        };
        var markedOptions = {
            renderer: editormd.markedRenderer(markdownToC, rendererOptions),
            gfm: settings.gfm,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: (settings.htmlDecode) ? false : true,
            smartLists: true,
            smartypants: true
        };
        markdownDoc = new String(markdownDoc);
        markdownDoc = editormd.filterHTMLTags(markdownDoc, settings.htmlDecode);
        var markdownParsed = marked(markdownDoc, markedOptions);
        saveTo.val(markdownDoc);
        div.addClass("markdown-body " + this.classPrefix + "html-preview").append(markdownParsed);
        if (settings.toc) {
            div.tocContainer = this.markdownToCRenderer(markdownToC, div, settings.tocDropdown, settings.tocStartLevel);
            if (settings.tocDropdown || div.find("." + this.classPrefix + "toc-menu").length > 0) {
                this.tocDropdownMenu(div, settings.tocTitle)
            }
        }
        if (settings.previewCodeHighlight) {
            div.find("pre").addClass("prettyprint linenums");
            prettyPrint()
        }
        if (!editormd.isIE8) {
            if (settings.flowChart) {
                div.find(".flowchart").flowChart()
            }
            if (settings.sequenceDiagram) {
                div.find(".sequence-diagram").sequenceDiagram({theme: "simple"})
            }
        }
        if (settings.tex) {
            var katexHandle = function () {
                div.find("." + editormd.classNames.tex).each(function () {
                    var tex = $(this);
                    katex.render(tex.html().replace(/&lt;/g, "<").replace(/&gt;/g, ">"), tex[0])
                })
            };
            if (settings.autoLoadKaTeX && !editormd.$katex && !editormd.kaTeXLoaded) {
                this.loadKaTeX(function () {
                    editormd.$katex = katex;
                    editormd.kaTeXLoaded = true;
                    katexHandle()
                })
            } else {
                katexHandle()
            }
        }
        div.getMarkdown = function () {
            return saveTo.val()
        };
        return div
    };
    editormd.themes = ["default", "3024-day", "3024-night", "ambiance", "ambiance-mobile", "base16-dark", "base16-light", "blackboard", "cobalt", "eclipse", "elegant", "erlang-dark", "lesser-dark", "mbo", "mdn-like", "midnight", "monokai", "neat", "neo", "night", "paraiso-dark", "paraiso-light", "pastel-on-dark", "rubyblue", "solarized", "the-matrix", "tomorrow-night-eighties", "twilight", "vibrant-ink", "xq-dark", "xq-light"];
    editormd.loadPlugins = {};
    editormd.loadFiles = {js: [], css: [], plugin: []};
    editormd.loadPlugin = function (fileName, callback, into) {
        callback = callback || function () {
            };
        this.loadScript(fileName, function () {
            editormd.loadFiles.plugin.push(fileName);
            callback()
        }, into)
    };
    editormd.loadCSS = function (fileName, callback, into) {
        into = into || "head";
        callback = callback || function () {
            };
        var css = document.createElement("link");
        css.type = "text/css";
        css.rel = "stylesheet";
        css.onload = css.onreadystatechange = function () {
            editormd.loadFiles.css.push(fileName);
            callback()
        };
        css.href = fileName + ".css";
        if (into === "head") {
            document.getElementsByTagName("head")[0].appendChild(css)
        } else {
            document.body.appendChild(css)
        }
    };
    editormd.isIE = (navigator.appName == "Microsoft Internet Explorer");
    editormd.isIE8 = (editormd.isIE && navigator.appVersion.match(/8./i) == "8.");
    editormd.loadScript = function (fileName, callback, into) {
        into = into || "head";
        callback = callback || function () {
            };
        var script = null;
        script = document.createElement("script");
        script.id = fileName.replace(/[\./]+/g, "-");
        script.type = "text/javascript";
        script.src = fileName + ".js";
        if (editormd.isIE8) {
            script.onreadystatechange = function () {
                if (script.readyState) {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        editormd.loadFiles.js.push(fileName);
                        callback()
                    }
                }
            }
        } else {
            script.onload = function () {
                editormd.loadFiles.js.push(fileName);
                callback()
            }
        }
        if (into === "head") {
            document.getElementsByTagName("head")[0].appendChild(script)
        } else {
            document.body.appendChild(script)
        }
    };
    editormd.katexURL = {
        css: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min",
        js: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min"
    };
    editormd.kaTeXLoaded = false;
    editormd.loadKaTeX = function (callback) {
        editormd.loadCSS(editormd.katexURL.css, function () {
            editormd.loadScript(editormd.katexURL.js, callback || function () {
            })
        })
    };
    editormd.lockScreen = function (lock) {
        $("html,body").css("overflow", (lock) ? "hidden" : "")
    };
    editormd.createDialog = function (options) {
        var defaults = {
            name: "",
            width: 420,
            height: 240,
            title: "",
            drag: true,
            closed: true,
            content: "",
            mask: true,
            maskStyle: {backgroundColor: "#fff", opacity: 0.1},
            lockScreen: true,
            footer: true,
            buttons: false
        };
        options = $.extend(true, defaults, options);
        var editor = this.editor;
        var classPrefix = editormd.classPrefix;
        var guid = (new Date()).getTime();
        var dialogName = ((options.name === "") ? classPrefix + "dialog-" + guid : options.name);
        var mouseOrTouch = editormd.mouseOrTouch;
        var html = "<div class=\"" + classPrefix + "dialog " + dialogName + "\">";
        if (options.title !== "") {
            html += "<div class=\"" + classPrefix + "dialog-header\"" + ((options.drag) ? " style=\"cursor: move;\"" : "") + ">";
            html += "<strong class=\"" + classPrefix + "dialog-title\">" + options.title + "</strong>";
            html += "</div>"
        }
        if (options.closed) {
            html += "<a href=\"javascript:;\" class=\"fa fa-close " + classPrefix + "dialog-close\"></a>"
        }
        html += "<div class=\"" + classPrefix + "dialog-container\">" + options.content;
        if (options.footer || typeof options.footer === "string") {
            html += "<div class=\"" + classPrefix + "dialog-footer\">" + ((typeof options.footer === "boolean") ? "" : options.footer) + "</div>"
        }
        html += "</div>";
        html += "<div class=\"" + classPrefix + "dialog-mask " + classPrefix + "dialog-mask-bg\"></div>";
        html += "<div class=\"" + classPrefix + "dialog-mask " + classPrefix + "dialog-mask-con\"></div>";
        html += "</div>";
        editor.append(html);
        var dialog = editor.find("." + dialogName);
        dialog.lockScreen = function (lock) {
            if (options.lockScreen) {
                $("html,body").css("overflow", (lock) ? "hidden" : "")
            }
            return dialog
        };
        dialog.showMask = function () {
            if (options.mask) {
                editor.find("." + classPrefix + "mask").css(options.maskStyle).css("z-index", editormd.dialogZindex - 1).show()
            }
            return dialog
        };
        dialog.hideMask = function () {
            if (options.mask) {
                editor.find("." + classPrefix + "mask").hide()
            }
            return dialog
        };
        dialog.loading = function (show) {
            var loading = dialog.find("." + classPrefix + "dialog-mask");
            loading[(show) ? "show" : "hide"]();
            return dialog
        };
        dialog.lockScreen(true).showMask();
        dialog.show().css({
            zIndex: editormd.dialogZindex,
            border: (editormd.isIE8) ? "1px solid #ddd" : "",
            width: (typeof options.width === "number") ? options.width + "px" : options.width,
            height: (typeof options.height === "number") ? options.height + "px" : options.height
        });
        var dialogPosition = function () {
            dialog.css({
                top: ($(window).height() - dialog.height()) / 2 + "px",
                left: ($(window).width() - dialog.width()) / 2 + "px"
            })
        };
        dialogPosition();
        $(window).resize(dialogPosition);
        dialog.children("." + classPrefix + "dialog-close").bind(mouseOrTouch("click", "touchend"), function () {
            dialog.hide().lockScreen(false).hideMask()
        });
        if (typeof options.buttons === "object") {
            var footer = dialog.footer = dialog.find("." + classPrefix + "dialog-footer");
            for (var key in options.buttons) {
                var btn = options.buttons[key];
                var btnClassName = classPrefix + key + "-btn";
                footer.append("<button class=\"" + classPrefix + "btn " + btnClassName + "\">" + btn[0] + "</button>");
                btn[1] = $.proxy(btn[1], dialog);
                footer.children("." + btnClassName).bind(mouseOrTouch("click", "touchend"), btn[1])
            }
        }
        if (options.title !== "" && options.drag) {
            var posX, posY;
            var dialogHeader = dialog.children("." + classPrefix + "dialog-header");
            if (!options.mask) {
                dialogHeader.bind(mouseOrTouch("click", "touchend"), function () {
                    editormd.dialogZindex += 2;
                    dialog.css("z-index", editormd.dialogZindex)
                })
            }
            dialogHeader.mousedown(function (e) {
                e = e || window.event;
                posX = e.clientX - parseInt(dialog[0].style.left);
                posY = e.clientY - parseInt(dialog[0].style.top);
                document.onmousemove = moveAction
            });
            var userCanSelect = function (obj) {
                obj.removeClass(classPrefix + "user-unselect").off("selectstart")
            };
            var userUnselect = function (obj) {
                obj.addClass(classPrefix + "user-unselect").on("selectstart", function (event) {
                    return false
                })
            };
            var moveAction = function (e) {
                e = e || window.event;
                var left, top, nowLeft = parseInt(dialog[0].style.left), nowTop = parseInt(dialog[0].style.top);
                if (nowLeft >= 0) {
                    if (nowLeft + dialog.width() <= $(window).width()) {
                        left = e.clientX - posX
                    } else {
                        left = $(window).width() - dialog.width();
                        document.onmousemove = null
                    }
                } else {
                    left = 0;
                    document.onmousemove = null
                }
                if (nowTop >= 0) {
                    top = e.clientY - posY
                } else {
                    top = 0;
                    document.onmousemove = null
                }
                document.onselectstart = function () {
                    return false
                };
                userUnselect($("body"));
                userUnselect(dialog);
                dialog[0].style.left = left + "px";
                dialog[0].style.top = top + "px"
            };
            document.onmouseup = function () {
                userCanSelect($("body"));
                userCanSelect(dialog);
                document.onselectstart = null;
                document.onmousemove = null
            };
            dialogHeader.touchDraggable = function () {
                var offset = null;
                var start = function (e) {
                    var orig = e.originalEvent;
                    var pos = $(this).parent().position();
                    offset = {x: orig.changedTouches[0].pageX - pos.left, y: orig.changedTouches[0].pageY - pos.top}
                };
                var move = function (e) {
                    e.preventDefault();
                    var orig = e.originalEvent;
                    $(this).parent().css({
                        top: orig.changedTouches[0].pageY - offset.y,
                        left: orig.changedTouches[0].pageX - offset.x
                    })
                };
                this.bind("touchstart", start).bind("touchmove", move)
            };
            dialogHeader.touchDraggable()
        }
        editormd.dialogZindex += 2;
        return dialog
    };
    editormd.mouseOrTouch = function (mouseEventType, touchEventType) {
        mouseEventType = mouseEventType || "click";
        touchEventType = touchEventType || "touchend";
        var eventType = mouseEventType;
        try {
            document.createEvent("TouchEvent");
            eventType = touchEventType
        } catch (e) {
        }
        return eventType
    };
    editormd.dateFormat = function (format) {
        format = format || "";
        var addZero = function (d) {
            return (d < 10) ? "0" + d : d
        };
        var date = new Date();
        var year = date.getFullYear();
        var year2 = year.toString().slice(2, 4);
        var month = addZero(date.getMonth() + 1);
        var day = addZero(date.getDate());
        var weekDay = date.getDay();
        var hour = addZero(date.getHours());
        var min = addZero(date.getMinutes());
        var second = addZero(date.getSeconds());
        var ms = addZero(date.getMilliseconds());
        var datefmt = "";
        var ymd = year2 + "-" + month + "-" + day;
        var fymd = year + "-" + month + "-" + day;
        var hms = hour + ":" + min + ":" + second;
        switch (format) {
            case"UNIX Time":
                datefmt = date.getTime();
                break;
            case"UTC":
                datefmt = date.toUTCString();
                break;
            case"yy":
                datefmt = year2;
                break;
            case"year":
            case"yyyy":
                datefmt = year;
                break;
            case"month":
            case"mm":
                datefmt = month;
                break;
            case"cn-week-day":
            case"cn-wd":
                var cnWeekDays = ["日", "一", "二", "三", "四", "五", "六"];
                datefmt = "星期" + cnWeekDays[weekDay];
                break;
            case"week-day":
            case"wd":
                var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                datefmt = weekDays[weekDay];
                break;
            case"day":
            case"dd":
                datefmt = day;
                break;
            case"hour":
            case"hh":
                datefmt = hour;
                break;
            case"min":
            case"ii":
                datefmt = min;
                break;
            case"second":
            case"ss":
                datefmt = second;
                break;
            case"ms":
                datefmt = ms;
                break;
            case"yy-mm-dd":
                datefmt = ymd;
                break;
            case"yyyy-mm-dd":
                datefmt = fymd;
                break;
            case"yyyy-mm-dd h:i:s ms":
            case"full + ms":
                datefmt = fymd + " " + hms + " " + ms;
                break;
            case"full":
            case"yyyy-mm-dd h:i:s":
            default:
                datefmt = fymd + " " + hms;
                break
        }
        return datefmt
    };
    return editormd
}));